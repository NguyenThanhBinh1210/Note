const express = require("express");
const router = express.Router();

// Load model
const Post = require("../models/Post");

// Hiển thị form tạo bài viết mới
router.get("/ađd", function (req, res) {
  res.render("posts");
});

module.exports = router;