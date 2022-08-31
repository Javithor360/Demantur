const { sendToken } = require('../helpers/Functions');
const Admin = require('../models/Admin');
const DuiModel = require('../models/DuiModel');
const GlobalData = require('../models/GlobalData');
const SavingsAccount = require('../models/SavingsAccount');
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

// @route POST api/admin/actions/withdraw
// @desc Simular el retiro de dinero
// @access private

const GhostWithdraw = async (req, res, next) => {
  try {
    const { AccountNumber, Amount } = req.body;

    if (!AccountNumber || !Amount) {
      return next(new ErrorResponse('Los datos están incompletos', 400, "error"))
    }

    const userQuery = await SavingsAccount.findOne({ accountNumber: AccountNumber }).select('AccountOwner accountNumber');
    if (!userQuery) {
      return next(
        new ErrorResponse("El número de cuenta no existe", 400, "error")
      );
    }

    const withdraw = await SavingsAccount.findOneAndUpdate(
      { accountNumber: AccountNumber },
      { $inc: { balance: -Amount } }
    );
    if (!withdraw) {
      return next(new ErrorResponse('Ocurrió un error al retirar el dinero', 400, "error"))
    }

    await GlobalData.findOneAndUpdate(
      { DataOwner: userQuery.AccountOwner },
      {
        $push: {
          withdrawHistory: {
            Amount: Amount,
            Account: userQuery.accountNumber,
            Date: new Date()
          }
        }
      }
    )
    res.status(200).json({ success: true, data: "Retiro fantasma hecho correctamente" })
  } catch (error) {
    console.error(`Error del Servidor`)
    res.status(500).send(`ERROR: ${error.message}`);
  }
}

module.exports = {
  CreateDui,
  loginAdmin,
  GhostWithdraw
}