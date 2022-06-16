const express = require('express');
const router = express.Router();

const { CreateDui } = require('../controllers/AdminController');

router.route('/actions/create-dui').post(CreateDui);

module.exports = router;