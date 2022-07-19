const mongoose = require('mongoose');

const GlobalDataSchema = new mongoose.Schema({
  Notifications: [{
    Titulo: { type: String, require: true },
    Icono: { type: String, require: true },
    Url: { type: String, require: true },
  }],
  Contacts: [{
    Name: { type: String, require: true },
    Dui: { type: String, require: true },
    Photo: { type: String, require: true },
  }],
  Prestamo: {
    Tipo: {
      type: String,
      require: true,
    },
    Monto: {
      type: Number,
      require: true,
    },
    // change to array
    Pagos: {
      type: Array,
      require: true,
    },
  },
  Cards: {
    type: Array,
    require: true,
  },
  UserOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  }
})

module.exports = mongoose.model('GlobalDataNU', GlobalDataSchema);
