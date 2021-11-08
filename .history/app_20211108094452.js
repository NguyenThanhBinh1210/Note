const express = require("express");
// Khởi động app
const app = express();

// Khởi động express middleware
app.use(express.json());

// Tạo POST
const POST = 5000;

app.listen(POST, () => console.log(`Server đã khởi động tại ${POST}`));
