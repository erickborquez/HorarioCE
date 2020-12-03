"use strict";

var express = require('express');

var _require = require('../controllers/horarios-controller'),
    getHorarios = _require.getHorarios,
    crearHorario = _require.crearHorario,
    updateHorario = _require.updateHorario,
    deleteHorario = _require.deleteHorario,
    getSingleHorario = _require.getSingleHorario;

var router = express.Router();
router.get("/", getHorarios);
router.get("/:id", getSingleHorario);
router.post("/", crearHorario);
router.put("/:id", updateHorario);
router["delete"]("/:id", deleteHorario);
module.exports = router;