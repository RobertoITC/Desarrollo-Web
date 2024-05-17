const express = require('express');
const router = express.Router();
const userControllers = require('../controllers/userControllers');


router.get('/users', userControllers.getAllUsers);

module.exports = router;

