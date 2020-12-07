"use strict";

var express = require("express");

var router = express.Router();

var _require = require("../controllers/consultaSiiau-controller.js"),
    getSiiauData = _require.getSiiauData,
    getSiiauData2 = _require.getSiiauData2;

router.get("/siiau/:centro/:codigo", getSiiauData);
router.get("/siiau", getSiiauData2);
module.exports = router;