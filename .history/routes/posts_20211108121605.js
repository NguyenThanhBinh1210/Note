const express = require("express");
const router = express.Router;

// Load model

// Thử nghiệm
router.get("/", function (req, res) {
  res.send("Đây là router post");
});

mongoose.export = router;
