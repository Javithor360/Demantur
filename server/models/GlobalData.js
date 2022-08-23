const mongoose = require("mongoose");

const TransfersHistoryElements = {
  // Date: Date,
  SenderDui: String,
  ReciverDui: String,
  Amount: String,
  AccountN: Number,
  Type: String,
  createdAt: Date,
};

const GlobalDataSchema = new mongoose.Schema({
  DataOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  Notifications: [
    {
      Title: String,
      Icon: String,
      Url: String,
    },
  ],
  Contacts: [
    {
      Name: String,
      Dui: String,
      Photo: String,
    },
  ],
  FriendRequests: [
    {
      Name: String,
      Dui: String,
      Photo: String,
    },
  ],
  PendingFriendReq: [
    {
      Name: String,
      Dui: String,
      Photo: String,
    }
  ],
  TransfersHistory: {
    Made: [TransfersHistoryElements],
    Received: [TransfersHistoryElements],
  },
  Deposits: [
    {
      Amount: String,
      Account: String,
      Date: Date,
      Depositor: {
        Name: String,
        EmployeeId: String,
      },
    },
  ],
  withdrawHistory: [{
    Amount: String,
    Account: String,
    Date: Date,
  }],

});

module.exports = mongoose.model("GlobalData", GlobalDataSchema);
