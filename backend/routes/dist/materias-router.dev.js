"use strict";

var express = require("express");

var _require = require("../controllers/materias-controllers"),
    getMaterias = _require.getMaterias,
    getSingleMateria = _require.getSingleMateria,
    createMateria = _require.createMateria,
    updateMateria = _require.updateMateria,
    deleteMateria = _require.deleteMateria;

var router = express.Router();
router.get("/", getMaterias);
router.get("/:nrc", getSingleMateria);
router.post("/", createMateria);
router.put("/:nrc", updateMateria);
router["delete"]("/:nrc", deleteMateria);
module.exports = router;