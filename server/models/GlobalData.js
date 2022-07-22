const mongoose = require("mongoose");

const StringReq = { type: String, require: true };
const NumberReq = { type: Number, require: true };
const DateReq = { type: Date, require: true };
const TransfersHistoryElements = {
  Date: DateReq,
  Subject: StringReq,
  Amount: NumberReq,
  AccountN: NumberReq,
  Type: StringReq,
};

const GlobalDataSchema = new mongoose.Schema({
  DataOwner: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  Notifications: [
    {
      Title: StringReq,
      Icon: StringReq,
      Url: StringReq,
    },
  ],
  Contacts: [
    {
      Name: StringReq,
      Dui: StringReq,
      Photo: StringReq,
    },
  ],
  FriendRequests: [
    {
      Name: StringReq,
      Dui: StringReq,
      Accept: Boolean,
    },
  ],
  TransfersHistory: {
    Made: [TransfersHistoryElements],
    Received: [TransfersHistoryElements],
  },
});

module.exports = mongoose.model("GlobalData", GlobalDataSchema);
