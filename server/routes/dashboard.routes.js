const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');


const { testDB, getUserId, getGlobalInfo, getFriendsReq, addFriendRequest, CancelPendingFr } = require('../controllers/DashboardNUController');

router.route('/test-db-relation').post([AuthMiddleware], testDB);


router.route('/get-info').get([AuthMiddleware], getUserId);
router.route('/get-contacts').get([AuthMiddleware], getGlobalInfo);
router.route('/get-friend-req').get([AuthMiddleware], getFriendsReq);
router.route('/add-friend-request').post([AuthMiddleware], addFriendRequest);
router.route('/cancel-friend-request').post([AuthMiddleware], CancelPendingFr);


module.exports = router;