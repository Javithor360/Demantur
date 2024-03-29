const mongoose = require('mongoose');

const StringReq = { type: String, require: true };

const DebitCardsModelSchema = new mongoose.Schema({
  CardOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  CardNumber: StringReq,
  CardCCV: Number,
  CardExpire: Date,
  NumberAcountOf: StringReq,
  SpentHistory: [{
    RealizationDate: Date,
    Amount: Number,
  }],
})

module.exports = mongoose.model('DebitCardsModel', DebitCardsModelSchema);