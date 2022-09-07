const mongoose = require("mongoose");
const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };

const LoanRequestSchema = new mongoose.Schema(
    {
        LoanType: StringReq,
        LoanId: Number,
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
        UserSalary: StringReq,
        UserStatus: StringReq,
        Amountrequest: StringReq,
        Company: StringReq,

        anex: {
            ConstancyImg: Object,
            DuiFrontImg: Object,
            SalaryEvidenceImg: Object,
            DuiBackImg: Object,
            CloudLoanImage: StringReq
        }
    },
    { timestamps: true }
);


module.exports = mongoose.model("LoanRequest", LoanRequestSchema);