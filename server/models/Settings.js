const mongoose = require('mongoose');

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };

const SettingsSchema = new mongoose.Schema({
  SettingsOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  RecoveryEmail: String,
})

module.exports = mongoose.model('Settings', SettingsSchema);