const LoanRequest = require("../models/LoansModels");
const DuiModel = require("../models/DuiModel");
const ErrorResponse = require("../utils/ErrorMessage");
const { uploadLoansImages  } = require("../libs/cloudinary");
const fs = require("fs-extra");


const LoansFormRequests = async (req, res, next) => {
    try {
        
        const token = req.resetToken;
        const { UserSalary, UserLaboralStatus, LoanId } = req.body;

        if(!UserSalary || !UserLaboralStatus || !LoanId){
            return next(
                new ErrorResponse("Completa todos los campos para hacer la solicitud", 400, "error")
            );
        }

        let DuiFrontImg, DuiBackImg, ConstancyImg , SalaryEvidenceImg;
        let LoanType;

        const img1 = await uploadLoansImages(req.files.Image1.tempFilePath);
        const img2 = await uploadLoansImages(req.files.Image2.tempFilePath);
        const img3 = await uploadLoansImages(req.files.Image3.tempFilePath);
        const img4 = await uploadLoansImages(req.files.Image4.tempFilePath);
        
        if (LoanId == 0){
            LoanType = 'Pesonal'
        }else if (LoanId == 1){
            LoanType = 'Business'
        } else  if (LoanId == 2){
            LoanType = 'House'
        } else if (LoanId == 3){
            LoanType = 'Car'
        } else if( LoanId ==4 ){
            LoanType ='Auto Demantur'
        }


        DuiFrontImg = {
            url: img1.secure_url,
            public_id: img1.public_id,
        };

        DuiBackImg = {
            url: img2.secure_url,
            public_id: img2.public_id,
        };

        ConstancyImg  = {
            url: img3.secure_url,
            public_id: img3.public_id,
        };
      
        SalaryEvidenceImg = {
            url: img4.secure_url,
            public_id: img4.public_id,
        };

        await fs.remove("./upload");

        const anex = {
            DuiFrontImg,
            DuiBackImg,
            ConstancyImg , 
            SalaryEvidenceImg 
        }

        const newLoanRequest = await new LoanRequest({
            LoanType,
            loan_guarantor:token.user.id,
            Name:token.user.FirstName, 
            DuiNum:token.user.Dui, 
            Email:token.user.Email, 
            UserSalary, 
            UserLaboralStatus,
            CellNumber:token.user.Number, 
            anex,
        });

        await newLoanRequest.save();
        return res.send(newLoanRequest);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
};

module.exports = { LoansFormRequests };