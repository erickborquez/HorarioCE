"use strict";

var HttpError = require("../models/http-error");

var Materia = require("../models/materia");

var getMaterias = function getMaterias(req, res) {
  var materias;
  return regeneratorRuntime.async(function getMaterias$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Materia.find());

        case 3:
          materias = _context.sent;
          _context.next = 9;
          break;

        case 6:
          _context.prev = 6;
          _context.t0 = _context["catch"](0);
          res.status(500).json({
            message: "Fetching error ocurred, please try again later",
            err: _context.t0
          });

        case 9:
          res.json({
            data: {
              materias: materias.map(function (materia) {
                return materia.toObject({
                  getters: true
                });
              })
            }
          });

        case 10:
        case "end":
          return _context.stop();
      }
    }
  }, null, null, [[0, 6]]);
};

var getSingleMateria = function getSingleMateria(req, res) {
  var nrc, materia;
  return regeneratorRuntime.async(function getSingleMateria$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          nrc = req.params.nrc;
          console.log(req.params);
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(Materia.findOne({
            nrc: nrc
          }));

        case 5:
          materia = _context2.sent;
          _context2.next = 11;
          break;

        case 8:
          _context2.prev = 8;
          _context2.t0 = _context2["catch"](2);
          res.status(500).json({
            message: "Fetching error ocurred, please try again later",
            err: _context2.t0
          });

        case 11:
          console.log(materia);
          if (materia) res.json({
            data: materia.toObject({
              getters: true
            })
          });

        case 13:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 8]]);
};

var createMateria = function createMateria(req, res, next) {
  var _req$body, name, nrc, clave, professor, date, existingMateria, error, _error, nuevaMateria;

  return regeneratorRuntime.async(function createMateria$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, nrc = _req$body.nrc, clave = _req$body.clave, professor = _req$body.professor, date = _req$body.date;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Materia.findOne({
            nrc: nrc
          }));

        case 4:
          existingMateria = _context3.sent;
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](1);
          error = new HttpError("Internal error, please try again later", 500);
          return _context3.abrupt("return", next(error));

        case 11:
          if (!existingMateria) {
            _context3.next = 14;
            break;
          }

          _error = new HttpError("Materia exists already, please update instead", 402);
          return _context3.abrupt("return", next(_error));

        case 14:
          nuevaMateria = new Materia({
            name: name,
            nrc: nrc,
            clave: clave,
            date: date,
            professor: professor
          });
          _context3.prev = 15;
          _context3.next = 18;
          return regeneratorRuntime.awrap(nuevaMateria.save());

        case 18:
          res.status(200).json({
            data: {
              materia: nuevaMateria.toObject({
                getters: true
              })
            }
          });
          _context3.next = 24;
          break;

        case 21:
          _context3.prev = 21;
          _context3.t1 = _context3["catch"](15);
          res.status(400).json({
            message: "Some error occured - POST",
            err: _context3.t1
          });

        case 24:
        case "end":
          return _context3.stop();
      }
    }
  }, null, null, [[1, 7], [15, 21]]);
};

var updateMateria = function updateMateria(req, res, next) {
  var nrc, materias, property, error;
  return regeneratorRuntime.async(function updateMateria$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          nrc = req.params.nrc;
          console.log(req.params);
          _context4.prev = 2;
          _context4.next = 5;
          return regeneratorRuntime.awrap(Materia.findOne({
            nrc: nrc
          }));

        case 5:
          materias = _context4.sent;
          _context4.next = 11;
          break;

        case 8:
          _context4.prev = 8;
          _context4.t0 = _context4["catch"](2);
          res.status(500).json({
            message: "Fetching error ocurred, please try again later",
            err: _context4.t0
          });

        case 11:
          for (property in req.body) {
            console.log(req.body[property]);
            materias[property] = req.body[property];
          }

          _context4.prev = 12;
          _context4.next = 15;
          return regeneratorRuntime.awrap(materias.save());

        case 15:
          res.status(200).json({
            message: "Materia was updated"
          });
          _context4.next = 23;
          break;

        case 18:
          _context4.prev = 18;
          _context4.t1 = _context4["catch"](12);
          console.log(_context4.t1);
          error = new HttpError('Something went wrong, please try again later.', 500);
          return _context4.abrupt("return", next(error));

        case 23:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[2, 8], [12, 18]]);
};

var deleteMateria = function deleteMateria(req, res) {
  var nrc;
  return regeneratorRuntime.async(function deleteMateria$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          nrc = req.params.nrc;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Materia.findOneAndDelete({
            nrc: nrc
          }));

        case 4:
          res.status(200).json({
            message: "Materia was deleted"
          });
          _context5.next = 10;
          break;

        case 7:
          _context5.prev = 7;
          _context5.t0 = _context5["catch"](1);
          res.status(500).json({
            message: "Fetching error ocurred, please try again later",
            err: _context5.t0
          });

        case 10:
        case "end":
          return _context5.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

exports.getMaterias = getMaterias;
exports.getSingleMateria = getSingleMateria;
exports.createMateria = createMateria;
exports.updateMateria = updateMateria;
exports.deleteMateria = deleteMateria;