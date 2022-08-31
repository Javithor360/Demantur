const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const { usersContactForm } = require("../controllers/ContactFormController");

router.route("/contact-data").post(usersContactForm);
module.exports = router;