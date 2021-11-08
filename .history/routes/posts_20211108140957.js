const express = require("express");
const router = express.Router();

// Load model
const Post = require("../models/Post");

// Hiển thị tất cả các bài viết
router.get("/", async (req, res) => {
  const posts = await Post.bind().sort({ date: -1 });
  res.render("posts/index", {
    posts: posts,
  });
});
// router.get("/", async (req, res) => {
//   const posts = await Post.find().lean().sort({ date: -1 });
//   res.render("posts/index", { posts });
// });

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
    await newPost.save();
    res.redirect("/posts");
  }
});

module.exports = router;
