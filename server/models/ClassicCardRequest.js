const mongoose = require("mongoose");

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };

const ClassicCardRequestSchema = new mongoose.Schema(
    {
        // AccountOwner: {
        //     type: mongoose.Types.ObjectId,
        //     require: true,
        // },
        CardOwner: {
            type: mongoose.Types.ObjectId,
            require: true,
        },
        CardType: StringReq,
        Name: StringReq,
        CellNumber: StringReq,
        Address: StringReq,
        DuiNum: StringReq,
        Email: StringReq,
        Salary: StringReq,
        Job: StringReq,

        annexes: {
            DuiFrontImg: Object,
            NitImg: Object,
            SalaryEvidenceImg: Object,
        }
    },
    { timestamps: true }
);
module.exports = mongoose.model("ClassicCardRequest", ClassicCardRequestSchema);