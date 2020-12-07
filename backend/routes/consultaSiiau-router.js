const express = require("express");
const router = express.Router();

const { getSiiauData } = require("../controllers/consultaSiiau-controller.js");

router.get("/:centro/:codigo", getSiiauData);

module.exports = router;
