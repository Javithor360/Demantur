const NormalUser = require("../models/NormalUser");
const ErrorResponse = require("../utils/ErrorMessage");
const GlobalData = require("../models/GlobalData");
const Settings = require("../models/Settings");
const CardsRequests = require("../models/CardsRequests");
const LoansModels = require('../models/LoansModels')
const SavingsAccount = require('../models/SavingsAccount');
const { uploadRegisterImage } = require("../libs/cloudinary");
const fs = require("fs-extra");
const { ChangeEmailFunc, createCode } = require("../helpers/Functions");
const CardsModel = require("../models/CardsModel");
const DebitCardModel = require("../models/DebitCardModel");
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


const getContacs = async (req, res, next) => {
  try {
    const token = req.resetToken;

    const ContactsWtPic = await GlobalData.findOne({ DataOwner: token.user.id });
    const isNormalUsers = await NormalUser.find();
    let auxContacts = ContactsWtPic.Contacts;
    let ContactsWithPic = []

    ContactsWithPic = ContactsWtPic.Contacts.map((Contact, index) => {
      isNormalUsers.forEach(element => {
        if (element.Dui === Contact.Dui) {
          auxContacts[index].Photo = element.PerfilPhoto.url;
        }
      });
      return auxContacts[index]
    })

    res.status(200).json({ success: true, data: ContactsWithPic })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

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
              Photo: null,
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
              Photo: null,
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
            Photo: null,
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
            Photo: null,
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
    const { SenderDui, ReciverDui, Amount, AccountN, AccountReceiver, Type, createdAt } = req.body;
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

    const EveryAcc = await SavingsAccount.find()


    // MADER

    const MaderAccount = await SavingsAccount.findOne({ AccountOwner: mader })
    EveryAcc.forEach(async (element) => {
      console.log(element.accountNumber);
      console.log(AccountN);
      if (element.accountNumber == AccountN) {
        await SavingsAccount.findOneAndUpdate(
          { accountNumber: AccountN },
          { balance: (parseFloat(MaderAccount.balance) - parseFloat(Amount)).toFixed(2) }
        )
      }
    });

    const TransferMade = await GlobalData.findOneAndUpdate(
      { DataOwner: mader },
      { $push: { 'TransfersHistory.Made': { SenderDui, ReciverDui, Amount, AccountN, AccountReceiver, Type, createdAt } } }
    );

    // RECEIVER

    const ReceiverAccount = await SavingsAccount.findOne({ AccountOwner: receiver })

    EveryAcc.forEach(async element => {
      if (element.accountNumber == AccountReceiver) {
        await SavingsAccount.findOneAndUpdate(
          { accountNumber: AccountReceiver },
          { balance: (parseFloat(ReceiverAccount.balance) + parseFloat(Amount)).toFixed(2) }
        )
      }
    });

    await GlobalData.findOneAndUpdate(
      { DataOwner: receiver },
      { $push: { 'TransfersHistory.Received': { SenderDui, ReciverDui, Amount, AccountN, AccountReceiver, Type, createdAt } } }
    );

    const Transfers = await GlobalData.findOne({ DataOwner: TransferMade.DataOwner })
    let TheRes = Transfers.TransfersHistory.Made.pop()

    res.status(200).json({ success: true, data: TheRes })
  } catch (error) {
    res.status(500).json({ success: false, error: error });
    console.log(error);
  }
}

