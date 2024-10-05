const { model } = require('mongoose');
const { submitBlog, approveBlog, getpendingBlog, rejectBlog } = require('../Controllers/blogController');
const { isBlogger, isAdmin, verifyToken } = require('../Middlewares/middleware');
const express = require('express');
const router = express.Router();

router.post('/submit', verifyToken, isBlogger , submitBlog);
router.post('/approve', verifyToken, isAdmin,approveBlog);
router.get('/pending', verifyToken, isAdmin ,getpendingBlog);
router.get('/reject', verifyToken, isAdmin, rejectBlog);

module.exports = router;

