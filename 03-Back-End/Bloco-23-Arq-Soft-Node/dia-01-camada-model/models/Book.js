const connection = require("./connection");

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT title FROM books WHERE author_id = ${id}`
  );

  return books;
};

const getAll = async () => {
  const [books] = await connection.execute("SELECT title FROM books;");

  return books;
};

module.exports = { getAll, getByAuthorId };
