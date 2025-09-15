const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
const validateMiddleware = require("../middleware/validateMiddleware");
const loginValidation = require("../validation/loginValidation");

router.post(
  "/login",
  loginValidation,
  validateMiddleware,
  authController.login
);

module.exports = router;
