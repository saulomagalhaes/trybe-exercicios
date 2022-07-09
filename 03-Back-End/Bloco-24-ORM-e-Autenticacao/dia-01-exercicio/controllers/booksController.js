const { booksService } = require("../services/booksService");

const booksController = {
  getAll: async (_req, res) => {
    const books = await booksService.getAll();
    res.status(200).json(books);
  },
  getById: async (req, res) => {
    const { id } = req.params;
    const book = await booksService.getById(id);
    res.status(200).json(book);
  },
  create: async (req, res) => {
    const { title, author, pageQuantity } = req.body;
    const book = await booksService.create(title, author, pageQuantity);
    res.status(201).json(book);
  },
  update: async (req, res) => {
    const { id } = req.params;
    const { title, author, pageQuantity } = req.body;
    const book = await booksService.update(id, title, author, pageQuantity);
    res.status(200).json(book);
  },
  remove: async (req, res) => {
    const { id } = req.params;
    await booksService.remove(id);
    res.sendStatus(204);
  },
};

module.exports = { booksController };
