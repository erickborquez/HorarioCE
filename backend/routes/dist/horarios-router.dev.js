"use strict";

var express = require('express');

var _require = require('../controllers/horarios-controller'),
    getHorario = _require.getHorario,
    crearHorario = _require.crearHorario,
    updateHorario = _require.updateHorario,
    deleteHorario = _require.deleteHorario;

var router = express.Router();
router.get("/get", getHorario);
router.post("/post", crearHorario);
router.put("/update/:id", updateHorario);
router["delete"]("/delete/:id", deleteHorario);
module.exports = router;