const bcrypt = require('bcryptjs');
const sendEmail = require('../utils/SendMail')
const ErrorResponse = require('../utils/ErrorMessage');

// Funcion para encryptar la password
exports.encryptPassword = async (password) => {
  let salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt)
}

// Funcion para crear y enviar el token al usuairo
exports.sendToken = (NewNormalUser, res) => {
  const token = NewNormalUser.getSignedToken();
  res.json({ success: true, token })
};


// Enviar email de recuperacion
exports.FoPaEmail = async (resetToken, isNormalUser, next, res) => {
  await isNormalUser.save();

  const resetUrl = `http://localhost:3000/passwordreset/${resetToken}`

  const message = `
    <h1>Tienes una solicitud para cambiar tu contraseña</h1>
    <p>Por favor ingrese a este link para cambiar su contraseña</p>
    <a href=${resetUrl} clicktracking=off>${resetUrl}</a>
  `
  try {
    await sendEmail({
      to: isNormalUser.Email,
      subject: 'Solicitud de cambio de contraseña',
      text: message
    });

    res.status(200).json({ success: true, resetToken });
  } catch (error) {
    // resetear datos de la base de datos
    isNormalUser.resetPasswordToken = undefined;
    isNormalUser.resetPasswordExpire = undefined;

    await isNormalUser.save();

    return next(new ErrorResponse("El EMAIL NO SE PUDO ENVIAR", 500, 'error'));
  }
}

// creacion del codigo de verificacion del email
exports.createCode = () => {
  let code = Math.random() * (900000 - 100000)
  code = code + 100000;
  code = Math.trunc(code);

  return code;
}

// Enviar email de verificacion del email 
exports.VeCoEmail = async (verifyCode, isNormalUser, next) => {
  try {
    const message = `
    <h1>CODIGO DE VERIFICACION:</h1>
    <p><strong>${verifyCode}</strong></p>
    `

    await sendEmail({
      to: isNormalUser.Email,
      subject: 'Codigo de verificacion de Email',
      text: message,
    });

    // res.status(200).json({ success: true, message: "EMAIL ENVIADO" });
  } catch (error) {
    return next(new ErrorResponse("El EMAIL NO SE PUDO ENVIAR", 500, 'error'));
  }
}