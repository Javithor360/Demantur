const mongoose = require('mongoose');

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };

const CardsModelSchema = new mongoose.Schema({
  CardOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  CardId: Number,
  CardImage: StringReq,
  CardType: StringReq,
  CardNumber: StringReq,
  CardCCV: Number,
  CardExpire: Date,
  MaxCardAmount: Number,
  PayAmount: NumberReq,
  interest: NumberReq,
  PaymentHistory: [{
    RealizationDate: Date,
    Amount: Number,
    AccountNumber: Number,
  }],
  SpentHistory: [{
    RealizationDate: Date,
    Amount: Number,
  }]
})

module.exports = mongoose.model('CardsModel', CardsModelSchema);