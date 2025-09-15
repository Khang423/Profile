require("dotenv").config({ path: "./config/.env" });
const express = require("express");
const app = express();
const { AppDataSource } = require("../data-source");
const userRoutes = require("./routes/userRoutes");
const authRoutes = require("./routes/authRoutes");
const adminMiddleware = require("./middleware/authMiddleware");
const cors = require("cors");
const PORT = process.env.PORT || 5000;
const APP_URL = process.env.APP_URL || `http://localhost:${PORT}`;

app.use(express.json());
app.use(cors());
app.use("/users", adminMiddleware, userRoutes);
app.use("/auth", authRoutes);
app.use("/admin/dashboard", adminMiddleware);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.get("/", (req, res) => res.send("Hello Express + TypeORM"));
    app.listen(PORT, () => console.log(`Server running on ${APP_URL}`));
  })
  .catch((err) => console.log("Database connection error: ", err));
