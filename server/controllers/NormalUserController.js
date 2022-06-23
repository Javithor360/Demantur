const DuiModel = require('../models/DuiModel');
const NormalUser = require('../models/NormalUser');
const ErrorResponse = require('../utils/ErrorMessage');
const { encryptPassword, sendToken, createCode, VeCoEmail } = require('../helpers/Functions');

// @route POST api/auth/normal-user/register
// @desc registro de un usuario normal
// @access public

const registerNormalUser = async (req, res, next) => {
  try {

    const { FirstName, LastName, Dui, Email, Password } = req.body

    // validaciones
    const UserExist = await NormalUser.findOne({ Email });
    if (UserExist) {
      return next(new ErrorResponse('Este Email ya está registrado en Demantur', 400, 'error'))
    }

    const DuiQuery1 = await NormalUser.findOne({ Dui })
    if (DuiQuery1) {
      return next(new ErrorResponse('Este Dui ya esta registrado en Demantur', 400, 'error'))
    }

    const DuiQuery2 = await DuiModel.findOne({ DuiNumber: Dui });
    if (!DuiQuery2) {
      return next(new ErrorResponse('Este numero de Dui no existe', 400, 'error'))
    }

    const DUiQuery3 = await DuiModel.findOne({ DuiFirstName: FirstName, DuiLastName: LastName })
    if (!DUiQuery3) {
      return next(new ErrorResponse('Los nombres del Dui no coinciden, Respetar mayusculas y minusculas', 400, 'error'))
    }

    // crear el codigo de verificacion
    const verifyCode = createCode();

    // Nuevo esquema
    const newNormalUser = await new NormalUser({ FirstName, LastName, Dui, Email, Password, verifyCode, ActivedAccount: false });

    // Encriptacion de la Password
    newNormalUser.Password = await encryptPassword(Password);

    // guardar en la DB
    await newNormalUser.save();

    // enviar correo de verificacion
    VeCoEmail(verifyCode, newNormalUser, res, next);

    // Creacion del TOKEN
    // sendToken(newNormalUser, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}


// @route POST api/auth/normal-user/login
// @desc Login del usuario normal
// @access public

const loginNormalUser = async (req, res, next) => {
  try {
    const { Dui, Email, Password } = req.body;

    // Validaciones
    const DuiQuery = await NormalUser.findOne({ Dui });
    if (!DuiQuery) {
      return next(new ErrorResponse('Este numero de Dui no esta registrado en Demantur', 401, 'error'))
    }

    const EmailQuery = await NormalUser.findOne({ Email });
    if (!EmailQuery) {
      return next(new ErrorResponse('Este Email no esta registrado en Demantur', 401, 'error'))
    }

    const isVerifyEmail = await NormalUser.findOne({ Email, verifyCode: undefined })
    if (!isVerifyEmail) {
      return next(new ErrorResponse('Su Email no esta verificado, por favor revise su Correo e ingrese el codigo en la siguiente pagina', 401, 'error'))
    }

    // Validacion para ver si la cuenta está activada
    const isActivedAcc = await NormalUser.findOne({ Email, ActivedAccount: true })
    if (!isActivedAcc) {
      return next(new ErrorResponse('Su cuenta no está Activada todavia, espere a que nuestros empleados acepten su solicitud', 401, 'error'))
    }

    // llamar usuario a la base de datos
    const newNormalUser = await NormalUser.findOne({ Email }).select('+Password');

    // validacion contraseña
    const isMatch = await newNormalUser.matchPasswords(Password);

    if (!isMatch) {
      return next(new ErrorResponse('Esta contraseña no coincide con los demás datos', 401, 'error'))
    }

    // Creacion del TOKEN
    sendToken(newNormalUser, res);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}


// @route GET api/auth/normal-user/profile
// @desc obtener los datos de un perfil (esto solo es para ver como lo hace, es solo un test)
// @access private

const getNormalUserProfile = async (req, res) => {
  try {
    const perfil = await NormalUser.findById(req.user.id).select('-password').select('-__v')
      .select('-createdAt').select('-updatedAt');

    if (!perfil) {
      return next(new ErrorResponse('El usuario no existe', 401, 'error'))
    }

    res.json(perfil);
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}


module.exports = {
  registerNormalUser,
  loginNormalUser,
  getNormalUserProfile
}