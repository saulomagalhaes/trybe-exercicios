const Joi = require("joi");

const userSchema = Joi.object({
  firstName: Joi.string().required(),
  lastName: Joi.string().required(),
  email: Joi.string().email().required(),
  password: Joi.string().min(6).required(),
});

const validateUser = (req, _res, next) => {
  // Pedimos ao Joi que valide o corpo da requisição de acordo com o que definimos em seu schema
  const { error } = userSchema.validate(req.body);

  // Caso um erro de validação seja encontrado, iniciamos o fluxo de erro e encerramos a execução dos nossos middlewares.
  if (error) return next(error);

  next();
};

module.exports = validateUser;
