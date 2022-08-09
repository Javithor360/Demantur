const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { WelcomeSavingsAccount } = require("../controllers/AccountCreatorController");

router.route("/create/first-savings").post([AuthMiddleware], WelcomeSavingsAccount);

module.exports = router;
