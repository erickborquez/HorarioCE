const express = require('express')
const router = express.Router();


//No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase
let horarios = require("../models/materia");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: horarios,
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err,
    });
  }
});


module.exports = router;
