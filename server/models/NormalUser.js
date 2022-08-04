const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')
const crypto = require('crypto');

const NormalUserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  LastName: {
    type: String,
    required: true
  },
  Dui: {
    type: String,
    required: true,
  },
  Email: {
    type: String,
    required: true,
    unique: true,
  },
  Password: {
    type: String,
    required: true,
    select: false,
  },
  verifyCode: String,
  resetPasswordToken: String,
  resetPasswordExpire: Date,
  ActivedAccount: Boolean,
  AccountRuning: Boolean,
}, { timestamps: true })

// Actualizar contraseña
NormalUserSchema.pre('save', async function (next) {
  if (!this.isModified('Password')) {
    next();
  }
  const salt = await bcrypt.genSalt(10);
  this.Password = await bcrypt.hash(this.Password, salt);
  next();
});

//metodo para enviar el token
NormalUserSchema.methods.getSignedToken = function () {
  return jwt.sign({
    user: {
      id: this._id,
      Dui: this.Dui,
    }
  }, process.env.JWT_SECRET, { expiresIn: '1y' })
}

NormalUserSchema.methods.matchPasswords = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
}

NormalUserSchema.methods.getResetPasswordToken = function () {
  const resetToken = crypto.randomBytes(20).toString("hex");

  this.resetPasswordToken = crypto.createHash("sha256").update(resetToken).digest("hex");
  this.resetPasswordExpire = Date.now() + 15 * (60 * 1000);

  return resetToken;
}

module.exports = mongoose.model('NormalUser', NormalUserSchema);