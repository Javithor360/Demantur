const mongoose = require("mongoose");

const NumberReq = { type: Number, require: true };
const StringReq = { type: String, require: true };
const DateReq = { type: Date, require: true };

const LoanSchema = new mongoose.Schema({
  debtorId: {
    type: mongoose.Types.ObjectId,
    require: true,
  },
  details: {
    loan_type: StringReq, // Tipo de préstamo del objeto
    loan_reason: StringReq, // Motivo por el cuál se solicita el préstamo
    interest: NumberReq, // % de interés del préstamo
    collateral: {
      // Garantía del préstamo
      guarantors: {
        type: mongoose.Types.ObjectId,
        require: true,
      }, // ObjectId de los fiadores del préstamo (si los hay)
      property: StringReq, // Bien de garantía del prestador
    },
  },
  pay_history: {
    loan_date: DateReq, // Fecha en la que se expedió el préstamo
    loan_due: DateReq, // Fecha en la que se ha establecido finalizar el préstamo
    loan_next_payment: DateReq, // Fecha del próximo pago
    payment_history: [{}], // Historial de abonos del usuario al préstamo
  },
  amounts: {
    initial_amount: NumberReq, // Cantidad de dinero préstada
    remainder: NumberReq, // Cantidad de dinero que se debe
    mora: NumberReq, // Si tiene mora/cargo por atraso en pago
  },
  annexes: {},
  // something like payments?
  // ??
});

module.exports = mongoose.model('Loan', LoanSchema);