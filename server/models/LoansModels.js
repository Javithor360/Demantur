const mongoose = require("mongoose");
const NormalUser = require("./NormalUser");
const NumberReq = { type: Number, require: true};
const StringReq = { type: String, require: true};
const DateReq = { type: Date, require: true }; 

const LoanRequestSchema = new mongoose.Schema(
    {
        LoanType: StringReq,
        loan_guarantor: {
            type: mongoose.Types.ObjectId,
            require: true,
        },
        Loantype: StringReq,
        Name: StringReq,
        CellNumber: StringReq,
        Address: StringReq,
        DuiNum: StringReq,
        Email: StringReq,
        Salary: StringReq,
        Amount: NumberReq,
        Company: StringReq,

        anex:{
            ConstancyImg: Object,
            DuiFrontImg: Object,
            SalaryEvidenceImg: Object,
            DuiBackImg: Object,
        }
    }, 
    { timestamps: true}
);


module.exports = mongoose.model("LoanRequest", LoanRequestSchema);