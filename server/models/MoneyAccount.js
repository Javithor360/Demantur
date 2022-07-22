const mongoose = require('mongoose');

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };

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
  // remesas (ya vamos a ver que pasa)
  // -

  // Cuenta Nominal
  PlaceOfWork: String,
  DebidCard: {
    CardNumber: NumberReq,
    ExpirationDate: DateReq,
    ccv: NumberReq,
  }
}, { timestamps: true })

module.exports = mongoose.model('MoneyAccount', MoneyAccountSchema);
