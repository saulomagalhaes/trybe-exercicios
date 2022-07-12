require('dotenv').config();
const express = require('express');
require('express-async-errors');
const cors = require('cors');
const bodyParser = require('body-parser');

const { PORT } = process.env;

const routes = require('./routes/index');
const errorHandler = require('./middlewares/error');

const app = express();

app.use(
  cors({
    origin: `http://localhost:${PORT}`,
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: ['Authorization'],
  }),
);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}`);
});
