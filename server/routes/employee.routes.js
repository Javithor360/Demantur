const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { getCardRequests, getEmployeeData, getLoanRequests, getUserInfoForEmployee, AcceptCardReq, DeclineCardReq, getFullClientInfo, declineLoan, AcceptLoanReq, EmployeeWidgets } = require("../controllers/EmployeeController");
const { AcceptRequestEmployee, DeclineRequestEmployee, ContactSuccessEmail } = require("../helpers/Functions");

// Route -> /api/employee/

// Solicitar los datos del empleado
router.route("/get-data").get([AuthMiddleware], getEmployeeData);
router.route("/get-user-data").post(getUserInfoForEmployee);
router.route("/get-widgets").get(EmployeeWidgets);

router.route("/get-cards-requests").get(getCardRequests);
router.route("/get-loans-requests").get(getLoanRequests);



router.route("/get-client-info").get([AuthMiddleware], getFullClientInfo);

router.route('/test-emails-ernesto').get(async (req, res, next) => {
  try {
    //AcceptRequestEmployee('EL DATO QUE LE TENGAS QUE PASAR', 'luisernestomr1503@gmail.com', next)
    DeclineRequestEmployee('EL DATO QUE LE TENGAS QUE PASAR', 'luisernestomr1503@gmail.com', next)
    //ContactSuccessEmail('EL DATO QUE LE TENGAS QUE PASAR', 'luisernestomr1503@gmail.com', next)
    res.status(200).json({ success: true, data: 'emails enviados' })
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
})

//Aceptar o Rechazar prestamos

router.route('/accept-card-request').post([AuthMiddleware], AcceptCardReq)
router.route('/decline-card-request').post([AuthMiddleware], DeclineCardReq)
router.route('/accept-loan-request').post([AuthMiddleware], AcceptLoanReq)
router.route('/decline-loan-request').post([AuthMiddleware], declineLoan)

module.exports = router;
