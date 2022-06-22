const express = require("express");
const Book = require("../models/Book");

const router = express.Router();

router.get("/search", async (req, res) => {
  const { author_id } = req.query;

  const books = await Book.getByAuthorId(author_id);

  if (books.length < 1)
    return res.status(404).json({ message: "No books found" });

  res.status(200).json(books);
});

router.get("/:id", async (req, res) => {
  const { id } = req.params;
  const book = await Book.getById(id);

  if (!book) return res.status(404).json({ message: "Not found" });

  res.status(200).json(book);
});

router.get("/", async (_req, res) => {
  const books = await Book.getAll();

  res.status(200).json(books);
});

router.post("/", async (req, res) => {
  const { title, author_id } = req.body;

  if (!Book.isValid(title, author_id))
    return res.status(404).json({ message: "Dados inválidos" });

  await Book.createBook(title, author_id);

  res.status(201).json({ message: "Livro criado com sucesso!" });
});

module.exports = router;
