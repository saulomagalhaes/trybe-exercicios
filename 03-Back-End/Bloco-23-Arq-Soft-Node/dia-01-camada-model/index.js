const express = require("express");

const bookRouter = require("./routes/bookRouter");
const authorRouter = require("./routes/authorRouter");
const userRouter = require("./routes/userRouter");

const app = express();
const port = 3333;
app.use(express.json());

app.use("/books", bookRouter);
app.use("/authors", authorRouter);
app.use("/user", userRouter);

app.use((err, _req, res, _next) => {
  res.status(500).json({ error: `O campo: ${err.message}` });
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
