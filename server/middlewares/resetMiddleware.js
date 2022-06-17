const NormalUser = require('../models/NormalUser');
const crypto = require('crypto');

module.exports = async function (req, res, next) {
  try {
    const resetToken = crypto.createHash("sha256").update(req.header('x-reset-token')).digest("hex");

    if (!resetToken) return res.status(401).json({ success: false, message: 'No hay token de reseteo' })

    const Query1 = await NormalUser.findOne({ resetPasswordToken: resetToken, resetPasswordExpire: { $gt: Date.now() } });

    if (!Query1) {
      return res.status(401).json({ success: false, message: 'El token no es valido' });
    }

    req.resetToken = resetToken;
    next()
  } catch (error) {
    res.status(401).json({ success: false, message: 'no se puede entrar a esta pagina' })
  }
}