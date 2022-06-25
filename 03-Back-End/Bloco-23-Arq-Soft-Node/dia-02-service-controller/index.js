const express = require("express");
const bodyParser = require("body-parser");

const router = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(router);

const port = 3333;
app.listen(port, () => console.log(`App listening on port ${port}!`));
