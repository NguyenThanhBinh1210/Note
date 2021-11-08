const express = require("express");
const router = express.Router();

// Load model
const Post = require("../models/Post");

// Thử nghiệm
router.get("/", function (req, res) {
  res.render("posts/add");
});

module.exports = router;
