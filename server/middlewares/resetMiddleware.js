const NormalUser = require('../models/NormalUser');
const crypto = require('crypto');
const ErrorResponse = require('../utils/ErrorMessage');

module.exports = async function (req, res, next) {
  try {
    const resetToken = crypto.createHash("sha256").update(req.params.resetToken).digest("hex");
    if (!resetToken) {
      return next(new ErrorResponse("No hay token", 401, 'error'));
    }

    const Query1 = await NormalUser.findOne({ resetPasswordToken: resetToken, resetPasswordExpire: { $gt: Date.now() } });
    if (!Query1) {
      return next(new ErrorResponse("No puede entrar a esta pagina", 401, 'error'));
    }

    req.resetToken = resetToken;
    next()
  } catch (error) {
    res.status(401).json({ success: false, message: 'no se puede entrar a esta pagina' });
  }
}