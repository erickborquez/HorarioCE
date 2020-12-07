const express = require("express");
const router = express.Router();

const { getSiiauData, getSiiauData2 } = require("../controllers/consultaSiiau-controller.js");

router.get("/siiau/:centro/:codigo", getSiiauData);
router.get("/siiau", getSiiauData2);

module.exports = router;