const getMyCardReq = async (req, res, next) => {
  try {
    let exportss;
    const token = req.resetToken;


    const isHadCardReq = await CardsRequests.findOne({ CardOwner: token.user.id })
    if (isHadCardReq) {
      exportss = isHadCardReq
    } else {
      exportss = false
    }

    res.status(200).json({ success: true, data: exportss })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


const getMyLoanReq = async (req, res, next) => {
  try {
    let exportss;
    const token = req.resetToken;


    const isHadLoanReq = await LoansModels.findOne({ loan_guarantor: token.user.id })
    if (isHadLoanReq) {
      exportss = isHadLoanReq
    } else {
      exportss = false
    }

    res.status(200).json({ success: true, data: exportss })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


const getSavAcc = async (req, res, next) => {
  try {
    const token = req.resetToken;

    const queryAccount = await SavingsAccount.find();

    let filterArray = queryAccount.filter(SingAcc => SingAcc.AccountOwner == token.user.id)

    res.status(200).json({ success: true, data: filterArray });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const UploadPhoto = async (req, res, next) => {
  try {
    const token = req.resetToken;
    let ImagePhoto;

    if (req.files?.Image) {
      ImagePhoto = req.files.Image
    } else {
      return next(new ErrorResponse("No se ha subido ninguna imagen", 400, "error"))
    }

    const result = await uploadRegisterImage(ImagePhoto.tempFilePath);
    await fs.remove("./upload");

    const user = await NormalUser.findOneAndUpdate({ _id: token.user.id }, {
      PerfilPhoto: {
        url: result.secure_url,
        public_id: result.public_id
      }
    })

    res.status(200).json({ success: true, data: { url: result.secure_url, public_id: result.public_id } });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const getNavName = async (req, res, next) => {
  try {
    const token = req.resetToken;

    const query = await NormalUser.findOne({ _id: token.user.id });
    res.status(200).json({ success: true, data: query });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const getEveryAcc = async (req, res, next) => {
  try {
    const token = req.resetToken;

    const AllAccounts = await SavingsAccount.find();
    const AllUsers = await NormalUser.find();

    let AccountsWithUsers = [];

    AllAccounts.forEach((element1, i) => {
      AllUsers.forEach(element2 => {
        if (element1?.AccountOwner?.toString() === element2._id?.toString()) {
          let datos = { Dui: null, accountNumber: null };
          datos.Dui = element2.Dui;
          datos.accountNumber = element1.accountNumber;

          AccountsWithUsers.push(datos);
        }
      });
    });

    res.status(200).json({ success: true, data: AccountsWithUsers })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


const ChangeEmail = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const { Email } = req.body

    const User = await NormalUser.findOne({ _id: token.user.id });

    const isSetted = await NormalUser.findOne({ Email: Email });

    if (!/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(Email)) {
      return next(new ErrorResponse("Ingrese un Email Valido", 400, "error"))
    }

    if (!Email) {
      return next(new ErrorResponse("Ingrese su Email", 400, "error"))
    }

    if (isSetted) {
      return next(new ErrorResponse("Este Email ya está registrado", 400, "error"))
    }
    if (User.Email == Email) {
      return next(new ErrorResponse("El email no puede ser igual al anterior", 400, "error"))
    } else {
      const code = createCode();
      User.ChangeEmailCode = code;
      User.NewEmail = Email;
      await User.save()
      ChangeEmailFunc(code, Email, res);
      res.status(200).json({ success: true, data: { code, Email } })
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const EmailCodeVer = async (req, res, next) => {
  try {
    const { Code, Email } = req.body
    const getAllUsers = await NormalUser.find()
    let UserWithCode = null;

    getAllUsers.forEach(async (element) => {
      if (element.ChangeEmailCode === Code) {
        UserWithCode = element
      }
    });

    if (UserWithCode !== null) {
      if (UserWithCode.ChangeEmailCode === Code) {
        UserWithCode.Email = Email;
        UserWithCode.ChangeEmailCode = undefined;
        UserWithCode.NewEmail = undefined;
        await UserWithCode.save()
        res.status(200).json({ success: true });
      }
    } else {
      return next(new ErrorResponse("El codigo es invalido", 400, "error"))
    }


  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const CancelChangeEmail = async (req, res, next) => {
  try {
    const { Code } = req.body
    console.log(Code)

    const User = await NormalUser.findOne({ ChangeEmailCode: Code });

    User.NewEmail = undefined;
    User.ChangeEmailCode = undefined;


    User.save()

    res.status(200).json({ succes: true })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const CancelChangePass = async (req, res, next) => {
  try {
    const { Code } = req.body
    console.log(Code)

    const User = await NormalUser.findOne({ ChangePassCode: Code });

    User.NewPassword = undefined;
    User.ChangePassCode = undefined;


    User.save()

    res.status(200).json({ succes: true })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const VerifyOldPass = async (req, res, next) => {
  try {
    const { OldPass } = req.body
    const token = req.resetToken;

    const User = await NormalUser.findOne({ _id: token.user.id }).select("+Password");
    const isMatchPass = await User.matchPasswords(OldPass);

    if (!isMatchPass) {
      return next(new ErrorResponse("La contraseña no coincide", 401, "error"));
    } else {
      res.status(200).json({ success: true });
    }
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const ChangePass = async (req, res, next) => {
  try {
    const { Password } = req.body
    const token = req.resetToken;

    const User = await NormalUser.findOne({ _id: token.user.id }).select("+Password");

    if (!/^(?=\w*\d)(?=\w*[A-Z])(?=\w*[a-z])\S{8,16}$/.test(Password)) {
      return next(
        new ErrorResponse("La contraseña no es valida", 400, "error")
      );
    }

    const isMatchPass = await User.matchPasswords(Password);
    if (isMatchPass) {
      return next(new ErrorResponse("La contraseña no puede ser igual a la anterior", 401, "error"));
    } else {
      const code = createCode();
      User.ChangePassCode = code;
      User.NewPassword = Password;
      User.save()
      res.status(200).json({ success: true });
    }

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const VerifyCodePass = async (req, res, next) => {
  try {
    const { Code } = req.body
    const token = req.resetToken;

    const User = await NormalUser.findOne({ _id: token.user.id }).select("+Password");

    if (User.ChangePassCode == Code) {
      User.Password = User.NewPassword;
      User.ChangePassCode = undefined;
      User.NewPassword = undefined;
      User.save();
      res.status(200).json({ success: true });
    } else {
      return next(new ErrorResponse("El codigo es incorrecto", 401, "error"));
    }

  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const getPedingFriendReq = async (req, res, next) => {
  try {
    const token = req.resetToken;

    const GlobalD = await GlobalData.findOne({ DataOwner: token.user.id });
    const NormalUsers = await NormalUser.find();

    let PendingFr = GlobalD.PendingFriendReq;
    let SendArr = []

    NormalUsers.forEach(element1 => {
      PendingFr.forEach(element2 => {
        if (element1?.Dui == element2?.Dui) {
          let inf = {};
          inf.Name = element2.Name;
          inf.Dui = element2.Dui;
          inf.Photo = element1.PerfilPhoto.url;
          SendArr.push(inf);
        }
      });
    });

    res.status(200).json({ success: true, data: SendArr });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const FriendReq = async (req, res, next) => {
  try {
    const token = req.resetToken;

    const GlobalD = await GlobalData.findOne({ DataOwner: token.user.id });
    const NormalUsers = await NormalUser.find();

    let FriendReq = GlobalD.FriendRequests;
    let SendArr = []

    NormalUsers.forEach(element1 => {
      FriendReq.forEach(element2 => {
        if (element1?.Dui == element2?.Dui) {
          let inf = {};
          inf.Name = element2.Name;
          inf.Dui = element2.Dui;
          inf.Photo = element1.PerfilPhoto.url;
          SendArr.push(inf);
        }
      });
    });

    res.status(200).json({ success: true, data: SendArr });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const getUsersToAdd = async (req, res, next) => {
  try {
    const AllUsers = await NormalUser.find()
    res.status(200).json({ success: true, data: AllUsers });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}


const getAccountsHistory = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const AccountNumber = req.header('AccountNumber');
    if (!AccountNumber) {
      return next(new ErrorResponse('No se encontró el número de cuenta', 400, 'error'))
    }

    let filterArray,
      depHistory = [],
      withHistory = [],
      transferMadeHistory = [],
      transferReceivedHistory = [],
      generalHistory = [];

    const DepQuery = await GlobalData.findOne({ DataOwner: token.user.id });
    if (!DepQuery) {
      return next(new ErrorResponse('El usuario no existe', 400, 'error'))
    }

    filterArray = DepQuery.Deposits.filter(i => i.Account == AccountNumber);
    depHistory.push({ Deposits: filterArray })

    filterArray = DepQuery.withdrawHistory.filter(i => i.Account == AccountNumber);
    withHistory.push({ Withdraws: filterArray });

    filterArray = DepQuery.TransfersHistory.Made.filter(el => el.AccountN == AccountNumber);
    transferMadeHistory.push({ TransferMade: filterArray });

    filterArray = DepQuery.TransfersHistory.Received.filter(el => el.AccountReceiver == AccountNumber);
    transferReceivedHistory.push({ TransferReceived: filterArray });

    generalHistory.push(depHistory, withHistory, transferMadeHistory, transferReceivedHistory);

    if (depHistory.length < 1) {
      return next(new ErrorResponse('No hay ningún dato', 400, 'error'))
    }
    res.status(200).json({ success: true, data: generalHistory });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const getMyCard = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const AllCards = await CardsModel.find()
    let MyCard = null;

    AllCards.forEach(element => {
      if (element.CardOwner.toString() == token.user.id.toString()) {
        MyCard = element
      }
    })

    res.status(200).json({ success: true, data: MyCard });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

const getDebitCard = async (req, res, next) => {
  try {
    const token = req.resetToken;
    const AllDebitCards = await DebitCardModel.find()
    let MyDebitCard = null;

    AllDebitCards.forEach(element => {
      if (element.CardOwner.toString() == token.user.id.toString()) {
        MyDebitCard = element;
      }
    });
    res.status(200).json({ success: true, data: MyDebitCard });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
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
  DoAtransfer,
  getMyCardReq,
  getMyLoanReq,
  getContacs,
  getSavAcc,
  UploadPhoto,
  getNavName,
  getEveryAcc,
  ChangeEmail,
  getAccountsHistory,
  EmailCodeVer,
  CancelChangeEmail,
  VerifyOldPass,
  ChangePass, VerifyCodePass, CancelChangePass, getPedingFriendReq, FriendReq, getUsersToAdd, getMyCard, getDebitCard
};

