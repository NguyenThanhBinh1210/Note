const express = require("express");
const exphbs = require("express-handlebars");
const bodyParser = require("body-parser");
const methodOverride = require("method-override");
const connectDB = require("./config/db");

// Nhập khẩu routes
const posts = require("./routes/posts.js");

// Khởi động app
const app = express();

// Khởi động Handlebars middleware
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Khởi động bodyParser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Khởi động express middleware
app.use(express.json());

// kết nối cơ sở dữ liệu
connectDB();

// Một số routes cơ bản có  thể đưa vào dile riêng trong thư mục routes
app.get("/", function (req, res) {
  res.render("index");
});
app.get("/about", function (req, res) {
  res.render("about");
});

// Mang routes vào sử dụng
app.use("/posts", posts);

// Tạo POST
const POST = 5000;

app.listen(POST, () => console.log(`Server đã khởi động tại ${POST}`));
