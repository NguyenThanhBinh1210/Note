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
  const { title, text } = req.body;
  let errors = [];
  if (!title) {
    errors.push({
      message: "Chưa nhập tiêu đề",
    });
  }
  if (!text) {
    errors.push({
      message: "Chưa nhập Nội dung",
    });
  }
  if (errors.length > 0) {
    res.render("posts/add", { title, text });
  } else {
    const newPostData = { title, text };
    const newPost = new Post(newPostData);
  }
});

module.exports = router;
