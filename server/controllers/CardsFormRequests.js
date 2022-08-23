const CardsRequests = require("../models/CardsRequests");
const DuiModel = require("../models/DuiModel");
const { uploadRegisterImage } = require("../libs/cloudinary");
const fs = require("fs-extra");


const CardsFormRequests = async (req, res, next) => {
    try {
        
        const token = req.resetToken;
        const { UserSalary, UserLaboralStatus, cardId } = req.body;

        let DuiFrontImg, DuiBackImg, NitImg, SalaryEvidenceImg;
        let CardType;

        const img1 = await uploadRegisterImage(req.files.Image1.tempFilePath);
        const img2 = await uploadRegisterImage(req.files.Image2.tempFilePath);
        const img3 = await uploadRegisterImage(req.files.Image3.tempFilePath);
        const img4 = await uploadRegisterImage(req.files.Image4.tempFilePath);
        
        if (cardId == 0){
            CardType = 'Classic'
        }else if (cardId == 1){
            CardType = 'Platinum'
        } else  if (cardId == 2){
            CardType = 'Gold'
        } else if (cardId == 3){
            CardType = 'Black'
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
            SalaryEvidenceImg 
        }

        const newCardRequest = await new CardsRequests({
            CardType,
            CardOwner:token.user.id,
            Name:token.user.FirstName, 
            DuiNum:token.user.Dui, 
            Email:token.user.Email, 
            UserSalary, 
            UserLaboralStatus,
            CellNumber:token.user.Number, 
            Address:token.user.Adress,
            annexes,
        });

        await newCardRequest.save();
        return res.send(newCardRequest);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
};

module.exports = { CardsFormRequests };