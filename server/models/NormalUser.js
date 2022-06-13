const mongoose = require('mongoose');

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
    required: true
  },
  RecuKey: String,
  //faltan mas lol
}, { timestamps: true })

module.exports = mongoose.model('NormalUser', NormalUserSchema);