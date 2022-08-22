const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const { getCardRequests } = require("../controllers/EmployeeController");

router.route("/get-cards-requests").get(getCardRequests);


module.exports = router;
