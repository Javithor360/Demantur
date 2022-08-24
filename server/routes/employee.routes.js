const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const { getCardRequests, getEmployeeData, getLoanRequests } = require("../controllers/EmployeeController");

// Route -> /api/employee/

// Solicitar los datos del empleado
router.route("/get-data").get([AuthMiddleware], getEmployeeData);

router.route("/get-cards-requests").get(getCardRequests);
router.route("/get-Loans-requests").get(getLoanRequests);


module.exports = router;
