const express = require("express");

const User = require("../models/User");
const validateUser = require("../middlewares/validateUser");

const router = express.Router();

router.post("/", validateUser, async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.createUser(firstName, lastName, email, password);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
