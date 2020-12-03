const express = require('express');
const { getMaterias, createNewMatter, updateMatter, deleteMatter } = require('../controllers/materias-controllers');
const router = express.Router();


//No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase



router.get("/get", getMaterias);

router.post("/post", createNewMatter);

router.put("/update/:id", updateMatter);

router.delete("/delete/:id", deleteMatter)

module.exports = router;
