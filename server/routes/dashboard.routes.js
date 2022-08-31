const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');
const { testDB, getUserId, getGlobalInfo, getFriendsReq, addFriendRequest, CancelPendingFr, AcceptFriend, DeclineFriend, DeleteFriend, DoAtransfer, getMyCardReq, getMyLoanReq, getContacs, getSavAcc, UploadPhoto, getNavName, getEveryAcc, ChangeEmail } = require('../controllers/DashboardNUController');

router.route('/test-db-relation').post([AuthMiddleware], testDB);


router.route('/get-info').get([AuthMiddleware], getUserId);
router.route('/get-contacts').get([AuthMiddleware], getGlobalInfo);
router.route('/get-friend-req').get([AuthMiddleware], getFriendsReq);
router.route('/add-friend-request').post([AuthMiddleware], addFriendRequest);
router.route('/cancel-friend-request').post([AuthMiddleware], CancelPendingFr);
router.route('/Accept-friend-request').post([AuthMiddleware], AcceptFriend);
router.route('/decline-friend-request').post([AuthMiddleware], DeclineFriend);
router.route('/delete-friend-request').post([AuthMiddleware], DeleteFriend);
router.route('/do-a-transfer').post([AuthMiddleware], DoAtransfer);
router.route('/get-my-loan-request').get([AuthMiddleware], getMyLoanReq);
router.route('/get-my-card-request').get([AuthMiddleware], getMyCardReq)
router.route('/get-contacts-new').get([AuthMiddleware], getContacs)
router.route('/get-saving-accounts').get([AuthMiddleware], getSavAcc)
router.route('/upload-photo').post([AuthMiddleware], UploadPhoto)
router.route('/get-nav-name').get([AuthMiddleware], getNavName);
router.route('/get-every-account').get([AuthMiddleware], getEveryAcc);
router.route('/change-email').put([AuthMiddleware], ChangeEmail);

module.exports = router;