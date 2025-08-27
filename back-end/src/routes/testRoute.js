const express = require("express");
const pool = require("../config/db");

const router = express.Router();
router.get("/", async (req, res) => {
  try {
    const [rows] = await pool.query("SELECT * FROM users");
    res.json({
      message: "Connection successful",
      serverTime: rows[0].currentTime,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
