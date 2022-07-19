const NormalUser = require('../models/NormalUser');
const ErrorResponse = require('../utils/ErrorMessage');
const { FoPaEmail } = require('../helpers/Functions');
const crypto = require('crypto');


// @route POST api/auth/general-users/forgot-password
// @desc enviar el correo de recuperacion de la contraseña
// @access public

const ForgotPassword = async (req, res, next) => {
  try {
    const { Dui, Email } = req.body;

    if (!Dui || !Email) {
      return next(new ErrorResponse('Por favor rellene todos los campos', 401, 'error'))
    }

    const ValidateEmail = await NormalUser.findOne({ Email });
    if (ValidateEmail.Dui !== Dui) {
      return next(new ErrorResponse('El Email y el Dui no coinciden', 401, 'error'))
    }

    // validacion de la verificacion del email
    const isVerifyEmail = await NormalUser.findOne({ Email, verifyCode: undefined })
    if (!isVerifyEmail) {
      return next(new ErrorResponse('Su Email no esta verificado, por favor verifiquelo', 401, 'error'))
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


    if (isActivedAcc.Dui !== Dui) {
      return next(new ErrorResponse('El Dui y el Email no coinciden', 400, 'error'));
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

const resetPasswordVerify = async (req, res, next) => {
  try {
    if (!req.resetToken) {
      return next(new ErrorResponse('Esta ruta es protegida, no puede acceder sin autorizacion', 404, 'error'))
    }
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    const isNormalUser = await NormalUser.findOne({ resetPasswordToken, resetPasswordExpire: { $gt: Date.now() } }).select('+Password')
    if (!isNormalUser) {
      return next(new ErrorResponse("Esta ruta es protegida, no puede acceder sin autorizacion", 400, 'error'));
    }

    res.status(200).json({ success: true, data: isNormalUser });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}



// @route PUT api/auth/general-users/reset-password
// @desc Reestablecer la contraseña
// @access private

const resetPassword = async (req, res, next) => {
  try {

    if (!req.resetToken) {
      return next(new ErrorResponse('Esta ruta es protegida, no puede acceder sin autorizacion', 404, 'error'))
    }
    const resetPasswordToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");

    const isNormalUser = await NormalUser.findOne({ resetPasswordToken, resetPasswordExpire: { $gt: Date.now() } }).select('+Password')
    if (!isNormalUser) {
      return next(new ErrorResponse("Esta ruta es protegida, no puede acceder sin autorizacion", 400, 'error'));
    }

    const { Password } = req.body;
    // validacion del token en el backend
    if (!Password) {
      return next(new ErrorResponse('Por favor rellene todos los campos', 401, 'error'));
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
    const { verifyCode, Email } = req.body;

    const QueryCode = await NormalUser.findOne({ Email })

    if (!verifyCode || !Email) {
      return next(new ErrorResponse('Por favor rellene todos los campos', 400, 'error'));
    }

    if (QueryCode.verifyCode === undefined) {
      return next(new ErrorResponse('El Email es ya está verificado', 400, 'error'));
    }
    if (QueryCode.verifyCode !== verifyCode) {
      return next(new ErrorResponse('El codigo es incorrecto', 400, 'error'));
    }

    // aqui irian las validaciones del business user
    // -
    // -

    QueryCode.verifyCode = undefined;

    await QueryCode.save()

    res.status(201).json({ success: true, message: '¡Validacion Exitosa!' })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message })
  }
}

module.exports = { ForgotPassword, resetPassword, VerifyEmailCode, resetPasswordVerify }