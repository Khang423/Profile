const { body } = require("express-validator");
const loginValidation = [
  body("email")
    .notEmpty()
    .withMessage("Email không được để trống.")
    .bail()
    .isEmail()
    .withMessage("Email không hợp lệ."),

  // Password
  body("password")
    .notEmpty()
    .withMessage("Mật khẩu không được để trống.")
    .bail()
    .isLength({ min: 6 })
    .withMessage("Mật khẩu tối thiểu 6 ký tự."),
];
module.exports = loginValidation;
