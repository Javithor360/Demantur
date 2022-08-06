const mongoose = require("mongoose");

const TransfersHistoryElements = {
  Date: Date,
  Subject: String,
  Amount: Number,
  AccountN: Number,
  Type: String,
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
});

module.exports = mongoose.model("GlobalData", GlobalDataSchema);
