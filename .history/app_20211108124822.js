const express = require("express");
const connectDB = require("./config/db");

// Nhập khẩu routes
const posts = require("./routes/posts.js");

// Khởi động app
const app = express();

// Khởi động express middleware
app.use(express.json());

// kết nối cơ sở dữ liệu
connectDB();

// Một số routes cơ bản có  thể đưa vào dile riêng trong thư mục routes

// Mang routes vào sử dụng
app.use("/posts", posts);

// Tạo POST
const POST = 5000;

app.listen(POST, () => console.log(`Server đã khởi động tại ${POST}`));
