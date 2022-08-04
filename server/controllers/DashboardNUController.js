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

const PushDB = async (req, res, next) => {
  try {
    Token = req.resetToken;
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

module.exports = {
  testDB,
  PushDB,
  getUserId,
  getContacts,
};
