const express = require('express');
const router = express.Router();

const { registerNormalUser, loginNormalUser, getNormalUserProfile } = require('../controllers/NormalUserController');

router.route('/normal-user/register').post(registerNormalUser);
router.route('/normal-user/login').post(loginNormalUser)
router.route('/normal-user/profile').get(getNormalUserProfile)

// router.route('/forgotpassword').post()
// router.route('/resetpassword/:resetToken').post()

module.exports = router;