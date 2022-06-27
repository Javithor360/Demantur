const mongoose = require('mongoose');

const DuiSchema = new mongoose.Schema({
  DuiFirstNames: {
    type: String,
    required: true,
    trim: true,
  },
  DuiLastNames: {
    type: String,
    required: true,
    trim: true,
  },
  DuiNumber: {
    type: String,
    required: true,
    trim: true,
  },
  DuiDateBirth: {
    type: Date,
    required: true
  }
})

module.exports = mongoose.model('DuiModel', DuiSchema);