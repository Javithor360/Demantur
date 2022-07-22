const mongoose = require("mongoose");

const CheckingAccount = new mongoose.Schema(
  {
    owner: ObjectId,
    accountNumber: Number,
    balance: Number,
    interest: Number,
    increaseRate: Number,
    withdrawHistory: [{}],
  },
  { timestamps: true }
);
