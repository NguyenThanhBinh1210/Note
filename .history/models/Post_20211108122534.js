const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// Tạo model
const postSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
});
