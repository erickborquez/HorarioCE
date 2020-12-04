const express = require("express");
const router = express.Router();
const axios = require("axios");

//No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase

const API_URL =
  "http://consulta.siiau.udg.mx/wco/scpcata.cataxcu?planp=Y&cup=A&ordenp=1&mostrarp=5&tipop=D";
router.get("/siiau", async (req, res) => {
  try {
    const { data } = await axios.get(API_URL);
    res.status(200).json({
      data,
    });
  } catch (e) {
    console.log(e);
    res.status(500).json({
      message: "Hubo un error :(",
      error: e,
    });
  }
});

module.exports = router;
