const Joi = require("joi");
const cepModel = require("../models/cepModel");

const throwNotFoundError = require("../errors/NotFoundError");
const message = require("../errors/messages");
const { runSchema } = require("./validators");

const cepService = {
  validateBodyAdd: runSchema(
    Joi.object({
      cep: Joi.string()
        .regex(/^\d{5}-\d{3}$/)
        .required()
        .messages(message.cep),
      logradouro: Joi.string().required().messages(message.logradouro),
      bairro: Joi.string().required().messages(message.bairro),
      localidade: Joi.string().required().messages(message.localidade),
      uf: Joi.string().required().messages(message.uf),
    })
  ),
  validateParamsCep: runSchema(
    Joi.object({
      cep: Joi.string()
        .regex(/^\d{5}-?\d{3}$/)
        .required()
        .messages(message.cep),
    })
  ),
  async getCep(cep) {
    const response = await cepModel.get(cep);
    if (!response) {
      const result = await cepModel.consultViaCep(cep);
      if (result.erro) return throwNotFoundError("CEP não encontrado");
      const data = {
        cepp: result.cep.replace("-", ""),
        logradouro: result.logradouro || "null",
        bairro: result.bairro || "null",
        localidade: result.localidade,
        uf: result.uf,
      };
      const { cepp, logradouro, bairro, localidade, uf } = data;
      await cepModel.post(cepp, logradouro, bairro, localidade, uf);
      return data;
    }

    return response;
  },
  async postCep(cepFormatted, logradouro, bairro, localidade, uf) {
    await cepModel.post(cepFormatted, logradouro, bairro, localidade, uf);
  },
  async existsCep(cep) {
    const response = await cepModel.exists(cep);
    if (response) return throwNotFoundError("CEP já existe");
    return;
  },
};

module.exports = cepService;
