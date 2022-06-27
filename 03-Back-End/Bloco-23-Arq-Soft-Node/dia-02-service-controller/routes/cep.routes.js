const express = require("express");
const router = express.Router();

const cepController = require("../controllers/cepController");

router.get("/:cep", cepController.getCep);
router.post("/", cepController.postCep);

module.exports = router;
