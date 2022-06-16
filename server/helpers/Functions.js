const bcrypt = require('bcryptjs');

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