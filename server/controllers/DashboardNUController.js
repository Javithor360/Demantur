const NormalUser = require("../models/NormalUser");
const ErrorResponse = require("../utils/ErrorMessage");
const GlobalData = require("../models/GlobalData");
const Settings = require("../models/Settings");
// const SavingAccount = require("../models/SavingAccount");

const testDB = async (req, res, next) => {
  try {
    Token = req.resetToken;

    if (!Token) {
      return next(
        new ErrorResponse(
          "Esta ruta es protegida, no puede acceder sin autorizacion",
          404,
          "error"
        )
      );
    }

    const queryUser = await NormalUser.findOne({ _id: Token.user.id });

    queryUser.AccountRuning = true;

    queryUser.save();

    const newGlobalData = await new GlobalData({
      Notifications: [],
      Contacts: [],
      Prestamo: {},
      Cards: [],
      DataOwner: queryUser._id,
    });

    const GoblaDataRes = await newGlobalData.save();

    const newSettings = await new Settings({
      SettingsOwner: queryUser._id,
      RecoveryEmail: undefined,
      PerfilPhoto: {
        Url: undefined,
        public_id: undefined,
      }
    })

    const SettingsRes = await newSettings.save();

    res.json({ success: true, data: { "MODELO GLOBAL DATA": GoblaDataRes, "MODELO SETTINGS": SettingsRes } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};


const getUserId = async (req, res, next) => {
  try {
    const token = req.resetToken;

    const query = await NormalUser.findOne({ _id: token.user.id });

    res.status(200).json({ success: true, data: query });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
};

const getGlobalInfo = async (req, res, next) => {
  try {
    const token = req.resetToken;

    const query = await GlobalData.findOne({ DataOwner: token.user.id });

    res.status(200).json({ success: true, data: query })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const getFriendsReq = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const AllUsers = await NormalUser.find();
    const PedingFriends = await GlobalData.findOne({ DataOwner: token.user.id });
    let arrayFil1 = [];
    let arrayFil2 = [];
    let arrayFil3 = [];

    const SeparadorArrays = (array1, array2, arrayFiltrated) => {
      for (let index1 = 0; index1 < array1.length; index1++) {
        let igual = false;
        for (let index2 = 0; index2 < array2.length; index2++) {
          if (array2.length !== 0) {
            if (array1[index1].Dui === array2[index2].Dui) {
              igual = true;
            }
          }
        }
        if (!igual) {
          arrayFiltrated.push(array1[index1]);
        }
      }
    }

    // filtrar del usuario logeado
    const usersFiltrated = AllUsers.filter((item) => {
      return item._id.toString() !== token.user.id.toString()
    });

    SeparadorArrays(usersFiltrated, PedingFriends.PendingFriendReq, arrayFil1);
    SeparadorArrays(arrayFil1, PedingFriends.FriendRequests, arrayFil2);
    SeparadorArrays(arrayFil2, PedingFriends.Contacts, arrayFil3);

    res.status(200).json({ success: true, data: arrayFil3 })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


// post

const addFriendRequest = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const { el: element } = req.body;

    const UserRequested1 = await NormalUser.findOne({ _id: element._id });
    const ThisUser1 = await NormalUser.findOne({ _id: token.user.id });

    const ThisUserGlobalData = await GlobalData.findOne({ DataOwner: token.user.id });
    let Filter = ThisUserGlobalData.Contacts.filter((contact) => contact.Dui === element.Dui);

    if (Filter.length === 0) {
      await GlobalData.findOneAndUpdate(
        { DataOwner: token.user.id },
        {
          $addToSet: {
            PendingFriendReq: {
              Name: `${UserRequested1.FirstName} ${UserRequested1.LastName}`,
              Dui: UserRequested1.Dui,
              Photo: 'foto link',
            }
          }
        }
      );

      await GlobalData.findOneAndUpdate(
        { DataOwner: element._id },
        {
          $addToSet: {
            FriendRequests: {
              Name: `${ThisUser1.FirstName} ${ThisUser1.LastName}`,
              Dui: ThisUser1.Dui,
              Photo: 'foto link',
            }
          }
        }
      )

      res.status(200).json({ success: true, data: 'Solicitud enviada Correctamente' })
    } else {
      res.status(400).json({ success: true, data: 'Usuario ya solicitado' })
    }


  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

// put
const CancelPendingFr = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const { el: element } = req.body;

    const UserRequested1 = await NormalUser.findOne({ Dui: element.Dui });
    const ThisUser1 = await NormalUser.findOne({ _id: token.user.id });

    await GlobalData.findOneAndUpdate(
      { DataOwner: token.user.id },
      { $pull: { PendingFriendReq: { Dui: element.Dui } } }
    );

    await GlobalData.findOneAndUpdate(
      { DataOwner: UserRequested1._id },
      { $pull: { FriendRequests: { Dui: ThisUser1.Dui } } }
    );

    res.status(200).json({ success: true, data: { message: 'Eliminado Correctamente' } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    console.log(error);
  }
}

const AcceptFriend = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const { el: element } = req.body;

    const UserRequested = await NormalUser.findOne({ Dui: element.Dui });
    const ThisUser = await NormalUser.findOne({ _id: token.user.id });


    await GlobalData.findOneAndUpdate(
      { DataOwner: token.user.id },
      { $pull: { FriendRequests: { Dui: element.Dui } } }
    );

    await GlobalData.findOneAndUpdate(
      { DataOwner: UserRequested._id },
      { $pull: { PendingFriendReq: { Dui: ThisUser.Dui } } }
    );

    // agregar contacto
    await GlobalData.findOneAndUpdate(
      { DataOwner: token.user.id },
      {
        $addToSet: {
          Contacts: {
            Name: `${UserRequested.FirstName} ${UserRequested.LastName}`,
            Dui: UserRequested.Dui,
            Photo: 'foto link',
          }
        }
      }
    );
    await GlobalData.findOneAndUpdate(
      { DataOwner: UserRequested._id },
      {
        $addToSet: {
          Contacts: {
            Name: `${ThisUser.FirstName} ${ThisUser.LastName}`,
            Dui: ThisUser.Dui,
            Photo: 'foto link',
          }
        }
      }
    );

    res.status(200).json({ success: true, data: 'Agregado correctamente' });


  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


const DeclineFriend = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const { el: element } = req.body;

    const UserRequested = await NormalUser.findOne({ Dui: element.Dui });
    const ThisUser = await NormalUser.findOne({ _id: token.user.id });

    await GlobalData.findOneAndUpdate(
      { DataOwner: token.user.id },
      { $pull: { FriendRequests: { Dui: UserRequested.Dui } } }
    );

    await GlobalData.findOneAndUpdate(
      { DataOwner: UserRequested._id },
      { $pull: { PendingFriendReq: { Dui: ThisUser.Dui } } }
    );


    res.status(200).json({ success: true, data: 'se rechazo correctamente' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


const DeleteFriend = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const { el: element } = req.body;

    const UserRequested = await NormalUser.findOne({ Dui: element.Dui });
    const ThisUser = await NormalUser.findOne({ _id: token.user.id });

    await GlobalData.findOneAndUpdate(
      { DataOwner: token.user.id },
      { $pull: { Contacts: { Dui: element.Dui } } }
    );

    await GlobalData.findOneAndUpdate(
      { DataOwner: UserRequested._id },
      { $pull: { Contacts: { Dui: ThisUser.Dui } } }
    );

    res.status(200).json({ success: true, data: 'se elimino correctamente' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
    console.log(error)
  }
}

// const DeclineFriend = async (req, res, next) => {
//   try {
//     const token = req.resetToken;

//   } catch (error) {
//     res.status(500).json({ success: false, error: error.message });
//   }
// }


// CONTROLLERS OF TRANSFERS
// CONTROLLERS OF TRANSFERS
// CONTROLLERS OF TRANSFERS
// CONTROLLERS OF TRANSFERS

// POST
const DoAtransfer = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const { SenderDui, ReciverDui, Amount, AccountN, Type, createdAt } = req.body;
    let mader, receiver;

    const ThisUser = await NormalUser.findOne({ _id: token.user.id });
    if (SenderDui === ThisUser.Dui) {
      // MADE TRANSFER
      const RequestedUser = await NormalUser.findOne({ Dui: ReciverDui });
      mader = token.user.id;
      receiver = RequestedUser._id
    } else {
      // RECEIVE TRANSFER
      const RequestedUser = await NormalUser.findOne({ Dui: SenderDui });
      mader = RequestedUser._id;
      receiver = token.user.id;
    }

    // MADER
    const TransferMade = await GlobalData.findOneAndUpdate(
      { DataOwner: mader },
      { $addToSet: { 'TransfersHistory.Made': { SenderDui, ReciverDui, Amount, AccountN, Type, createdAt } } }
    );

    // RECEIVER
    await GlobalData.findOneAndUpdate(
      { DataOwner: receiver },
      { $addToSet: { 'TransfersHistory.Received': { SenderDui, ReciverDui, Amount, AccountN, Type, createdAt } } }
    );

    const Transfers = await GlobalData.findOne({ DataOwner: TransferMade.DataOwner })

    res.status(200).json({ success: true, data: Transfers.TransfersHistory.Made.pop() })
  } catch (error) {
    res.status(500).json({ success: false, error: error });
  }
}

module.exports = {
  testDB,
  getUserId,
  getGlobalInfo,
  getFriendsReq,
  addFriendRequest,
  CancelPendingFr,
  AcceptFriend,
  DeclineFriend,
  DeleteFriend,
  DoAtransfer
};
