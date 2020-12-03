const express = require("express");
const {
  getMaterias,
  getSingleMateria,
  createMateria,
  updateMateria,
  deleteMateria,
} = require("../controllers/materias-controllers");
const router = express.Router();

//No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase

router.get("/", getMaterias);
router.get("/:nrc", getSingleMateria);

router.post("/", createMateria);

router.put("/:id", updateMateria);

router.delete("/:id", deleteMateria);

module.exports = router;
