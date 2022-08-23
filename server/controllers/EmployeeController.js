const Employee = require('../models/Employee');
const CardsRequests = require('../models/CardsRequests')
const NormalUser = require('../models/NormalUser')
const ErrorResponse = require("../utils/ErrorMessage");
const { sendToken } = require("../helpers/Functions");

const loginEmployee = async (req, res, next) => {
    try {
        const { Email, Password } = req.body;

        if (!Email || !Password) {
            return next(
                new ErrorResponse("Por favor, completa todos los campos", 400, "error")
            );
        }

        const EmailQuery = await Employee.findOne({ Email }).select("+Password");
        if (!EmailQuery) {
            return next(
                new ErrorResponse("Este Email no está registrado en Demantur", 401, "error")
            );
        }

        const isMatch = await EmailQuery.matchPasswords(Password);

        if (!isMatch) {
            return next(
                new ErrorResponse("La contraseña no es válida", 401, "error")
            );
        }

        sendToken(EmailQuery, res);
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        console.log(error)
    }
}

const getCardRequests = async(req, res, next) => {
    try {
        const getAllCardRequests = await CardsRequests.find()
        const getAllUsers = await NormalUser.find()

        let cardRequestsOrder = []

        for (let index = 0; index < getAllUsers.length; index++) {
            
            if (getAllUsers[index]._id.toString() === getAllCardRequests[index]?.CardOwner.toString()) {
                let ObjectCardRequest = {}
                ObjectCardRequest.RequestOwner = getAllUsers[index]
                ObjectCardRequest.CardRequest = getAllCardRequests[index]  
                cardRequestsOrder.push(ObjectCardRequest)
                console.log(ObjectCardRequest)
            }
        }
        
        res.status(200).json({data: cardRequestsOrder});
    } catch (e) {
        console.log(e);
        res.status(500).json({message: e.message});
    }

}

module.exports = {
    loginEmployee,
    getCardRequests
}