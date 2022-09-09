const Employee = require('../models/Employee');
const SavingsAccount = require('../models/SavingsAccount');
const CardsRequests = require('../models/CardsRequests')
const LoanRequest = require('../models/LoansRequestModels')
const NormalUser = require('../models/NormalUser')
const ExtraInfoNormalUser = require('../models/ExtraInfoNormalUser')
const ErrorResponse = require("../utils/ErrorMessage");
const { sendToken, AcceptRequestEmployee, DeclineRequestEmployee } = require("../helpers/Functions");
const GlobalData = require('../models/GlobalData');
const CardsModel = require('../models/CardsModel');
const AcpLoanModel = require('../models/AcpLoanModel');
const LoansRequestModels = require('../models/LoansRequestModels');
const DebitCardModel = require('../models/DebitCardModel');

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
                $inc: { balance: parseFloat(Amount).toFixed(2) },
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
        }
        if ((parseFloat(Client.balance) + parseFloat(Amount)) >= 50 && Client.activated === false) {
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

        const ExtraInfo = await ExtraInfoNormalUser.find()


        let cardRequestsOrder = []

        getAllUsers.forEach(element1 => {
            let element3

            ExtraInfo.forEach(element => {
                if (element.UserOwner.toString() === element1._id.toString()) {
                    element3 = element
                }
            });

            getAllCardRequests.forEach(element2 => {
                if (element1._id.toString() === element2.CardOwner.toString()) {
                    let ObjectCardRequest = {}
                    ObjectCardRequest.RequestOwner = element1
                    ObjectCardRequest.CardRequest = element2
                    ObjectCardRequest.ExtraInfo = element3
                    cardRequestsOrder.push(ObjectCardRequest)
                }
            });
        });

        res.status(200).json({ data: cardRequestsOrder });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }

}

const getLoanRequests = async (req, res, next) => {
    try {

        const getAllLoanRequests = await LoanRequest.find()
        const getAllUsers = await NormalUser.find()
        const ExtraInfo = await ExtraInfoNormalUser.find()

        let loanRequestsOrder = []

        getAllUsers.forEach(element1 => {
            let element3

            ExtraInfo.forEach(element => {
                if (element.UserOwner.toString() === element1._id.toString()) {
                    element3 = element
                }
            });

            getAllLoanRequests.forEach(element2 => {
                if (element1._id.toString() === element2.loan_guarantor.toString()) {
                    let ObjectLoanRequest = {}
                    ObjectLoanRequest.Request_guarantor = element1
                    ObjectLoanRequest.LoanRequest = element2
                    ObjectLoanRequest.ExtraInfo = element3
                    loanRequestsOrder.push(ObjectLoanRequest)
                }
            });
        });
        res.status(200).json({ data: loanRequestsOrder });
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
        if (!ClientRelation) {
            return next(
                new ErrorResponse("Este número de cuenta no existe", 400, "error")
            );
        }
        const Client = await NormalUser.findOne({ _id: ClientRelation.AccountOwner }).select('FirstName LastName PerfilPhoto');
        if (!Client) {
            return next(
                new ErrorResponse("El cliente no existe", 400, "error")
            );
        }

        res.status(200).json({ success: true, data: Client });
    } catch (e) {
        console.log(e);
        res.status(500).json({ message: e.message });
    }
}


