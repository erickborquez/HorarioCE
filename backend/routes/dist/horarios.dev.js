"use strict";

var express = require('express');

var router = express.Router(); //No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase

var horarios = require("../models/horario");

router.get("/get", function _callee(req, res) {
  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            res.status(200).json({
              data: horarios,
              message: "Hola"
            });
          } catch (err) {
            res.status(400).json({
              message: "Some error occured, GET",
              err: err
            });
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
});
router.post("/post", function _callee2(req, res) {
  var horario;
  return regeneratorRuntime.async(function _callee2$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          try {
            horario = new horarios({
              id: "",
              materia: "Calculo"
            });
            horario.save().then(function (doc) {
              console.log(doc);
              res.status(200).json({
                data: horarios,
                message: ":)"
              });
            });
          } catch (err) {
            res.status(400).json({
              message: "Some error ocurred, POST",
              err: err
            });
          }

        case 1:
        case "end":
          return _context2.stop();
      }
    }
  });
});
module.exports = router;