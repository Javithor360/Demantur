const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { WelcomeSavingsAccount, ClassicCardFormRequests } = require("../controllers/ClassicCardRequestController");

router.route("/card-requests/classic").post([AuthMiddleware], ClassicCardFormRequests);

module.exports = router;