const mongoose = require("mongoose");

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };

const SavingAccount = new mongoose.Schema(
  {
    AccountOwner: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    accountNumber: NumberReq,
    balance: NumberReq,
    interest: NumberReq,
    increaseRate: NumberReq,
    withdrawHistory: [{}],
    deposits: [{
      amount: NumberReq,
      Date: DateReq,
      depositor: {
        Name: StringReq,
        Dui: StringReq,
      }
    }],
  },
  { timestamps: true }
);

module.exports = mongoose.model('SavingAccount', SavingAccount);