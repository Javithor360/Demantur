const mongoose = require('mongoose');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs')

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
    required: true
  },
  // Nit: {
  //   type: String,
  //   required: true
  // },
  Email: {
    type: String,
    required: true,
    unique: true
  },
  // DateBird: {
  //   type: String,
  //   required: true
  // },
  // Adress: {
  //   type: String,
  //   required: true
  // },
  Password: {
    type: String,
    required: true,
    select: false
  },
  RecuKey: String,
  //faltan mas lol
}, { timestamps: true })


//metodo para enviar el token
NormalUserSchema.methods.getSignedToken = function () {
  return jwt.sign({
    user: {
      id: this._id,
      name: this.FirstName,
    }
  }, process.env.JWT_SECRET, { expiresIn: 120 })
}

NormalUserSchema.methods.matchPasswords = async function (Password) {
  return await bcrypt.compare(Password, this.Password);
}

module.exports = mongoose.model('NormalUser', NormalUserSchema);