const express = require('express');
const { getHorarios, crearHorario, updateHorario, deleteHorario, getSingleHorario } = require('../controllers/horarios-controller');
const router = express.Router();

router.get("/", getHorarios);
router.get("/:id", getSingleHorario);

router.post("/", crearHorario);

router.put("/:id", updateHorario);

router.delete("/:id", deleteHorario);

module.exports = router;
