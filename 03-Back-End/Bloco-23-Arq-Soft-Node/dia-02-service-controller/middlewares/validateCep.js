const cepIsValid = (cep) => /^\d{5}-?\d{3}$/.test(cep);

const validateCep = (req, res, next) => {
  const { cep } = req.params;

  const isValid = cepIsValid(cep);

  if (!isValid)
    return res
      .status(400)
      .json({ error: { code: "invalidData", message: "CEP inválido" } });

  next();
};

module.exports = { validateCep };
