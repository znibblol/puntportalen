const express = require('express');
const { login, me, users } = require('../app/controllers/users.js');
const { decodeHeader } = require('../app/middlewares/verifyAuth.js');

const router = express.Router();

router.post('/login', login);
router.get('/users', users);
// router.get('/me', decodeHeader, me);

module.exports = router;
