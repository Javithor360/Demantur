const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');


const { testDB, getUserId, getContacts } = require('../controllers/DashboardNUController');

router.route('/test-db-relation').post([AuthMiddleware], testDB);
router.route('/get-info').get([AuthMiddleware], getUserId);
router.route('/get-contacts').get([AuthMiddleware], getContacts);

module.exports = router;