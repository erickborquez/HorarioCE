"use strict";

var HttpError = require('../models/http-error');

var Horarios = require("../models/horario");

var horario = require('../models/horario');

var getHorarios = function getHorarios(req, res) {
  var horarios;
  return regeneratorRuntime.async(function getHorarios$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.prev = 0;
          _context.next = 3;
          return regeneratorRuntime.awrap(Horarios.find());

        case 3:
          horarios = _context.sent;
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
              materias: horarios.map(function (horario) {
                return horario.toObject({
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

var getSingleHorario = function getSingleHorario(req, res) {
  var id, horarios;
  return regeneratorRuntime.async(function getSingleHorario$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          id = req.params.id;
          _context2.prev = 1;
          _context2.next = 4;
          return regeneratorRuntime.awrap(Horarios.findOne({
            id: id
          }));

        case 4:
          horarios = _context2.sent;
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](1);
          res.status(500).json({
            message: "Fetching error ocurred, please try again later",
            err: _context2.t0
          });

        case 10:
          if (horarios) {
            res.json({
              data: horarios.toObject({
                getters: true
              })
            });
          }

        case 11:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[1, 7]]);
};

var crearHorario = function crearHorario(req, res, next) {
  var _req$body, id, materias, existingHorario, error, _error, nuevoHorario;

  return regeneratorRuntime.async(function crearHorario$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          _req$body = req.body, id = _req$body.id, materias = _req$body.materias;
          _context3.prev = 1;
          _context3.next = 4;
          return regeneratorRuntime.awrap(Horarios.findOne({
            id: id
          }));

        case 4:
          existingHorario = _context3.sent;
          _context3.next = 11;
          break;

        case 7:
          _context3.prev = 7;
          _context3.t0 = _context3["catch"](1);
          error = new HttpError("Internal error, please try again later", 500);
          return _context3.abrupt("return", next(error));

        case 11:
          if (!existingHorario) {
            _context3.next = 14;
            break;
          }

          _error = new HttpError("Horario exists already, please update instead", 402);
          return _context3.abrupt("return", next(_error));

        case 14:
          nuevoHorario = new Horarios({
            id: id,
            materias: materias
          });
          _context3.prev = 15;
          _context3.next = 18;
          return regeneratorRuntime.awrap(nuevoHorario.save());

        case 18:
          res.status(200).json({
            data: {
              horario: nuevoHorario.toObject({
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

var updateHorario = function updateHorario(req, res, next) {
  var id, horarios, property, error;
  return regeneratorRuntime.async(function updateHorario$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          _context4.prev = 1;
          _context4.next = 4;
          return regeneratorRuntime.awrap(Horarios.findOne({
            id: id
          }));

        case 4:
          horarios = _context4.sent;
          _context4.next = 10;
          break;

        case 7:
          _context4.prev = 7;
          _context4.t0 = _context4["catch"](1);
          res.status(500).json({
            message: "Fetching error ocurred, please try again later",
            err: _context4.t0
          });

        case 10:
          for (property in req.body) {
            console.log(req.body[property]);
            horarios[property] = req.body[property];
          }

          _context4.prev = 11;
          _context4.next = 14;
          return regeneratorRuntime.awrap(horarios.save());

        case 14:
          res.status(200).json({
            message: "Materia was updated",
            data: horarios
          });
          _context4.next = 22;
          break;

        case 17:
          _context4.prev = 17;
          _context4.t1 = _context4["catch"](11);
          console.log(_context4.t1);
          error = new HttpError('Something went wrong, please try again later.', 500);
          return _context4.abrupt("return", next(error));

        case 22:
        case "end":
          return _context4.stop();
      }
    }
  }, null, null, [[1, 7], [11, 17]]);
};

var deleteHorario = function deleteHorario(req, res) {
  var id;
  return regeneratorRuntime.async(function deleteHorario$(_context5) {
    while (1) {
      switch (_context5.prev = _context5.next) {
        case 0:
          id = req.params.id;
          _context5.prev = 1;
          _context5.next = 4;
          return regeneratorRuntime.awrap(Horarios.findOneAndDelete({
            id: id
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

exports.getHorarios = getHorarios;
exports.getSingleHorario = getSingleHorario;
exports.crearHorario = crearHorario;
exports.updateHorario = updateHorario;
exports.deleteHorario = deleteHorario;