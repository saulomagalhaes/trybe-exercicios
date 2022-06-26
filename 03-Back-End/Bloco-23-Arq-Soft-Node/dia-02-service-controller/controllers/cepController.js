const cepService = require("../services/cepService");

const cepController = {
  async getCep(req, res) {
    const { cep } = req.params;
    const cepformatted = cepService.validateCep(cep);

    const result = await cepService.getCep(cepformatted);

    res.status(200).json(result);
  },
};

module.exports = cepController;
