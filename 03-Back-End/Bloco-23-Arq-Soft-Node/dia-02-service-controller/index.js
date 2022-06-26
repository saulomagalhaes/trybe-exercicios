const express = require("express");
require("express-async-errors");

const bodyParser = require("body-parser");

const router = require("./routes");

const app = express();

app.use(bodyParser.json());
app.use(router);

app.use((err, _req, res, _next) => {
  const { name, message } = err;
  switch (name) {
    case "ValidationError":
      res.status(400).json({ message });
      break;
    case "NotFoundError":
      res.status(404).json({ message });
      break;
    default:
      console.warn(err);
      res.sendStatus(500);
  }
});

const port = 3333;
app.listen(port, () => console.log(`App listening on port ${port}!`));
