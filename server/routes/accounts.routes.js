const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { WelcomeSavingsAccount, EmployeeAccount, AdminAccount } = require("../controllers/AccountCreatorController");
const { getCardRequests, activateAccount, getAccountActivationRequests, denyAccount, getLoanRequests } = require("../controllers/EmployeeController");


// Route -> /api/accounts/

// Normal user account creator
router.route("/create/first-savings").post([AuthMiddleware], WelcomeSavingsAccount);

// Others
router.route("/create/employee").post(EmployeeAccount);
router.route("/create/admin").post(AdminAccount);
router.route("/get-cards-requests").get(getCardRequests);
router.route("/get-loans-requests").get(getLoanRequests)

router.route("/get-account-requests").get([AuthMiddleware], getAccountActivationRequests);
router.route('/activate-account').post([AuthMiddleware], activateAccount);
router.route('/decline-account').delete(denyAccount);



module.exports = router;
