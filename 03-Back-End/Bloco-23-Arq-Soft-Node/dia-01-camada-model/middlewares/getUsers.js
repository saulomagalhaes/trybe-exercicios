const User = require("../models/User");
const serialize = require("../services/serializeUser");

const getUsers = async (req, _res, next) => {
  try {
    const response = await User.getAllUser();
    const users = response.map(serialize);
    req.users = users;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = getUsers;
