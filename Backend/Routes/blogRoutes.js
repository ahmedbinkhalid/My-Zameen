const { model } = require('mongoose');
const { submitBlog, approveBlog, getpendingBlog } = require('../Controllers/blogController');
const { isBlogger, isAdmin } = require('../Middlewares/middleware');
const express = require('express');
const router = express.Router();

router.post('/submit', isBlogger,submitBlog);
router.post('/approve', isAdmin, approveBlog);
router.get('/pending', isAdmin, getpendingBlog);

module.exports = router;

