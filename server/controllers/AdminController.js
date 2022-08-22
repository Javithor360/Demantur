const { sendToken } = require('../helpers/Functions');
const Admin = require('../models/Admin');
const DuiModel = require('../models/DuiModel');
const ErrorResponse = require('../utils/ErrorMessage');

// @route POST api/auth/admin/login
// @desc Iniciar sesión como administrador
// @access private

const loginAdmin = async (req, res, next) => {
  try {
    const { Name, Password } = req.body;

    if (!Name || !Password) {
      return next(
        new ErrorResponse("Por favor, completa todos los campos", 400, "error")
      );
    }

    const NameQuery = await Admin.findOne({ Name }).select('+Password');
    if (!NameQuery) {
      return next(
        new ErrorResponse("Este usuario no existe", 401, "error")
      );
    }

    const isMatch = await NameQuery.matchPasswords(Password);
    if (!isMatch) {
      return next(
        new ErrorResponse("La contraseña no es valida", 401, "error")
      );
    }

    sendToken(NameQuery, res);
  } catch (error) {
    console.error(error)
    res.status(500).send(`ERROR: ${error.message}`);
  }
}


// @route POST api/admin/actions/create-dui
// @desc Crear un DUI en la base de datos
// @access private

const CreateDui = async (req, res) => {
  try {
    const { DuiFirstNames, DuiLastNames, DuiNumber, DuiDateBirth } = req.body

    const NewDui = await new DuiModel({ DuiFirstNames: DuiFirstNames.toLowerCase(), DuiLastNames: DuiLastNames.toLowerCase(), DuiNumber, DuiDateBirth });
    await NewDui.save();

    res.send(NewDui);
  } catch (error) {
    console.error(`Error del Servidor`)
    res.status(500).send(`ERROR: ${error.message}`);
  }
}

module.exports = {
  CreateDui,
  loginAdmin
}