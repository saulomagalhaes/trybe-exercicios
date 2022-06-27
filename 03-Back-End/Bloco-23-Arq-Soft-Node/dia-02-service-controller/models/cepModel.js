const db = require("./db");

const cepModel = {
  async get(cep) {
    const query = "SELECT * FROM ceps WHERE cep = ?";
    const [[rows]] = await db.execute(query, [cep]);
    return rows;
  },
  async exists(cep) {
    const query = "SELECT 1 FROM ceps WHERE cep = ?";
    const [[rows]] = await db.execute(query, [cep]);
    return rows;
  },
  async post(cep, logradouro, bairro, localidade, uf) {
    const query =
      "INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)";
    await db.execute(query, [cep, logradouro, bairro, localidade, uf]);
    return;
  },
};

module.exports = cepModel;
