const express = require("express");
const { login, users } = require("../controllers/users");
// const { decodeHeader } = require("../middlewares/verifyAuth");

const router = express.Router();

router.post("/login", login);
router.get("/users", users);

module.exports = router;
