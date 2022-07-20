const mongoose = require("mongoose");

const StringReq = { type: String, require: true };

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
});

module.exports = mongoose.model("GlobalData", GlobalDataSchema);
