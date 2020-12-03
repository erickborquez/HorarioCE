const express = require("express");
const {
  getMaterias,
  getSingleMateria,
  createMateria,
  updateMateria,
  deleteMateria,
} = require("../controllers/materias-controllers");
const router = express.Router();


router.get("/", getMaterias);
router.get("/:nrc", getSingleMateria);

router.post("/", createMateria);

router.put("/:nrc", updateMateria);

router.delete("/:nrc", deleteMateria);

module.exports = router;
