const mongoose = require("mongoose");

const AccNumberReq = { type: Number, require: true, trim: false };
const NumberReq = { type: Number, require: true };
const BooleanReq = { type: Boolean, require: true };

const SavingsAccountSchema = new mongoose.Schema(
  {
    AccountOwner: {
      type: mongoose.Types.ObjectId,
      require: true,
    },
    accountNumber: AccNumberReq,
    balance: { type: mongoose.Types.Decimal128, require: true },
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
