const express = require("express");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

// Route test
app.get("/", (req, res) => {
  res.send("Backend Node.js is running 🚀");
});

// API ví dụ
app.get("/api/hello", (req, res) => {
  res.json({ message: "Hello from Node.js backend!" });
});

app.get("/admin/login", (req, res) => {
    res.json({status: "success", message: "Login successfully"});
});
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
