const db = require("./db");

const cepModel = {
  async getCep(cep) {
    const query = "SELECT * FROM ceps WHERE cep = ?";
    const [rows] = await db.execute(query, [cep]);
    return rows;
  },
};

module.exports = cepModel;
