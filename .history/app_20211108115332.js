const express = require("express");
const connectDB = require("./config/db");

// Khởi động app
const app = express();

// Khởi động express middleware
app.use(express.json());

// kết nối cơ sở dữ liệu
connectDB();

// Tạo POST
const POST = 5000;

app.listen(POST, () => console.log(`Server khởi động tại ${POST}`));
