const db = require("./db");

const ProductModel = {
  async add(name, brand) {
    try {
      const [result] = await db.query(
        "INSERT INTO products (name, brand) VALUES (?, ?);",
        [name, brand]
      );

      return { id: result.insertId, name, brand };
    } catch (err) {
      console.error(err);
      return process.exit(1);
    }
  },
  async getAll() {
    try {
      const [rows] = await db.query("SELECT * FROM products");
      return rows;
    } catch (err) {
      console.error(err);
      return process.exit(1);
    }
  },
  async getById(id) {
    try {
      const [result] = await db.query("SELECT * FROM products WHERE id = ?", [
        id,
      ]);
      if (!result.length) return null;
      return result[0];
    } catch (err) {
      console.error(err);
      return process.exit(1);
    }
  },
  async update(id, name, brand) {
    try {
      const [result] = await db.query(
        "UPDATE products SET name = ?, brand = ? WHERE id = ?",
        [name, brand, id]
      );
      return { id: Number(id), name, brand };
    } catch (err) {
      console.error(err);
      return process.exit(1);
    }
  },
  async exclude(id) {
    try {
      const product = await this.getById(id);
      if (!product) return {};
      await db.query("DELETE FROM products WHERE id = ?", [id]);
    } catch (err) {
      console.error(err);
      return process.exit(1);
    }
  },
};

module.exports = ProductModel;
