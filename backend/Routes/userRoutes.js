const express = require('express');
const {registerUser,authUser, allUsers} = require('../Controllers/userControllers');
const { protect } = require('../middleWare/authMiddleWare');

const router = express.Router();

router.route('/').post(registerUser).get(protect,allUsers);
router.post('/login',authUser);

module.exports = router;