const express = require("express");

const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");

const app = express();
const port = 3333;
app.use(express.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
