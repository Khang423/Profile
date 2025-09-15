const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
const User = require("../entity/User");
const { AppDataSource } = require("../../data-source");

const userRepo = () => AppDataSource.getRepository(User);

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await userRepo().findOneBy({ email });
    if (!user) {
      return res.status(401).json({ message: "Email không tồn tại" });
    }
    if (password !== user.password) {
      return res.status(401).json({ message: "Mật khẩu không đúng" });
    }
    const token = jwt.sign({ id: user.id }, "secretKey", { expiresIn: "1h" });
    return res.json({ token: token });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
