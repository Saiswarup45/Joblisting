const User = require('../models/User');
const jwt = require('jsonwebtoken');

const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: '30d' });
}

exports.register = async (req, res) => {
    try {

    } catch (error) {
        res.status(500).json({ message: err.message });
    }
};

exports.login = async (req, res) => {
};

exports.getMe = async (req, res) => {
    res.json(req.user);
};