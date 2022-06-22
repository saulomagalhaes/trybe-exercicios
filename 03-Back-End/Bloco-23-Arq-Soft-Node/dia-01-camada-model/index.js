const express = require("express");

const app = express();
const port = 3333;

const Author = require("./models/Author");
const Book = require("./models/Book");

app.get("/authors", async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json({ authors });
});

app.get("/books/search", async (req, res) => {
  const { author_id } = req.query;

  const books = await Book.getByAuthorId(author_id);

  res.status(200).json({ books });
});

app.get("/books", async (req, res) => {
  const books = await Book.getAll();

  res.status(200).json({ books });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
