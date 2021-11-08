const express = require("express");
// Khởi động app
const app = express();

// Khởi động express middleware
app.use(express.json());

const POST = 5000;
