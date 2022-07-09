const express = require('express');
require('express-async-errors');
const router = require('./routes/index.js');
const {errorHandler} = require('./middlewares/errorHandler.js');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(router);
app.use(errorHandler);

app.listen(PORT, () => console.log(`Ouvindo na porta ${PORT}!`));