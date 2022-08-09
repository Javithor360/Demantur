const mongoose = require('mongoose');

const ExtraInfoNormalUserSchema = new mongoose.Schema({
  UserOwner: {
    type: mongoose.Types.ObjectId,
    required: true
  },
  DateBirth: {
    type: String,
    required: true
  },
  Adress: {
    type: String,
    required: true
  },
  Number: {
    type: String,
    required: true,
  },
  LaboralSituation: {
    type: String,
    required: true
  },
  WorkPlace: {
    type: String,
    required: true,
  },
  Salary: {
    type: String,
    require: true,
  },
  ImageOFConstancia: {
    url: String,
    public_id: String,
  },
  DatosBeneficiario: {
    Nombres: {
      type: String,
      require: true
    },
    Apellidos: {
      type: String,
      require: true
    },
    Dui: {
      type: String,
      require: true
    },
    Number: {
      type: String,
      require: true,
    }
  },

})


module.exports = mongoose.model('ExtraInfoNormalUser', ExtraInfoNormalUserSchema);