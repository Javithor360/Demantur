const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const resetMiddleware = require('../middlewares/resetMiddleware')

const { loginNormalUser, getNormalUserProfile, registerPart1, registerPart2, registerPart3, registerPart4 } = require('../controllers/NormalUserController');

const { ForgotPassword, resetPassword, VerifyEmailCode, resetPasswordVerify } = require('../controllers/GeneralController');

// main route /api/auth

// Rutas para usuario normal

// Formulario Multi pasos

router.route('/normal-user/register-part-1').post(registerPart1);
router.route('/normal-user/register-part-2').post(registerPart2);
router.route('/normal-user/register-part-3').post(registerPart3);
router.route('/normal-user/register-part-4').post(registerPart4);

router.route('/normal-user/login').post(loginNormalUser);
router.route('/normal-user/profile').get([AuthMiddleware], getNormalUserProfile);

// rutas para ambos usuarios
router.route('/general-users/reset-password-verify/:resetToken').get([resetMiddleware], resetPasswordVerify)
router.route('/general-users/forgot-password').post(ForgotPassword);
router.route('/general-users/reset-password/:resetToken').put([resetMiddleware], resetPassword);
router.route('/general-users/verify-email-code').post(VerifyEmailCode);

module.exports = router;