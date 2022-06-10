const express = require('express');
const router = express.Router();

// const { } = require('../controllers/');

router.route('/register').post();
router.route('/login').post()
router.route('/forgotpassword').post()
router.route('/resetpassword/:resetToken').post()

module.exports = router;