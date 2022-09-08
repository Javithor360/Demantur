const mongoose = require("mongoose");

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true, trim: true };
const DateReq = { type: Date, require: true };

const AcpLoanSchema = new mongoose.Schema({
  debtorId: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  LoanId: Number,
  MonthlyFee: Number, // cuota mensual
  details: {
    loan_type: StringReq, // Tipo de préstamo del objeto
    interest: NumberReq, // % de interés del préstamo
  },
  pay_history: {
    loan_date: DateReq, // Fecha en la que se expedió el préstamo
    loan_due: DateReq, // Fecha en la que se ha establecido finalizar el préstamo
    loan_next_payment: DateReq, // Fecha del próximo pago
    payment_history: [{
      AccountN: String,
      Amount: String,
      Date: Date,
    }], // Historial de abonos del usuario al préstamo
  },
  amounts: {
    initial_amount: NumberReq, // Cantidad de dinero préstada
    remainder: NumberReq, // Cantidad de dinero que se debe
  },
});

module.exports = mongoose.model('AcpLoan', AcpLoanSchema);