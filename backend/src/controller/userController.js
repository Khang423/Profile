// controller/userController.js
const { AppDataSource } = require("../../data-source");

// lấy repo mỗi lần gọi
const userRepo = () => AppDataSource.getRepository("User");

exports.createUser = async (req, res) => {
  try {
    const user = userRepo().create(req.body);
    const result = await userRepo().save(user);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUsers = async (req, res) => {
  try {
    const users = await userRepo().find();
    res.json(users);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getUserById = async (req, res) => {
  try {
    const user = await userRepo().findOneBy({ id: parseInt(req.params.id) });
    if (!user) return res.status(404).json({ message: "User not found" });
    res.json(user);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.updateUser = async (req, res) => {
  try {
    const user = await userRepo().findOneBy({ id: parseInt(req.params.id) });
    if (!user) return res.status(404).json({ message: "User not found" });

    userRepo().merge(user, req.body);
    const result = await userRepo().save(user);
    res.json(result);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

exports.deleteUser = async (req, res) => {
  try {
    const result = await userRepo().delete(req.params.id);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
