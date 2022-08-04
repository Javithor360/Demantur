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

const getContacts = async (req, res, next) => {
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

    // const SeparadorArrays = (array1, array2) => {
    //   for (let index1 = 0; index1 < array1.length; index1++) {
    //     let igual = false;
    //     for (let index2 = 0; index2 < array2.length; index2++) {
    //       if (array1[index1] === array2[index2]) {
    //         igual = true;
    //       }
    //     }
    //     if (!igual) {
    //       array3.push(array1[index1]);
    //     }
    //   }
    // }

    const user = await NormalUser.findOne({ _id: token.user.id })

    const usersFiltrated = AllUsers.filter((item) => {
      return item._id.toString() !== token.user.id.toString()
    });

    res.status(200).json({ success: true, data: usersFiltrated })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}

module.exports = {
  testDB,
  getUserId,
  getContacts,
  getFriendsReq
};
