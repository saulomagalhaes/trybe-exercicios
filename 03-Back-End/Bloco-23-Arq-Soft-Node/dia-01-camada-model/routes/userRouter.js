const express = require("express");

const User = require("../models/User");

const postUser = require("../middlewares/postUser");
const getUsers = require("../middlewares/getUsers");
const getUserId = require("../middlewares/getUserId");

const router = express.Router();

router.get("/:id", getUserId, (req, res) => {
  const { user } = req;
  res.status(200).json(user);
});

router.get("/", getUsers, (req, res) => {
  const { users } = req;
  res.status(200).json(users);
});

router.post("/", postUser, async (req, res, next) => {
  const { firstName, lastName, email, password } = req.body;
  try {
    const user = await User.createUser(firstName, lastName, email, password);
    res.status(201).json(user);
  } catch (err) {
    next(err);
  }
});

router.put("/:id", (req, res) => {
  const { firstName, lastName, email, password } = req.body;
});

module.exports = router;
