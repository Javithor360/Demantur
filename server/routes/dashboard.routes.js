const express = require('express');
const router = express.Router();
const AuthMiddleware = require('../middlewares/AuthMiddleware');

const { testDB, getUserId, getGlobalInfo, getFriendsReq, addFriendRequest, CancelPendingFr, AcceptFriend, DeclineFriend, DeleteFriend, DoAtransfer, getMyCardReq, getMyLoanReq, getContacs, getSavAcc, UploadPhoto, getNavName, getEveryAcc, ChangeEmail, getAccountsHistory, EmailCodeVer, CancelChangeEmail,
  VerifyOldPass, ChangePass, VerifyCodePass, CancelChangePass, getPedingFriendReq, FriendReq, getUsersToAdd, getMyCard, getDebitCard } = require('../controllers/DashboardNUController');

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
router.route('/get-contacts-new').get([AuthMiddleware], getContacs);
router.route('/get-saving-accounts').get([AuthMiddleware], getSavAcc);
router.route('/upload-photo').post([AuthMiddleware], UploadPhoto);
router.route('/get-nav-name').get([AuthMiddleware], getNavName);
router.route('/get-every-account').get([AuthMiddleware], getEveryAcc);
router.route('/change-email').put([AuthMiddleware], ChangeEmail);
router.route('/get-account-history').get([AuthMiddleware], getAccountsHistory);
router.route('/email-code-verify').post([AuthMiddleware], EmailCodeVer);
router.route('/cancel-change-email').post([AuthMiddleware], CancelChangeEmail);
router.route('/verify-old-pass').post([AuthMiddleware], VerifyOldPass);
router.route('/change-password').post([AuthMiddleware], ChangePass);
router.route('/verify-pass-code').post([AuthMiddleware], VerifyCodePass);
router.route('/cancel-change-password').post([AuthMiddleware], CancelChangePass);
router.route('/get-pending-friend-request').get([AuthMiddleware], getPedingFriendReq);
router.route('/get-friend-request').get([AuthMiddleware], FriendReq);
router.route('/get-users-to-add').get([AuthMiddleware], getUsersToAdd);
router.route('/get-my-card').get([AuthMiddleware], getMyCard);
router.route('/get-debit-card').get([AuthMiddleware], getDebitCard)

module.exports = router;