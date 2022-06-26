const Joi = require("joi");

const cepIsValid = (cep) => /^\d{5}-\d{3}$/.test(cep);

const bodySchema = Joi.object({
  logradouro: Joi.string().required(),
  bairro: Joi.string().required(),
  localidade: Joi.string().required(),
  uf: Joi.string().required(),
});

const validateBody = (req, res, next) => {
  const { cep } = req.body;
  const isValid = cepIsValid(cep);

  if (!isValid)
    return res.status(400).json({
      error: { code: "invalidData", message: "Formato do CEP inválido" },
    });

  const { error } = bodySchema.validate(req.body);
  if (error) return next(error);

  next();
};

module.exports = { validateBody };
