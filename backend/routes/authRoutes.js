const express = require('express');
const { register, login, getMe } = require('../controllers/authController');
const { protect } = require('../middleware/authMiddleware');

Router.post('/register', register);
Router.post('/login', login);
Router.get('/me', protect, getMe);

module.exports = router;