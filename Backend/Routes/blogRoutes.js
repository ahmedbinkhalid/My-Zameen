const { model } = require('mongoose');
const { submitBlog, approveBlog, getpendingBlog } = require('../Controllers/blogController');
const express = require('express');
const router = express.Router();

router.post('/submit', submitBlog);
router.post('/approve', approveBlog);
router.get('/pending', getpendingBlog);

module.exports = router;

