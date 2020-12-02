"use strict";

var express = require('express');

var _require = require('../controllers/materias-controllers'),
    getMaterias = _require.getMaterias,
    createNewMatter = _require.createNewMatter,
    updateMatter = _require.updateMatter,
    deleteMatter = _require.deleteMatter;

var router = express.Router(); //No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase

router.get("/get", getMaterias);
router.post("/post", createNewMatter);
router.put("/update/:id", updateMatter);
router["delete"]("/delete/:id", deleteMatter);
module.exports = router;