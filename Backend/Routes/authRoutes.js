const express = require('express');
const { signUp } = require('../Controllers/authConrtoller');
const { login, resetpassword, forgotpassword } = require('../Controllers/authConrtoller')
const router = express.Router();
const rateLimit = require('express-rate-limit');

const limiter = rateLimit({
    windowMs: 10 * 60 * 100,
    max: 5,
    message: {
        status: 429,
        message: 'To many requests, please try again later.'
    }
});

router.use(limiter);

router.post('/signup', signUp);
router.post('/login', login);
router.post('/forgot-password', forgotpassword);
router.post('/reset-password', resetpassword);



module.exports = router;