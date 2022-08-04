const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');


const { testDB, getUserId, getContacts, getFriendsReq } = require('../controllers/DashboardNUController');

router.route('/test-db-relation').post([AuthMiddleware], testDB);
router.route('/get-info').get([AuthMiddleware], getUserId);
router.route('/get-contacts').get([AuthMiddleware], getContacts);
router.route('/get-friend-req').get([AuthMiddleware], getFriendsReq);

module.exports = router;