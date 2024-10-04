const express = require('express');
const { signUp } = require('../Controllers/authConrtoller');
const { login } = require('../Controllers/authConrtoller')
const router = express.Router();

router.post('/signup', signUp);
router.post('/login', login);

module.exports = router;