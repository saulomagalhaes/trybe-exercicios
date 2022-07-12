const Joi = require('joi');
const runSchema = require('../utils/validator');
const UserModel = require('../models/UserModel');
const throwNotFoundError = require('../utils/notFoundError');
const jwtService = require('../auth/jwt');

const UserService = {
  validateBody: runSchema(Joi.object({
    username: Joi.string().alphanum().min(5).required(),
    password: Joi.string().min(5).required(),
  })),
  login: async (username, password) => {
    const user = await UserModel.login(username);
    if (!user || user.password !== password) throwNotFoundError('Usuário ou Senha Incorretos');
    const token = jwtService.createToken(user);
    return token;
  }, 
  getUser: async (token) => {
    const auth = jwtService.validateToken(token);
    return auth;
  },
};

module.exports = UserService;