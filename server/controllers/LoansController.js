const LoanRequest = require("../models/LoansModels");
const DuiModel = require("../models/DuiModel");
const ErrorResponse = require("../utils/ErrorMessage");
const { uploadLoansImages  } = require("../libs/cloudinary");
const fs = require("fs-extra");


const LoansFormRequests = async (req, res, next) => {
    try {
        
        const token = req.resetToken;
        const { UserSalary, UserStatus, LoanId } = req.body;

        if(!UserSalary || !UserStatus || !LoanId){
            return next(
                new ErrorResponse("Completa todos los campos para hacer la solicitud", 400, "error")
            );
        }

        let DuiFrontImg, DuiBackImg, ConstancyImg , SalaryEvidenceImg;
        if (req.files?.Image1) {
            DuiFrontImg = req.files.Image1;
        } else {
            return next(
              new ErrorResponse("Por favor suba su fotocopia de DUI (Frontal)", 400, "error")
            );
        }
        if (req.files?.Image2) {
            DuiBackImg = req.files.Image2;
        } else {
            return next(
              new ErrorResponse("Por favor suba su fotocopia de DUI (Trasera)", 400, "error")
            );
        }
        if (req.files?.Image3) {
            ConstancyImg = req.files.Image3;
        } else {
            return next(
              new ErrorResponse("Por favor suba su fotocopia del NIT", 400, "error")
            );
        }
        if (req.files?.Image4) {
            SalaryEvidenceImg = req.files.Image4;
        } else {
            return next(
              new ErrorResponse("Por favor suba su constancia de salario", 400, "error")
            );
        }

        let LoanType;

        const img1 = await uploadLoansImages(req.files.Image1.tempFilePath);
        const img2 = await uploadLoansImages(req.files.Image2.tempFilePath);
        const img3 = await uploadLoansImages(req.files.Image3.tempFilePath);
        const img4 = await uploadLoansImages(req.files.Image4.tempFilePath);
        
        if (LoanId == 0){
            LoanType = 'Pesonal'
            CloudLoansImage='https://res.cloudinary.com/demantur/image/upload/v1662324435/bank_loans_images_employee/Personal_loan_employee_dont_touch.jpg'
        } else  if (LoanId == 2){
        }else if (LoanId == 1){
            LoanType = 'Business'
            CloudLoansImage='https://res.cloudinary.com/demantur/image/upload/v1662324649/bank_loans_images_employee/Business_loan_employee_Dont_Touch.jpg'
        } else  if (LoanId == 2){
            LoanType = 'Housing'
            CloudLoansImage='https://res.cloudinary.com/demantur/image/upload/v1662324539/bank_loans_images_employee/Housin_Demanture_employee_Dont_Touch.jpg'
        } else if (LoanId == 3){
            LoanType = 'Auto '
            CloudLoansImage='https://res.cloudinary.com/demantur/image/upload/v1662324591/bank_loans_images_employee/Auto_Demantur_employee_Dont_Touch.jpg'
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
            SalaryEvidenceImg,
            CloudLoansImage
        }

        const newLoanRequest = await new LoanRequest({
            LoanType,
            loan_guarantor:token.user.id,
            Name:token.user.FirstName, 
            DuiNum:token.user.Dui, 
            Email:token.user.Email,
            Amount:token.user.Amount,
            UserSalary, 
            UserStatus,
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