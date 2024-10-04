const express = require('express');
const { signUp } = require('../Controllers/authConrtoller');
const { login, resetpassword, forgotpassword } = require('../Controllers/authConrtoller')
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);
router.post('/forgot-password', forgotpassword);
router.post('/reset-password', resetpassword);



module.exports = router;