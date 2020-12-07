"use strict";

var axios = require("axios");

var fs = require("fs");

var _require = require("../shared/centros.json"),
    centros = _require.centros;

var SIIAU_URL = "http://consulta.siiau.udg.mx/wco/scpcata.cataxcu?planp=Y&cup=";
var SIIAU_URL_END = "&ordenp=1&mostrarp=5&tipop=D";
var regExp = /"[A-Z].{4}","[A-Z]+,?\s[A-Z ]*"/g;
var regClave = /"([A-Z].{4})"/g;
var regNombre = /"([A-Z]+,?\s[A-Z ]*)"/g;

var getOferta = function getOferta(centro) {
  var url, data, res;
  return regeneratorRuntime.async(function getOferta$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = SIIAU_URL + centros[centro] + SIIAU_URL_END;
          _context.prev = 1;
          _context.next = 4;
          return regeneratorRuntime.awrap(axios.get(url));

        case 4:
          res = _context.sent;
          data = res.data;
          _context.next = 11;
          break;

        case 8:
          _context.prev = 8;
          _context.t0 = _context["catch"](1);
          throw new Error(_context.t0);

        case 11:
          return _context.abrupt("return", data);

        case 12:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[1, 8]]);
};

var formatOferta = function formatOferta(oferta) {
  var matched = oferta.match(regExp);
  var materias = [];
  console.log(matched.length);
  matched.forEach(function (materia) {
    var clave = regClave.exec(materia);
    var nombre = regNombre.exec(materia);
    if (clave && nombre) materias.push({
      clave: clave[1],
      nombre: nombre[1]
    });
  });
  return materias;
};

var saveOferta = function saveOferta(centro, materias) {
  fs.writeFileSync("shared/materias-".concat(centro, ".json"), JSON.stringify({
    materias: materias
  }, null, 4));
};

var _updateCenter = function _updateCenter(centro, oferta) {
  var formatedOferta = formatOferta(oferta);
  saveOferta(centro, formatedOferta);
  return formatedOferta;
};

var updateCenter = function updateCenter(req, res) {
  var centro, oferta, materias;
  return regeneratorRuntime.async(function updateCenter$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          centro = req.params.centro;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(getOferta(centro));

        case 4:
          oferta = _context2.sent;
          materias = _updateCenter(centro, oferta);
          res.status(200).json({
            data: materias
          });
          _context2.next = 12;
          break;

        case 9:
          _context2.prev = 9;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: "Hubo un error :(",
            error: _context2.t0
          });

        case 12:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 9]]);
};

exports.updateCenter = updateCenter;