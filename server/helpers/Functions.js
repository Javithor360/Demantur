const bcrypt = require('bcryptjs');

exports.encryptPassword = async (password) => {
  let salt = await bcrypt.genSalt(12);
  return bcrypt.hash(password, salt)
}