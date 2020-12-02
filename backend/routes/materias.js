const express = require('express')
const router = express.Router();


//No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase
let materias = require("../models/materia");


router.get("/get", async (req, res) => {
  try {
    res.status(200).json({
      data: materias,
      message: "materias xd"
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured - GET",
      err,
    });
  }
});

router.post("/post", async (req, res) => {
  try{
    const materia = new materias(
      {name: "Calculo", 
      nrc: "43562", 
      clave: "I5353", 
      date: ["12","32","2020"], 
      professor: "Yo"})

    materia.save().then(doc => {
      console.log(doc)
      res.status(200).json({
        data: materia,
        message: ":)",
      });
    })
  } catch(err){
    res.status(400).json({
      message: "Some error ocurred - PUT",
      err,
    });
  }
});

module.exports = router;
