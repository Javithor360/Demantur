const mongoose = require("mongoose");

const StringReq = { type: String, require: true };

const CardsRequestsSchema = new mongoose.Schema(
    {
        CardType: StringReq,
        CardOwner: {
            type: mongoose.Types.ObjectId,
            require: true,
        },
        Name: StringReq,
        // DuiNum: StringReq,
        Email: StringReq,
        UserSalary: StringReq, 
        UserLaboralStatus: StringReq,
        CellNumber: StringReq,
        Address: StringReq,
        annexes: {
            DuiFrontImg: Object,
            DuiBackImg: Object,
            NitImg: Object,
            SalaryEvidenceImg: Object,
            CloudCardImage: StringReq
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("CardsRequests", CardsRequestsSchema);