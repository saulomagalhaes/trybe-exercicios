const express = require("express");
const router = express.Router();

const pingRoute = require("./ping.routes");
const cepRoute = require("./cep.routes");

router.use("/ping", pingRoute);
router.use("/cep", cepRoute);

module.exports = router;
