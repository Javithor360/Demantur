const Employee = require('../models/Employee');
const SavingsAccount = require('../models/SavingsAccount');
const CardsRequests = require('../models/CardsRequests')
const LoansModels = require('../models/LoansModels')
const NormalUser = require('../models/NormalUser')
const ErrorResponse = require("../utils/ErrorMessage");
const { sendToken } = require("../helpers/Functions");
const GlobalData = require('../models/GlobalData');

// @route POST api/auth/employee/login
// @desc Iniciar sesión como empleado
// @access private

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

// @route POST api/employee/get-data
// @desc Solicitar los datos del empleado
// @access private

const getEmployeeData = async (req, res, next) => {
    try {
        const token = req.resetToken;
        const query = await Employee.findOne({ _id: token.user.id });

        res.status(200).json({ success: true, data: query });
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
    }
};

// @route POST api/requests/deposit
// @desc Depositar dinero en la cuenta de un cliente
// @access private

const makeDeposit = async (req, res, next) => {
    try {
        // Obtenemos los datos recibidos del front-end
        const { AccountNumber, Amount, Accountable } = req.body;

        // Verificamos que todos los datos estén completos, sino, se imprime un error para evitar crash
        if (!AccountNumber || !Amount || !Accountable) {
            return next(
                new ErrorResponse("Por favor, completa todos los campos", 400, "error")
            );
        }

        // Buscamos el número de cuenta en la base de datos las cuentas para vincularlo con el cliente, además de obtener otros datos para validar mucho mejor la información
        const Client = await SavingsAccount.findOne({ accountNumber: AccountNumber }).select('_id AccountOwner accountNumber balance activated');
        if (!Client) {
            return next(
                new ErrorResponse("El número de cuenta no existe", 400, "error")
            );
        }

        // Hacemos los cambios, es decir, se deposita el dinero en la cuenta
        const ClientAccountQuery = await SavingsAccount.findOneAndUpdate(
            { accountNumber: AccountNumber },
            {
                $inc: { balance: Amount },
                // $set: {
                //     activated: {
                //         $cond: { if: { $gte: ["balance", 50]}, then: true, else: false }
                //     }
                // }
            }
        );

        // Si el usuario no existe, se cancela la operación y se muestra un error
        if (!ClientAccountQuery) {
            return next(
                new ErrorResponse("Ocurrió un error al depositar el monto establecido", 400, "error")
            );
        } else if ((Client.balance + Amount) >= 50 && Client.activated === false) {
            await SavingsAccount.findOneAndUpdate(
                { accountNumber: AccountNumber },
                { $set: { activated: true } }
            );
        }

        // Validamos los datos del empleado y obtenemos algunos datos
        const EmployeeData = await Employee.findOne({ _id: Accountable }).select('EmployeeId FirstNames LastNames');

        // Actualizando global data del cliente
        await GlobalData.findOneAndUpdate(
            { DataOwner: Client.AccountOwner },
            {
                $push: {
                    Deposits: {
                        Account: Client.accountNumber,
                        Amount: Amount,
                        Date: new Date(),
                        Depositor: {
                            Name: `${EmployeeData.FirstNames} ${EmployeeData.LastNames}`,
                            EmployeeId: EmployeeData.EmployeeId
                        }
                    }
                }
            }
        )

        // Actualizando el historial del empleado
        await Employee.findOneAndUpdate(
            { EmployeeId: EmployeeData.EmployeeId },
            {
                $push: {
                    History: {
                        Action: 'Deposit',
                        Details: {
                            ClientAccount: Client.accountNumber,
                            Amount: Amount,
                            Date: new Date()
                        }
                    }
                }
            }
        )
        res.status(200).json({ success: true, data: "Depósito hecho correctamente" })
    } catch (error) {
        res.status(500).json({ success: false, error: error.message });
        console.log(error)
    }
}

// @route POST api/????
// @desc undefined
// @access private

const getCardRequests = async (req, res, next) => {
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

        res.status(200).json({ data: cardRequestsOrder });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }

}
const getLoanRequests = async (req, res, next) => {
    try {
        const getAllLoansRequests = await LoansModels.find()
        const getsUsers = await NormalUser.find()

        let LoansRequestsOrder = []

        for (let index = 0; index < getsUsers.length; index++) {

            if (getsUsers[index]._id.toString() === getAllLoansRequests[index]?. loan_guarantor.toString()) {
                let ObjectLoanRequest = {}
                ObjectLoanRequest.Requestguarantor = getsUsers[index]
                ObjectLoanRequest.LoansRequest = getAllLoansRequests[index]
                LoansRequestsOrder.push(ObjectLoanRequest)
                console.log(ObjectLoanRequest)
            }
        }

        res.status(200).json({ data: LoansRequestsOrder });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }

}

// @route POST api/employee/get-user-data
// @desc Obtener la información del usuario por parte del empleado
// @access private

const getUserInfoForEmployee = async (req, res, next) => {
    try {
        const { AccountNumber } = req.body;
        if (!AccountNumber) {
            return next(
                new ErrorResponse("Los datos envíados no están completos", 400, "error")
            );
        }

        const ClientRelation = await SavingsAccount.findOne({ accountNumber: AccountNumber }).select('AccountOwner');
        const Client = await NormalUser.findOne({ _id: ClientRelation.AccountOwner }).select('FirstName LastName PerfilPhoto')

        res.status(200).json({ success: true, data: Client });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
}

module.exports = {
    loginEmployee,
    getEmployeeData,
    makeDeposit,
    getCardRequests,
    makeDeposit,
    getLoanRequests,
    getUserInfoForEmployee
}