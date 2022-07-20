const NormalUser = require('../models/NormalUser');
const ErrorResponse = require('../utils/ErrorMessage');
const GlobalData = require('../models/GlobalData');

const testDB = async (req, res, next) => {
  try {
    const { yes } = req.body;

    Token = req.resetToken

    if (!Token) {
      return next(new ErrorResponse('Esta ruta es protegida, no puede acceder sin autorizacion', 404, 'error'))
    }

    const queryUser = await NormalUser.findOne({ _id: Token.user.id });

    queryUser.AccountRuning = true;

    queryUser.save();

    const newGlobalData = await new GlobalData({ Notifications: [{ Titulo: 'hola', Icono: 'Icono', Url: 'http://hola.com' }], Contacts: [{ Name: 'Alvin Josue Melendez Serrano', Dui: '123456-7', Photo: 'URLDEFOTO...' }], Prestamo: { Tipo: 'Tipo1', Monto: 1060, Pagos: [{}] }, Cards: [{}], UserOwner: queryUser._id })

    const response = await newGlobalData.save();

    console.log(response);

    res.json({ success: true, message: 'STATUS UPDATED' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

const PushDB = async (req, res, next) => {
  try {
    Token = req.resetToken

  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

module.exports = {
  testDB,
  PushDB
}
