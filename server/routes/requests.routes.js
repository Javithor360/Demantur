const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { CardsFormRequests } = require("../controllers/ClassicCardRequestController");

router.route("/card-requests").post([AuthMiddleware], CardsFormRequests);

module.exports = router;