const cepModel = require("../models/cepModel");

const cepService = {
  async getCep(cep) {
    const response = await cepModel.getCep(cep);
    if (response.length === 0)
      return { error: { code: "notFound", message: "CEP não encontrado" } };

    return response;
  },
};

module.exports = cepService;
