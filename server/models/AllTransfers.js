const mongoose = require('mongoose');

const AllTransfersSchema = new mongoose.Schema({
  menbers: [
    {
      MemberId: mongoose.Types.ObjectId,
      MemberName: String,
    }
  ]
}, { timestamps: true });

module.exports = mongoose.model("AllTransfers", AllTransfersSchema);