const express = require("express");
const { AppDataSource } = require("../data-source");
const userRoutes = require("./routes/userRoutes");
const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");
    app.get("/", (req, res) => res.send("Hello Express + TypeORM"));
    app.listen(5000, () =>
      console.log("Server running on http://localhost:5000")
    );
  })
  .catch((err) => console.log("Database connection error: ", err));
