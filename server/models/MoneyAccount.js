const mongoose = require('mongoose');

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };
const TransfersHistoryElements = {
  Date: DateReq,
  Person: StringReq,
  Amount: NumberReq,
  AccountN: NumberReq,
};

const MoneyAccountSchema = new mongoose.Schema({
  AccountOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  AccountNumber: NumberReq,
  AccountType: StringReq,
  TotalBalance: NumberReq,
  deposits: [{
    amount: NumberReq,
    Date: DateReq,
    depositor: {
      Name: StringReq,
      Dui: StringReq,
    }
  }],
  TransfersHistory: {
    Made: [TransfersHistoryElements],
    Received: [TransfersHistoryElements],
  },
  // remesas (ya vamos a ver que pasa)
  // -

  // Cuenta Nominal
  PlaceOfWork: String,
  DebidCard: {
    CardNumber: NumberReq,
    ExpirationDate: DateReq,
    ccv: NumberReq,
  }
})

module.exports = mongoose.model('MoneyAccount', MoneyAccountSchema);
