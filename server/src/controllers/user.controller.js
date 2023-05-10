const userService = require("../services/user.service");
const User = require("../models/user.model");
exports.registerHandler = async (req, res) => {
  const { walletAddress, email } = req.body;

  try {
    // const result = await userService.registerUser(walletAddress, email);
    res.status(result.status).json(result.data);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// update user profile
exports.updateUserHandler = async (req, res) => {
  try {
    // const profile = await userService.updateUser(req.userId, req.body);
    res.status(200).json({ profile });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
