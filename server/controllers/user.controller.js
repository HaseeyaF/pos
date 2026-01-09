const { User } = require("../models");

exports.register = async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json({ message: "User created" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const user = await User.findOne({ where: { email: req.body.email } });
    if (!user) return res.status(401).json({ message: "Invalid credentials" });

    const match = await user.comparePassword(req.body.password);
    if (!match) return res.status(401).json({ message: "Invalid credentials" });

    res.json({
      id: user.id,
      name: user.name,
      role: user.role,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
