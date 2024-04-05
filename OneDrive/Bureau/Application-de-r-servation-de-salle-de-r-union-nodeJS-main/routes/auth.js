
//create router register,login
const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken')
const User = require('../models/User');
const router = express.Router();

const authController = require('../controller/authController');

router.post('/register', authController.registerUser);
router.post('/login', authController.loginUser);


module.exports = router;
