const express = require("express");
const router = express.Router();
const authController = require("../controller/authController");
<<<<<<< HEAD
const validateMiddleware = require("../middleware/validateMiddleware");
const loginValidation = require("../validation/loginValidation");

router.post(
  "/login",
  loginValidation,
  validateMiddleware,
  authController.login
);
=======

router.post("/login", authController.login);
>>>>>>> b7a04dc72c2ca660008e76bd6a506ee416e6c412
module.exports = router;
