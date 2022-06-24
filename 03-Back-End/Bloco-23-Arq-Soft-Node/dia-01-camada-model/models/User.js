const connection = require("./connection");

const getUser = async (id) => {
  const query = "SELECT * FROM user WHERE id = ?";

  const [result] = await connection.execute(query, [id]);

  return result;
};

const getAllUser = async () => {
  const query = "SELECT * FROM user";

  const [result] = await connection.execute(query);

  return result;
};

const createUser = async (firstName, lastName, email, password) => {
  const query =
    "INSERT INTO user (first_name, last_name, email, password) VALUES(?, ?, ?, ?)";

  const [result] = await connection.execute(query, [
    firstName,
    lastName,
    email,
    password,
  ]);

  return { id: result.insertId, firstName, lastName, email };
};

module.exports = { createUser, getAllUser, getUser };
