const express = require('express')
const router = express.Router();


//No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase
let horarios = require("../models/horario");

router.get("/get", async (req, res) => {
  try {
    res.status(200).json({
      data: horarios,
      message: "Hola",
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured, GET",
      err,
    });
  }
});


router.post("/post", async (req, res) => {
  try{
    const horario = new horarios({id: "", materia: "Calculo"})
    horario.save().then(doc => {
      console.log(doc)
      res.status(200).json({
        data: horarios,
        message: ":)",
      });
    })
  } catch(err){
    res.status(400).json({
      message: "Some error ocurred, POST",
      err,
    });
  }
});


module.exports = router;
