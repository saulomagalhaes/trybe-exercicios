const express = require("express");
const Author = require("../models/Author");

const router = express.Router();

router.get("/:id", async (req, res) => {
  const { id } = req.params;

  const author = await Author.findById(id);

  if (!author) return res.status(404).json({ message: "Not found" });

  res.status(200).json(author);
});

router.get("/", async (_req, res) => {
  const authors = await Author.getAll();

  res.status(200).json(authors);
});

router.post("/", async (req, res) => {
  const { first_name, middle_name, last_name } = req.body;

  if (!Author.isValid(first_name, middle_name, last_name)) {
    return res.status(400).json({ message: "Dados inválidos" });
  }

  await Author.createAuthor(first_name, middle_name, last_name);

  res.status(201).json({ message: "Autor criado com sucesso! " });
});

module.exports = router;
