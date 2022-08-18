const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { WelcomeSavingsAccount, EmployeeAccount } = require("../controllers/AccountCreatorController");

router.route("/create/first-savings").post([AuthMiddleware], WelcomeSavingsAccount);
router.route("/create/employee").post(EmployeeAccount);

module.exports = router;
