const mongoose = require("mongoose");

const CheckingAccount = new mongoose.Schema(
  {
    owner: ObjectId,
    accountNumber: Number,
    balance: Number,
  },
  { timestamps: true }
);
