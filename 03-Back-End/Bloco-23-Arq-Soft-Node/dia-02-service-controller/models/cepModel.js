const db = require("./db");

const cepModel = {
  async get(cep) {
    const query = "SELECT * FROM ceps WHERE cep = ?";
    const [[rows]] = await db.execute(query, [cep]);
    return rows;
  },
  // async postCep(cep, logradouro, bairro, localidade, uf) {
  //   const query =
  //     "INSERT INTO ceps (cep, logradouro, bairro, localidade, uf) VALUES (?, ?, ?, ?, ?)";
  //   const [rows] = await db.execute(query, [
  //     cep,
  //     logradouro,
  //     bairro,
  //     localidade,
  //     uf,
  //   ]);
  //   return rows;
  // },
};

module.exports = cepModel;
