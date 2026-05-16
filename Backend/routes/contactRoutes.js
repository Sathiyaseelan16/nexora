const express = require("express");

const router = express.Router();

const {sendMessage} = require("../controllers/ContactController");

router.post("/", sendMessage);

module.exports = router;