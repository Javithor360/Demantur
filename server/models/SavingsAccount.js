const mongoose = require("mongoose");

const AccNumberReq = { type: Number, require: true, trim: false };
const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };
const BooleanReq = { type: Boolean, require: true };

const SavingsAccountSchema = new mongoose.Schema(
  {
    AccountOwner: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    accountNumber: AccNumberReq,
    balance: NumberReq,
    interest: NumberReq,
    increaseRate: NumberReq,
    annexes: {
      CreateReason: String,
      AccountExpectations: String,
      DuiImage: Object,
      PersonalReference: Object,
      ProfessionalReference: Object,
    },
    activated: BooleanReq,
  },
  { timestamps: true }
);

module.exports = mongoose.model("SavingsAccount", SavingsAccountSchema);
