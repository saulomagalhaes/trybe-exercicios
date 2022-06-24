const User = require("../models/User");
const serialize = require("../services/serializeUser");

const validateId = async (req, res, next) => {
  const { id } = req.params;
  try {
    const response = await User.getUser(id);
    if (response.length === 0)
      return res
        .status(404)
        .json({ error: true, message: "Usuário não encontrado" });

    const user = response.map(serialize);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = validateId;
