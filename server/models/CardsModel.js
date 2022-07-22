const mongoose = require('mongoose');

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };

const CardsModel = new mongoose.Schema({
  CardOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  CardType: StringReq,
  CardAmount: NumberReq,
  PaymentDate: DateReq,
  PayAmount: NumberReq,
  interest: NumberReq,
  PaymentHistory: [{
    RealizationDate: DateReq,
    Amount: NumberReq,
    AccountNumber: NumberReq,
  }]

})

module.exports = mongoose.model('CardsModel', CardsModel);