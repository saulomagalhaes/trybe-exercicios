const express = require("express");
const bodyParser = require("body-parser");
const productController = require("./controllers/productController");

const app = express();
app.use(express.json());

app.use(bodyParser.urlencoded({ extended: false }));

app.use("/products", productController);

app.listen(3333, () => {
  console.log("App listening on port 3333!");
});
