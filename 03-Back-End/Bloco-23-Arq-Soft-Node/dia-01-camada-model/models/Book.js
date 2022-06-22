const connection = require("./connection");
const Author = require("./Author");

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

const isValid = (title, author_id) => {
  if (title === "" || title.length < 3) return false;
  if (!author_id || typeof author_id !== "number") return false;
  if (!Author.findById(author_id)) return false;

  return true;
};

const createBook = async (title, author_id) => {
  const query = "INSERT INTO books (title, author_id) VALUES (?, ?)";

  await connection.execute(query, [title, author_id]);
};

module.exports = { getAll, getByAuthorId, getById, isValid, createBook };
