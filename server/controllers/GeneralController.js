const NormalUser = require('../models/NormalUser');
const ErrorResponse = require('../utils/ErrorMessage');
const { FoPaEmail } = require('../helpers/Functions');
const crypto = require('crypto')


// @route POST api/auth/general-users/forgot-password
// @desc enviar el correo de recuperacion de la contraseña
// @access public

const ForgotPassword = async (req, res, next) => {
  try {
    const { Dui, Email } = req.body;

    // validacion de la verificacion del email
    const isVerifyEmail = await NormalUser.findOne({ Email, verifyCode: undefined })
    if (!isVerifyEmail) {
      return next(new ErrorResponse('Su Email no esta verificado, por favor revise su Correo e ingrese el codigo en la siguiente pagina', 401, 'error'))
    }

    // Validacion para ver si la cuenta está activada
    const isActivedAcc = await NormalUser.findOne({ Email, ActivedAccount: true })
    if (!isActivedAcc) {
      return next(new ErrorResponse('Su cuenta no está Activada todavia, espere a que nuestros empleados acepten su solicitud', 401, 'error'))
    }

    // Querys para el usuario normal
    const Query1_NormalUSer = NormalUser.findOne({ Dui })
    if (!Query1_NormalUSer) {
      return next(new ErrorResponse('Este Dui No está Registrado', 400, 'error'));
    }

    const Query2_NormalUser = NormalUser.findOne({ Email });
    if (!Query2_NormalUser) {
      return next(new ErrorResponse('Este Email No está Registrado', 400, 'error'));
    }

    // Aqui irian los Querys del Business user
    // ---
    // ---

    if (Query1_NormalUSer && Query2_NormalUser) {
      const isNormalUser = await NormalUser.findOne({ Dui });

      const resetToken = isNormalUser.getResetPasswordToken();

      // enviar resetToken como header
      FoPaEmail(resetToken, isNormalUser, next, res);
    }


  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}


// @route PUT api/auth/general-users/reset-password
// @desc Reestablecer la contraseña
// @access private

const resetPassword = async (req, res, next) => {
  try {
    // validacion del middleware
    if (!req.resetToken) {
      return next(new ErrorResponse('La ruta es protegida, tiene que verificar su correo para poder cambiar su contraseña', 404, 'error'))
    }

    const { Password } = req.body
    // validacion del token en el backend
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    // querys
    const isNormalUser = await NormalUser.findOne({ resetPasswordToken, resetPasswordExpire: { $gt: Date.now() } }).select('+Password')
    if (!isNormalUser) {
      return next(new ErrorResponse("El tiempo para reestablecer su contraseña caduco, porfavor vuelva a ingresar sus datos", 400, 'error'));
    }

    const isMatch = await isNormalUser.matchPasswords(Password)
    if (isMatch) {
      return next(new ErrorResponse('La nueva contraseña no puede ser igual a la contraseña anterior', 400, 'error'));
    }

    // guardar datos en el esquema
    isNormalUser.Password = Password;
    isNormalUser.resetPasswordToken = undefined;
    isNormalUser.resetPasswordExpire = undefined;

    await isNormalUser.save();

    res.status(201).json({ success: true, message: 'La contraseña ha sido reestablecida' });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

// @route POST api/auth/general-users/verify-email-code
// @desc Operacion de verifiacion del codigo
// @access public

const VerifyEmailCode = async (req, res, next) => {
  try {
    const { verifyCode } = req.body;

    const QueryCode = await NormalUser.findOne({ verifyCode })
    if (!QueryCode) {
      return next(new ErrorResponse('El codigo es incorrecto', 400, 'error'))
    }

    // aqui irian las validaciones del business user
    // --
    // --

    QueryCode.verifyCode = undefined;

    await QueryCode.save()

    res.status(201).json({ success: true, message: 'Validacion Exitosa (REDIRECCION)' })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

module.exports = { ForgotPassword, resetPassword, VerifyEmailCode }