const getAccountActivationRequests = async (req, res, next) => {
    try {
        let arrayFilter,
            info = [];

        const query = await NormalUser.find();
        arrayFilter = query.filter(i => i.ActivedAccount == false);
        info.push(arrayFilter);

        const filter = arrayFilter.map(i => i._id).toString();
        const detailsQuery = await ExtraInfoNormalUser.find();
        arrayFilter = detailsQuery.filter(i => filter.includes(i.UserOwner.toString()));
        info.push(arrayFilter);
        res.status(200).json({ success: true, data: info })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const EmployeeWidgets = async (req, res, next) => {
    try {
        const loan = await LoansRequestModels.find();
        const cards = await CardsRequests.find();
        const queryAcc = await NormalUser.find();
        let accounts = queryAcc.filter(i => i.ActivedAccount === false).length;

        const data = {
            loanCount: loan.length,
            cardsCount: cards.length,
            accountsCount: accounts,
        }

        res.status(200).json({ success: true, data: data })
    } catch (error) {
        console.error(error)
        res.status(500).json({ message: error.message });
    }
}

const activateAccount = async (req, res, next) => {
    try {
        const { AccountId } = req.body;
        if (!AccountId) {
            return next(
                new ErrorResponse("Datos incompletos", 400, "error")
            );
        }
        await NormalUser.findOneAndUpdate(
            { _id: AccountId },
            {
                $set: { ActivedAccount: true }
            }
        )

        const query = await NormalUser.findOne({ _id: AccountId }).select('Email')
        AcceptRequestEmployee(query, next);
        res.status(200).json({ success: true, data: 'Cuenta activada correctamente' })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}

const denyAccount = async (req, res, next) => {
    try {
        const { AccountId } = req.body;
        if (!AccountId) {
            return next(
                new ErrorResponse("Datos incompletos", 400, "error")
            );
        }

        const query = await NormalUser.findOne({ _id: AccountId }).select('Email');

        DeclineRequestEmployee(query, next)
        await GlobalData.findOneAndDelete({ DataOwner: AccountId });
        await ExtraInfoNormalUser.findOneAndDelete({ UserOwner: AccountId });
        await NormalUser.findOneAndDelete({ _id: AccountId });

        res.status(200).json({ success: true, data: 'Cuenta rechazada correctamente' })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const getFullClientInfo = async (req, res, next) => {
    try {
        const DuiNumber = req.header('DuiNumber');
        if (!DuiNumber) {
            return next(
                new ErrorResponse("Ingresa el número de DUI antes de continuar", 400, "error")
            );
        }

        const query = await NormalUser.findOne({ Dui: DuiNumber }).select('_id');
        if (!query) {
            return next(
                new ErrorResponse("El número de DUI ingresado no es válido", 400, "error")
            );
        }
        let allInfo = [];

        const MainInfo = await NormalUser.findOne({ _id: query._id });
        if (!MainInfo) {
            return next(
                new ErrorResponse("El número de DUI no está registrado", 400, "error")
            )
        }
        allInfo.push(MainInfo);

        const ExtraInfo = await ExtraInfoNormalUser.findOne({ UserOwner: query._id });
        allInfo.push(ExtraInfo);

        const SAccounts = await SavingsAccount.find();
        allInfo.push(SAccounts.filter(s => query._id.toString() == s.AccountOwner.toString()));

        const LoanInfo = await LoanRequest.find();
        allInfo.push({ LoanRequestCount: LoanInfo.filter(l => l.loan_guarantor.toString() == query._id.toString()).length > 0 ? true : false });

        const CardsInfo = await CardsRequests.find();
        allInfo.push({ CardRequestCount: CardsInfo.filter(l => l.CardOwner.toString() == query._id.toString()).length > 0 ? true : false });

        res.status(200).json({ success: true, data: allInfo })
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: error.message });
    }
}
const declineLoan = async (req, res, next) => {
    try {
        const { Dui } = req.body
        const User = await NormalUser.findOne({ Dui: Dui });
        await LoanRequest.findOneAndDelete({ loan_guarantor: User._id })
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const AcceptLoanReq = async (req, res, next) => {
    try {
        const { Dui } = req.body
        const User = await NormalUser.findOne({ Dui: Dui });
        const loanReq = await LoanRequest.findOne({ loan_guarantor: User._id })

        let remainder = loanReq.Amountrequest.replace('$', '');
        remainder = parseFloat(remainder)

        let Years = loanReq.LoanTime * 12
        const functToGetFee = () => {
            return (remainder / ((1 - (Math.pow(1 + 0.0125, -Years))) / 0.0125))
        }
        let MothlyFeee = functToGetFee()

        let TimeNow = new Date()




        let debtorId = User._id
        let details = {
            loan_type: loanReq.LoanType,
            // Interes dependiendo del monto y el plazo a pagar se considera
            interest: 10,
        }
        let pay_history = {
            loan_date: TimeNow,
            loan_due: new Date(TimeNow.getFullYear() + 6, TimeNow.getMonth(), TimeNow.getDay()),
            loan_next_payment: new Date(TimeNow.getFullYear(), TimeNow.getMonth(), TimeNow.getDay() + 30),
            payment_history: []
        }

        let amounts = {
            initial_amount: remainder,
            remainder: remainder,
        }

        await LoanRequest.findOneAndDelete({ loan_guarantor: User._id })
        await SavingsAccount.findOneAndUpdate({ accountNumber: loanReq.AccountNumber }, { $inc: { balance: parseFloat(remainder).toFixed(2) } })
        const newLoan = await new AcpLoanModel({
            debtorId,
            LoanId: loanReq.LoanId,
            MonthlyFee: parseFloat(MothlyFeee).toFixed(2),
            details,
            pay_history,
            amounts,
        })

        newLoan.save()

        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const AcceptCardReq = async (req, res, next) => {
    try {
        const { Dui } = req.body
        const User = await NormalUser.findOne({ Dui: Dui });
        const CardReq = await CardsRequests.findOne({ CardOwner: User._id })
        let CardType, CardAmount, PaymentDate, PayAmount, interest, CardNumber, CardCCV, CardExpire, CloudCardImage;
        let timeNow = new Date()
        PaymentDate = new Date(timeNow.getFullYear(), timeNow.getMonth(), timeNow.getDay() + 30);
        // console.log(PaymentDate.toLocaleDateString('en-GB'))
        PayAmount = 0;
        CardExpire = new Date(timeNow.getFullYear() + 3, timeNow.getMonth(), timeNow.getDay())
        const FunctGen = (Max, Min) => {
            let Num = Math.random() * (Max - Min);
            Num = Num + Min;
            Num = Math.trunc(Num);
            return Num
        }
        let CardP1 = FunctGen(900, 100);
        let CardP2 = FunctGen(9000, 1000);
        let CardP3 = FunctGen(9000, 1000);
        let CardP4 = FunctGen(9000, 1000);
        CardCCV = FunctGen(900, 100);
        CardNumber = `5${CardP1} ${CardP2} ${CardP3} ${CardP4}`
        if (CardReq.CardId == 0) {
            CardType = 'Classic'
            // AQUÍ SE REALIZARÁN LAS OPERACIONES PARA DETERMINAR EL MONTO Y TODO LO MONETARIO
            CardAmount = 800.00;
            interest = 10;
            CloudCardImage = 'https://res.cloudinary.com/demantur/image/upload/v1662595386/bank_card_images/classicCard_vzoynz.png'
        } else if (CardReq.CardId == 1) {
            CardType = 'Platinum'
            // AQUÍ SE REALIZARÁN LAS OPERACIONES PARA DETERMINAR EL MONTO Y TODO LO MONETARIO
            CardAmount = 1500.00;
            interest = 8;
            CloudCardImage = 'https://res.cloudinary.com/demantur/image/upload/v1662595386/bank_card_images/platinumCard_d5faxv.png'
        } else if (CardReq.CardId == 2) {
            CardType = 'Gold'
            // AQUÍ SE REALIZARÁN LAS OPERACIONES PARA DETERMINAR EL MONTO Y TODO LO MONETARIO
            CardAmount = 3000.00;
            interest = 6;
            CloudCardImage = 'https://res.cloudinary.com/demantur/image/upload/v1662595524/bank_card_images/goldCard_cdw2mv.png'
        } else if (CardReq.CardId == 3) {
            CardType = 'Black'
            // AQUÍ SE REALIZARÁN LAS OPERACIONES PARA DETERMINAR EL MONTO Y TODO LO MONETARIO
            CardAmount = 6000.00;
            interest = 3;
            CloudCardImage = 'https://res.cloudinary.com/demantur/image/upload/v1662595386/bank_card_images/blackCard_dwbb3f.png'
        }
        await CardsRequests.findOneAndDelete({ CardOwner: User._id })
        const NewCard = await new CardsModel({
            CardOwner: User._id,
            CardId: CardReq.CardId,
            CardImage: CloudCardImage,
            CardType,
            CardNumber,
            CardCCV,
            CardExpire,
            CardAmount,
            MaxCardAmount: CardAmount,
            PaymentDate,
            PayAmount,
            interest,
            PaymentHistory: [],
            SpentHistory: [],
            PayableAmount: 0.00
        })

        await NewCard.save();
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}
const DeclineCardReq = async (req, res, next) => {
    try {
        const { Dui } = req.body
        const User = await NormalUser.findOne({ Dui: Dui });
        await CardsRequests.findOneAndDelete({ CardOwner: User._id })
        res.status(200).json({ success: true })
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

const SimulateCard = async (req, res, next) => {
    try {
        const { CardNumber, Gasto } = req.body;

        const CreditCard = await CardsModel.findOne({ CardNumber: CardNumber })
        const DebitCard = await DebitCardModel.findOne({ CardNumber: CardNumber })

        if (CreditCard) {

            if (Gasto > CreditCard.MaxCardAmount) {
                return next(
                    new ErrorResponse("El monto excede el balance.", 400, "error")
                )
            } else {
                let dateNow = new Date()

                CreditCard.MaxCardAmount = CreditCard.MaxCardAmount - Gasto
                CreditCard.PayableAmount = (parseFloat(CreditCard.PayableAmount) + parseFloat(Gasto))
                CreditCard.SpentHistory.push({ RealizationDate: dateNow, Amount: Gasto })
                CreditCard.save()
                res.status(200).json({ success: true })
            }


        } else if (DebitCard) {
            const Cuenta = await SavingsAccount.findOne({ accountNumber: DebitCard.NumberAcountOf })
            let bc = parseFloat(Cuenta.balance)
            if (Gasto > bc) {
                return next(
                    new ErrorResponse("El monto excede el balance de la cuenta", 400, "error")
                )
            }

            await SavingsAccount.findOneAndUpdate({ _id: Cuenta._id }, { $inc: { balance: -parseFloat(Gasto).toFixed(2) } })

            let dateNow = new Date()
            DebitCard.SpentHistory.push({ RealizationDate: dateNow, Amount: Gasto })
            DebitCard.save()
            res.status(200).json({ success: true })

        } else {
            return next(
                new ErrorResponse("el numero de tarjeta no coincide", 400, "error")
            )
        }

    } catch (error) {
        res.status(500).json({ message: error.message });
    }
}

module.exports = {
    loginEmployee,
    getEmployeeData,
    makeDeposit,
    getCardRequests,
    makeDeposit,
    getLoanRequests,
    getUserInfoForEmployee,
    getAccountActivationRequests,
    activateAccount,
    denyAccount,
    AcceptCardReq,
    DeclineCardReq,
    declineLoan,
    getFullClientInfo,
    AcceptLoanReq,
    EmployeeWidgets,
    SimulateCard
}