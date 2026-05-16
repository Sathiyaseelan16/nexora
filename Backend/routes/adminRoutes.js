const express = require("express");

const router = express.Router();

const adminAuth = require("../middleware/adminAuth");

const {
  getDashboard
} = require("../controllers/adminController");

router.get("/dashboard", adminAuth, getDashboard);

module.exports = router;