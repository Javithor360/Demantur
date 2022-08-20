const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { WelcomeSavingsAccount, EmployeeAccount, AdminAccount } = require("../controllers/AccountCreatorController");

// Route -> /api/accounts/

// Normal user account creator
router.route("/create/first-savings").post([AuthMiddleware], WelcomeSavingsAccount);

// Others
router.route("/create/employee").post(EmployeeAccount);
router.route("/create/admin").post(AdminAccount);

module.exports = router;
