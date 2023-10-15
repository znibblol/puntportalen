const express = require('express');
const { login, me, users } = require('../controllers/users.js');
const { decodeHeader } = require('../middlewares/verifyAuth.js');

const router = express.Router();

router.post('/login', login);
router.get('/users', users);
// router.get('/me', decodeHeader, me);

module.exports = router;
