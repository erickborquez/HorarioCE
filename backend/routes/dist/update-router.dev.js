"use strict";

var express = require("express");

var router = express.Router();

var axios = require("axios");

var fs = require("fs"); //No estaba seguro de si era necesario usar el get "de prueba" aqui, asi que lo pase


var materias = [];
var materias2 = [];
var claves = [];
var regEx = /"[A-Z].{4}","[A-Z]+,?\s[A-Z ]*"/g;
var regEx2 = /"[A-Z].{4}"/g;
var regEx3 = /"[A-Z]+,?\s[A-Z ]*"/g;
router.get("/siiau/:centro", function _callee(req, res) {
  var centro, API_URL, _ref, data, i, Materias;

  return regeneratorRuntime.async(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          centro = req.params.centro;
          API_URL = "http://consulta.siiau.udg.mx/wco/scpcata.cataxcu?planp=Y&cup=" + centro + "&ordenp=1&mostrarp=5&tipop=D";
          _context.prev = 2;
          _context.next = 5;
          return regeneratorRuntime.awrap(axios.get(API_URL));

        case 5:
          _ref = _context.sent;
          data = _ref.data;
          res.status(200).json({
            data: data
          });
          materias2 = data.match(regEx);
          _context.next = 15;
          break;

        case 11:
          _context.prev = 11;
          _context.t0 = _context["catch"](2);
          console.log(_context.t0);
          res.status(500).json({
            message: "Hubo un error :(",
            error: _context.t0
          });

        case 15:
          for (i = 0; i < materias2.length; i++) {
            claves = claves.concat(materias2[i].match(regEx2));
            materias = materias.concat(materias2[i].match(regEx3));
          }

          Materias = {
            materias: materias,
            claves: claves
          };
          _context.t1 = centro;
          _context.next = _context.t1 === 'A' ? 20 : _context.t1 === 'B' ? 22 : _context.t1 === 'C' ? 24 : _context.t1 === 'D' ? 26 : _context.t1 === 'E' ? 28 : _context.t1 === 'F' ? 30 : _context.t1 === 'G' ? 32 : _context.t1 === 'H' ? 34 : _context.t1 === 'I' ? 36 : _context.t1 === 'J' ? 38 : _context.t1 === 'K' ? 40 : _context.t1 === 'L' ? 42 : _context.t1 === 'N' ? 44 : 46;
          break;

        case 20:
          fs.writeFileSync("files/Materias-CUAAD-A.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 22:
          fs.writeFileSync("files/Materias-CUCBA-B.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 24:
          fs.writeFileSync("files/Materias-CUCEA-C.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 26:
          fs.writeFileSync("files/Materias-CUCEI-D.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 28:
          fs.writeFileSync("files/Materias-CUCS-E.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 30:
          fs.writeFileSync("files/Materias-CUCHSH-F.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 32:
          fs.writeFileSync("files/Materias-CUALTOS-G.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 34:
          fs.writeFileSync("files/Materias-CUCIENEGA-H.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 36:
          fs.writeFileSync("files/Materias-CUCOSTA-I.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 38:
          fs.writeFileSync("files/Materias-CUCSUR-J.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 40:
          fs.writeFileSync("files/Materias-CUVALLES-K.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 42:
          fs.writeFileSync("files/Materias-CUNORTE-L.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 44:
          fs.writeFileSync("files/Materias-CULAGOS-N.json", JSON.stringify(Materias));
          return _context.abrupt("break", 46);

        case 46:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[2, 11]]);
});
module.exports = router;