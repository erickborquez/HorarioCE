const express = require('express');
const { getHorario, crearHorario, updateHorario, deleteHorario } = require('../controllers/horarios-controller');
const router = express.Router();

router.get("/get", getHorario);

router.post("/post", crearHorario);

router.put("/update/:id", updateHorario);

router.delete("/delete/:id", deleteHorario);

module.exports = router;
