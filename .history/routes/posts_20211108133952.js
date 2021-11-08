const express = require("express");
const router = express.Router();

// Load model
const Post = require("../models/Post");

// Hiển thị form tạo bài viết mới
router.get("/add", function (req, res) {
  res.render("posts/add");
});

// Tạo post mới
router.post("/", async (req, res) => {
  console.log(req.body);
});

module.exports = router;
