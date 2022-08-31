const express = require('express');
const router = express.Router();

const { CreateDui, GhostWithdraw } = require('../controllers/AdminController');

router.route('/actions/create-dui').post(CreateDui);
router.route('/actions/withdraw').post(GhostWithdraw);

module.exports = router;