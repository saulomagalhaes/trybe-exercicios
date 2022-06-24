const User = require("../models/User");

const editUser = async (req, res, next) => {
  const { firstName, lastName, email } = req.body;
  const { id } = req.params;
  try {
    const userIsvalid = await User.getUser(id);
    if (userIsvalid.length === 0)
      return res
        .status(404)
        .json({ error: true, message: "Usuário não encontrado" });

    const user = await User.editUser(id, firstName, lastName, email);
    req.user = user;
    next();
  } catch (err) {
    next(err);
  }
};

module.exports = editUser;
