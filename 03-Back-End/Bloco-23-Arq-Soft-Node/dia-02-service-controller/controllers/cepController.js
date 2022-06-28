const cepService = require("../services/cepService");

const cepController = {
  async getCep(req, res) {
    const { cep } = await cepService.validateParamsCep(req.params);
    const cepFormatted = cep.replace("-", "");

    const result = await cepService.getCep(cepFormatted);

    res.status(200).json(result);
  },
  async postCep(req, res) {
    const { cep, logradouro, bairro, localidade, uf } =
      await cepService.validateBodyAdd(req.body);

    const cepFormatted = cep.replace("-", "");

    await cepService.existsCep(cepFormatted);
    await cepService.postCep(cepFormatted, logradouro, bairro, localidade, uf);

    res
      .status(201)
      .json({ cep: cepFormatted, logradouro, bairro, localidade, uf });
  },
};

module.exports = cepController;
