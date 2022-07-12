const UserService = require('../services/UserService');

const UserController = {
  login: async (req, res) => {
    const { username, password } = req.body;
    await UserService.validateBody(req.body);
    const token = await UserService.login(username, password);
    res.status(200).json({ token });
  },
  getUser: async (req, res) => {
    const [, token] = (req.headers.authorization).split(' ');
    const user = await UserService.getUser(token);
    res.status(200).json(user);
  },
};

module.exports = UserController;