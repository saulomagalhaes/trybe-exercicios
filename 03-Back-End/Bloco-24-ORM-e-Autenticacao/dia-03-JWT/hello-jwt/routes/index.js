const express = require('express');
const UserController = require('../controllers/UserController');

const router = express.Router();

router.get('/me', UserController.getUser);
router.post('/login', UserController.login);

module.exports = router;