const mongoose = require('mongoose');

const NormalUserSchema = new mongoose.Schema({
  FirstName: {
    type: String,
    required: true
  },
  SecondName: {
    type: String,
    required: true
  },
  Dui: {
    type: String,
    required: true
  },
  Email: {

  },
  Adress: {

  },
  Password: {

  }
})