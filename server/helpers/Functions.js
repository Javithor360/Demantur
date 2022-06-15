const bcrypt = require('bcryptjs');

// obviamente funcion para comer empanadas lol
exports.encryptPassword = async (password) => {
  let salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt)
}

//funcion para crear y enviar el token al usuairo
exports.sendToken = (NewNormalUser, res) => {
  const token = NewNormalUser.getSignedToken();
  res.json({ success: true, token })
};