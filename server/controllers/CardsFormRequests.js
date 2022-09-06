const CardsRequests = require("../models/CardsRequests");
const DuiModel = require("../models/DuiModel");
const ErrorResponse = require("../utils/ErrorMessage");
const { uploadRegisterImage } = require("../libs/cloudinary");
const fs = require("fs-extra");


const CardsFormRequests = async (req, res, next) => {
    try {

        const token = req.resetToken;
        const { UserSalary, UserLaboralStatus, cardId } = req.body;

        if (!UserSalary || !UserLaboralStatus) {
            return next(
                new ErrorResponse("Por favor rellene todos los campos", 400, "error")
            );
        }

        let DuiFrontImg, DuiBackImg, NitImg, SalaryEvidenceImg;

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
            NitImg = req.files.Image3;
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

        let CardType;

        const img1 = await uploadRegisterImage(req.files.Image1.tempFilePath);
        const img2 = await uploadRegisterImage(req.files.Image2.tempFilePath);
        const img3 = await uploadRegisterImage(req.files.Image3.tempFilePath);
        const img4 = await uploadRegisterImage(req.files.Image4.tempFilePath);

        if (cardId == 0) {
            CardType = 'Classic'
            CloudCardImage = 'https://res.cloudinary.com/demantur/image/upload/v1661868613/bank_card_images/classicCard-no_borrar_rk4osh.png'
        } else if (cardId == 1) {
            CardType = 'Platinum'
            CloudCardImage = 'https://res.cloudinary.com/demantur/image/upload/v1661868613/bank_card_images/platinumCard-no_borrar_tqt0zl.png'
        } else if (cardId == 2) {
            CardType = 'Gold'
            CloudCardImage = 'https://res.cloudinary.com/demantur/image/upload/v1661868613/bank_card_images/goldCard-no_borrar_ovmjjp.png'
        } else if (cardId == 3) {
            CardType = 'Black'
            CloudCardImage = 'https://res.cloudinary.com/demantur/image/upload/v1661868613/bank_card_images/blackCard-no_borrar_egcyc0.png'
        }

        console.log(CardType)
        console.log(cardId)

        DuiFrontImg = {
            url: img1.secure_url,
            public_id: img1.public_id,
        };

        DuiBackImg = {
            url: img2.secure_url,
            public_id: img2.public_id,
        };

        NitImg = {
            url: img3.secure_url,
            public_id: img3.public_id,
        };

        SalaryEvidenceImg = {
            url: img4.secure_url,
            public_id: img4.public_id,
        };

        await fs.remove("./upload");

        const annexes = {
            DuiFrontImg,
            DuiBackImg,
            NitImg,
            SalaryEvidenceImg,
            CloudCardImage
        }

        const newCardRequest = await new CardsRequests({
            CardType,
            CardId: cardId,
            CardOwner: token.user.id,
            Name: token.user.FirstName,
            DuiNum: token.user.Dui,
            Email: token.user.Email,
            UserSalary,
            UserLaboralStatus,
            CellNumber: token.user.Number,
            Address: token.user.Adress,
            annexes,
        });

        await newCardRequest.save();
        res.status(200).json({ success: true, data: true });
        // return res.send(newCardRequest);
    } catch (error) {
        console.error(error);
        return res.status(500).json({ success: false, error: error.message });
    }
};

module.exports = { CardsFormRequests };