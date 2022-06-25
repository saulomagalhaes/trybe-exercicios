const express = require("express");
const router = express.Router();

const { validateCep } = require("../middlewares/validateCep");

const cepController = require("../controllers/cepController");

router.get("/:cep", validateCep, cepController.getCep);

module.exports = router;
