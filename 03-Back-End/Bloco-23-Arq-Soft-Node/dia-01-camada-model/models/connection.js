const mysql = require("mysql2/promise");

const connection = mysql.createPool({
  user: "root",
  password: "password",
  port: 3306,
  host: "db",
  database: "model_example",
});

// Poderia ser assim:
// const connection = mysql.createPool("mysql://root:password@db:3306");

module.exports = connection;
