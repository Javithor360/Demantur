const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");

const { getCardRequests, getEmployeeData } = require("../controllers/EmployeeController");

// Route -> /api/employee/

// Solicitar los datos del empleado
router.route("/get-data").get([AuthMiddleware], getEmployeeData);

router.route("/get-cards-requests").get(getCardRequests);


module.exports = router;
