const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { CardsFormRequests } = require("../controllers/CardsFormRequestsController");
const { makeDeposit } = require("../controllers/EmployeeController");

// Route -> /api/requests/

// ~ Employee makes deposit
router.route('/deposit').post(/*[AuthMiddleware],*/ makeDeposit);

router.route("/card-requests").post([AuthMiddleware], CardsFormRequests);

// 

module.exports = router;