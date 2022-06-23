const connection = require("./connection");

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

module.exports = { createUser };
