const NormalUser = require("../models/NormalUser");
const ErrorResponse = require("../utils/ErrorMessage");
const GlobalData = require("../models/GlobalData");

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
      UserOwner: queryUser._id,
    });

    const response = await newGlobalData.save();


    res.json({ success: true, message: "STATUS UPDATED" });
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

module.exports = {
  testDB,
  PushDB,
  getUserId,
};
