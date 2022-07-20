const mongoose = require('mongoose');

const CardsModel = new mongoose.Schema({
  DataOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  Notifications: [{
    Title: { type: String, require: true },
    Icon: { type: String, require: true },
    Url: { type: String, require: true },
  }],
  Contacts: [{
    Name: { type: String, require: true },
    Dui: { type: String, require: true },
    Photo: { type: String, require: true },
  }],
  PerfilPhoto: {
    Url: { type: String, require: true },
    public_id: { type: String, require: true },
  }
})

module.exports = mongoose.model('CardsModel', CardsModel);