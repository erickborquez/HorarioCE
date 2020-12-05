const express = require("express");
const router = express.Router();
const axios = require("axios");
const fs = require("fs");

//No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase
let materias = [];
let materias2 = [];
let claves = [];
let regEx = /"[A-Z].{4}","[A-Z]+,?\s[A-Z ]*"/g;
let regEx2 = /"[A-Z].{4}"/g;
let regEx3 = /"[A-Z]+,?\s[A-Z ]*"/g;

router.get("/siiau/:centro", async (req, res) => {
  const { centro } = req.params
  const API_URL =
  "http://consulta.siiau.udg.mx/wco/scpcata.cataxcu?planp=Y&cup="+centro+"&ordenp=1&mostrarp=5&tipop=D";
  try {
    const { data } = await axios.get(API_URL);
    res.status(200).json({
      data,
    });
    materias2 = data.match(regEx);
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Hubo un error :(",
      error: e,
    });
  }
  for(let i = 0; i < materias2.length; i++){
      claves = claves.concat(materias2[i].match(regEx2));
      materias = materias.concat(materias2[i].match(regEx3));
  }
  const Materias = {
    materias,
    claves
  }
  switch(centro){
    case 'A':
      fs.writeFileSync("files/Materias-CUAAD-A.json", JSON.stringify(Materias));
      break;
    case 'B':
      fs.writeFileSync("files/Materias-CUCBA-B.json", JSON.stringify(Materias));
      break;
    case 'C':
      fs.writeFileSync("files/Materias-CUCEA-C.json", JSON.stringify(Materias));
      break;
    case 'D':
      fs.writeFileSync("files/Materias-CUCEI-D.json", JSON.stringify(Materias));
      break;
    case 'E':
      fs.writeFileSync("files/Materias-CUCS-E.json", JSON.stringify(Materias));
      break;
    case 'F':
      fs.writeFileSync("files/Materias-CUCHSH-F.json", JSON.stringify(Materias));
      break;
    case 'G':
      fs.writeFileSync("files/Materias-CUALTOS-G.json", JSON.stringify(Materias));
      break;
    case 'H':
      fs.writeFileSync("files/Materias-CUCIENEGA-H.json", JSON.stringify(Materias));
      break;
    case 'I':
      fs.writeFileSync("files/Materias-CUCOSTA-I.json", JSON.stringify(Materias));
      break;
    case 'J':
      fs.writeFileSync("files/Materias-CUCSUR-J.json", JSON.stringify(Materias));
      break;
    case 'K':
      fs.writeFileSync("files/Materias-CUVALLES-K.json", JSON.stringify(Materias));
      break;
    case 'L':
      fs.writeFileSync("files/Materias-CUNORTE-L.json", JSON.stringify(Materias));
      break;
    case 'N':
      fs.writeFileSync("files/Materias-CULAGOS-N.json", JSON.stringify(Materias));
      break;
  }
  
});

module.exports = router;
