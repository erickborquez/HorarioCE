"use strict";

var axios = require("axios");

var fs = require("fs");

var _require = require("../shared/centros.json"),
    centros = _require.centros;

var SIIAU_URL = "http://consulta.siiau.udg.mx/wco/sspseca.consulta_oferta?ciclop=202110&cup=";
var SIIAU_URL2 = "http://consulta.siiau.udg.mx/wco/sspseca.consulta_oferta?ciclop=202110&cup=D&crsep=I7020";
var regGeneral = /.+/g;
var regExp = /tddatos>[0-9]{5,6}.{1,1100}tdprofesor">[A-Z ]+,[A-Z ]{1,50}/g;
var regNRC = /tddatos>([0-9]{5,6})</g;
var regMateria = />([A-Z]+,?\s[A-Z ]*)</g;
var regSeccion = />([A-Z][0-9]{2})</g;
var regHora = /([0-9]{4}-[0-9]{4})/g;
var regDia = />([.LMIJVS ]{11})</g;
var regProf = />([A-Z ]+,[A-Z ]{1,50})/g;

var getOferta = function getOferta(centro, codigo) {
  var url, data, res;
  return regeneratorRuntime.async(function getOferta$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          url = SIIAU_URL + centros[centro] + "&crsep=" + codigo;
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

var formatOferta = function formatOferta(oferta, codigo) {
  var matched = oferta.match(regGeneral);
  var matchedStr = matched.toString();
  var materiaCompleta = matchedStr.match(regExp);
  var materiasSiiau = [];
  materiaCompleta.forEach(function (materia) {
    var nrc = materia.match(regNRC);
    var nombre = materia.match(regMateria);
    var seccion = materia.match(regSeccion);
    var horas = materia.match(regHora);

    if (horas) {
      var dias = materia.match(regDia);
      var professor = materia.match(regProf);
      var dates = [];
      var diaClase = "";
      dias.forEach(function (dia) {
        for (var i = 1; i < dia.length; i += 2) {
          switch (dia[i]) {
            case "L":
              diaClase = "LUNES";
              break;

            case "M":
              diaClase = "MARTES";
              break;

            case "I":
              diaClase = "MIERCOLES";
              break;

            case "J":
              diaClase = "JUEVES";
              break;

            case "V":
              diaClase = "VIERNES";
              break;

            case "S":
              diaClase = "SABADO";
              break;
          }

          horas.forEach(function (hora) {
            if (diaClase && hora) dates.push({
              day: diaClase,
              start: hora.slice(0, 4),
              end: hora.slice(5, 9)
            });
          });
          diaClase = "";
        }
      });

      if (nrc && nombre && seccion && dates && professor && codigo) {
        nrc = nrc.toString();
        nrc = nrc.replace("tddatos>", "");
        nrc = nrc.replace("<", "");
        nombre = nombre.toString();
        nombre = nombre.replace(">", "");
        nombre = nombre.replace("<", "");
        seccion = seccion.toString();
        seccion = seccion.replace(">", "");
        seccion = seccion.replace("<", "");
        professor = professor.toString();
        professor = professor.replace(">", "");
        materiasSiiau.push({
          name: nombre,
          nrc: nrc,
          seccion: seccion,
          clave: codigo,
          dates: dates,
          professor: professor
        });
      }
    }
  });
  return materiasSiiau;
};

var saveSiiauOferta = function saveSiiauOferta(centro, materias) {
  fs.writeFileSync("shared/Siiau-materias-".concat(centro, ".json"), JSON.stringify({
    materias: materias
  }, null, 4));
};

var _getSiiauData = function _getSiiauData(centro, oferta, codigo) {
  var formatedOferta = formatOferta(oferta, codigo);
  console.log("afwafwa");
  saveSiiauOferta(centro, formatedOferta);
  return formatedOferta;
};

var getSiiauData = function getSiiauData(req, res) {
  var _req$params, centro, codigo, oferta, materias;

  return regeneratorRuntime.async(function getSiiauData$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$params = req.params, centro = _req$params.centro, codigo = _req$params.codigo;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(getOferta(centro, codigo));

        case 4:
          oferta = _context2.sent;
          materias = _getSiiauData(centro, oferta, codigo);
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

var getSiiauData2 = function getSiiauData2(req, res) {
  var _ref, data;

  return regeneratorRuntime.async(function getSiiauData2$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _context3.prev = 0;
          _context3.next = 3;
          return regeneratorRuntime.awrap(axios.get(SIIAU_URL2));

        case 3:
          _ref = _context3.sent;
          data = _ref.data;
          res.status(200).json({
            data: data
          });
          _context3.next = 11;
          break;

        case 8:
          _context3.prev = 8;
          _context3.t0 = _context3["catch"](0);
          res.status(500).json({
            message: "Hubo un error :(",
            error: _context3.t0
          });

        case 11:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[0, 8]]);
};

exports.getSiiauData = getSiiauData;
exports.getSiiauData2 = getSiiauData2;