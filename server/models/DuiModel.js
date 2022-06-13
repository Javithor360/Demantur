const mongoose = require('mongoose');

const DuiSchema = new mongoose.Schema({
  DuiFirstName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  DuiLastName: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  DuiNumber: {
    type: String,
    required: true,
    trim: true,
    unique: true,
  },
  // DuiDateBirth:{
  //   type: String,
  //   required: true
  // }
})

module.exports = mongoose.model('DuiModel', DuiSchema);