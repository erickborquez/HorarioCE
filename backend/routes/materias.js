const express = require('express')
const router = express.Router();


//No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase
let materias = require("../models/materia");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: materias,
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err,
    });
  }
});


module.exports = router;
