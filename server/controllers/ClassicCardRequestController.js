const ClassicCardRequest = require("../models/ClassicCardRequest");
const { uploadRegisterImage } = require("../libs/cloudinary");
const fs = require("fs-extra");

const ClassicCardFormRequests = async (req, res, next) => {
    try {
        const CardType = 'Classic';

        const { Name, CellNumber, Address, DuiNum, Email, Salary, Job} = req.body;

        let DuiFrontImg, NitImg, SalaryEvidenceImg ;

        const img1 = await uploadRegisterImage(req.files.Image.tempFilePath);
        const img2 = await uploadRegisterImage(req.files.Image2.tempFilePath);
        const img3 = await uploadRegisterImage(req.files.Image3.tempFilePath);

        DuiFrontImg = {
            url: img1.secure_url,
            public_id: img1.public_id,
        };
      
        NitImg = {
            url: img2.secure_url,
            public_id: img2.public_id,
        };
      
        SalaryEvidenceImg = {
            url: img3.secure_url,
            public_id: img3.public_id,
        };

        await fs.remove("./upload");

        const annexes = {
            DuiFrontImg, 
            NitImg, 
            SalaryEvidenceImg,
        }

        const newClassicCardRequests = await new ClassicCardRequest({
            CardType,
            Name, 
            CellNumber, 
            Address, 
            DuiNum, 
            Email, 
            Salary, 
            Job,
            annexes,
        });

        await newClassicCardRequests.save();
        return res.send(newClassicCardRequests);
    } catch (e) {
        console.error(e);
        return res.status(500).json({ message: e.message });
    }
};

module.exports = { ClassicCardFormRequests };