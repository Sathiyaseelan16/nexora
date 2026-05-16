const express = require("express");

const router = express.Router();

const {
  getGallery,
  getSingleGallery
} = require("../controllers/galleryController");

router.get("/", getGallery);

router.get("/:id", getSingleGallery);

module.exports = router;