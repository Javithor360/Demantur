const express = require("express");
const router = express.Router();
const AuthMiddleware = require("../middlewares/AuthMiddleware");
const resetMiddleware = require("../middlewares/resetMiddleware");

const {
  loginNormalUser,
  getNormalUserProfile,
  registerPart1,
  registerPart2,
  registerPart3,
  registerPart4,
} = require("../controllers/NormalUserController");

const {
  ForgotPassword,
  resetPassword,
  VerifyEmailCode,
  resetPasswordVerify,
} = require("../controllers/GeneralController");
const SendEmail = require("../utils/SendMail");
const { loginEmployee } = require("../controllers/EmployeeController");
const { loginAdmin } = require("../controllers/AdminController");

// main route /api/auth


// Rutas para el empleado
router.route("/employee/login").post(loginEmployee);

// Rutas para el administrador
router.route("/admin/login").post(loginAdmin)

// Rutas para usuario normal

// Formulario Multi pasos

router.route("/normal-user/register-part-1").post(registerPart1);
router.route("/normal-user/register-part-2").post(registerPart2);
router.route("/normal-user/register-part-3").post(registerPart3);
router.route("/normal-user/register-part-4").post(registerPart4);

router.route("/normal-user/login").post(loginNormalUser);
router
  .route("/normal-user/profile")
  .get([AuthMiddleware], getNormalUserProfile);

// rutas para ambos usuarios
router
  .route("/general-users/reset-password-verify/:resetToken")
  .get([resetMiddleware], resetPasswordVerify);
router.route("/general-users/forgot-password").post(ForgotPassword);
router
  .route("/general-users/reset-password/:resetToken")
  .put([resetMiddleware], resetPassword);
router.route("/general-users/verify-email-code").post(VerifyEmailCode);
router.route("/holatest").get(async (req, res, next) => {
  try {
    const pepe = `color: red; font-style: italic;`;
    const resp = await SendEmail({
      to: "floresmejia004@gmail.com",
      subject: "test correo",
      text: `<h1 style="${pepe}">el pepardo</h1>`,
    });
    console.log(resp);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
