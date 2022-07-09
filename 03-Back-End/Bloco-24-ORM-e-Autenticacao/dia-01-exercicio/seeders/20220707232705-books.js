"use strict";

module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.bulkInsert(
      "books",
      [
        {
          title: "The Lord of the Rings",
          author: "J.R.R. Tolkien",
          page_quantity: 1254,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
        {
          title: "The Hobbit",
          author: "J.R.R. Tolkien",
          page_quantity: 576,
          created_at: Sequelize.literal("CURRENT_TIMESTAMP"),
          updated_at: Sequelize.literal("CURRENT_TIMESTAMP"),
        },
      ],
      {}
    );
  },

  async down(queryInterface, _Sequelize) {
    await queryInterface.bulkDelete("books", null, {});
  },
};
