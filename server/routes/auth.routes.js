const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const resetMiddleware = require('../middlewares/resetMiddleware')

const { registerNormalUser, loginNormalUser, getNormalUserProfile } = require('../controllers/NormalUserController');

const { ForgotPassword, resetPassword, VerifyEmailCode } = require('../controllers/GeneralController');

// Rutas para usuario normal
router.route('/normal-user/register').post(registerNormalUser);
router.route('/normal-user/login').post(loginNormalUser);
router.route('/normal-user/profile').get([AuthMiddleware], getNormalUserProfile);

// rutas para ambos usuarios
router.route('/general-users/forgot-password').post(ForgotPassword);
router.route('/general-users/reset-password/:resetToken').post([resetMiddleware], resetPassword);
router.route('/general-users/verify-email-code').post(VerifyEmailCode);

module.exports = router;