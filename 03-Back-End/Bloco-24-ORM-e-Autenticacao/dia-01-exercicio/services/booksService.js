const { Book } = require("../models");
const { throwNotFoundError } = require("../utils/NotFoundError");

const booksService = {
  getAll: async () => {
    const books = await Book.findAll();
    return books;
  },
  getById: async (id) => {
    const book = await Book.findByPk(id);
    if (!book) {
      throwNotFoundError("Book not found");
    }
    return book;
  },
  create: async (title, author, pageQuantity) => {
    const book = await Book.create({
      title,
      author,
      pageQuantity,
    });
    return book;
  },
  update: async (id, title, author, pageQuantity) => {
    const [book] = await Book.update(
      { title, author, pageQuantity },
      { where: { id } }
    );
    if (book !== 1) throwNotFoundError("Book not found");

    return { message: "Book updated!" };
  },
  remove: async (id) => {
    const deleteBook = await Book.destroy({ where: { id } });
    if (deleteBook !== 1) throwNotFoundError("Book not found");
    return true;
  },
};
module.exports = { booksService };
