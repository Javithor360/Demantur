const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { LoansFormRequests } = require("../controllers/LoansController");
const { makeDeposit } = require("../controllers/EmployeeController");

// Route -> /api/requests/

// ~ Employee makes deposit
router.route('/deposit').post(/*[AuthMiddleware],*/ makeDeposit);

router.route("/loan-requests").post([AuthMiddleware], LoansFormRequests);


// 

module.exports = router;