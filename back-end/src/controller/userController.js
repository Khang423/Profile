const { AppDataSource } = require("../../data-source");
const userRepo = AppDataSource.getRepository("User");

exports.CreateUser = async (req, res) => {
  try {
    const user = userRepo.create(req.body);
    const result = await userRepo.save(user);
    res.json(result);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
