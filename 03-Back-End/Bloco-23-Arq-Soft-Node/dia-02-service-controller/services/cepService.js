const cepModel = require("../models/cepModel");
// const Joi = require("joi");
const throwValidationError = require("../errors/ValidationError");
const throwNotFoundError = require("../errors/NotFoundError");
// const { runSchema } = require("./validators");

const cepService = {
  validateCep(cep) {
    const cepIsValid = (cep) => /^\d{5}-?\d{3}$/.test(cep);
    const isValid = cepIsValid(cep);
    if (!isValid) return throwValidationError("CEP inválido");
    return cep.replace("-", "");
  },
  async getCep(cep) {
    const response = await cepModel.get(cep);
    if (!response) return throwNotFoundError("CEP não encontrado");

    return response;
  },
};

module.exports = cepService;
