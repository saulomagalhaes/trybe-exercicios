const connection = require("./connection");

const getAll = async () => {
  const [books] = await connection.execute("SELECT title FROM books;");

  return books;
};

const getByAuthorId = async (id) => {
  const [books] = await connection.execute(
    `SELECT title FROM books WHERE author_id = ?`,
    [id]
  );

  return books;
};

const getById = async (id) => {
  const [books] = await connection.execute(
    `SELECT title FROM books WHERE id = ?`,
    [id]
  );

  return books[0];
};

module.exports = { getAll, getByAuthorId, getById };
