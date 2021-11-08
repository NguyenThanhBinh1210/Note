const express = require("express");
const router = express.Router();

// Load model
const Post = require("../models/post");

// Thử nghiệm
router.get("/", function (req, res) {
  res.send("Đây là router post");
});

module.exports = router;
