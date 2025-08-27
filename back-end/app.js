const express = require("express");
const cors = require("cors");
const testRoutes = require("./src/routes/testRoute");

const app = express();

app.use(cors());
app.use(express.json());

app.get("/api/test", (req, res) => {
  res.json({ message: "Hello from Express" });
});
module.exports = app;
