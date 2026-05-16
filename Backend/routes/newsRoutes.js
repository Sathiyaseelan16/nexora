const express = require("express");

const router = express.Router();

const {
  getNews,
  getSingleNews
} = require("../controllers/newsController");

router.get("/", getNews);

router.get("/:id", getSingleNews);

module.exports = router;