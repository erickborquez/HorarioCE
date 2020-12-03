"use strict";

//const { validationResult } = require('express-validator');
//const HttpError = require('../models/http-error');
var Materia = require("../models/materia");

var getMaterias = function getMaterias(req, res) {
  return regeneratorRuntime.async(function getMaterias$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          try {
            res.status(200).json({
              data: req.Materia
            });
          } catch (err) {
            res.status(400).json({
              message: "Some error occured - GET",
              err: err
            });
          }

        case 1:
        case "end":
          return _context.stop();
      }
    }
  });
};

var createNewMatter = function createNewMatter(req, res) {
  var _req$body, name, nrc, clave, professor, nuevaMateria;

  return regeneratorRuntime.async(function createNewMatter$(_context2) {
    while (1) {
      switch (_context2.prev = _context2.next) {
        case 0:
          _req$body = req.body, name = _req$body.name, nrc = _req$body.nrc, clave = _req$body.clave, professor = _req$body.professor;
          /* let existingMatter;
          try{
              existingMatter = await Materia.findOne({nrc: nrc})
          }catch(err){
              const error = new HttpError(
                  'NRC duplicate.',
                  500
                );
                return next(error);   
          } */

          nuevaMateria = new Materia({
            name: name,
            nrc: nrc,
            clave: clave,
            date: [],
            professor: professor
          });
          _context2.prev = 2;
          _context2.next = 5;
          return regeneratorRuntime.awrap(nuevaMateria.save().then(res.status(200).json({
            data: nuevaMateria
          })));

        case 5:
          _context2.next = 10;
          break;

        case 7:
          _context2.prev = 7;
          _context2.t0 = _context2["catch"](2);
          res.status(400).json({
            message: "Some error occured - POST",
            err: _context2.t0
          });

        case 10:
        case "end":
          return _context2.stop();
      }
    }
  }, null, null, [[2, 7]]);
};

var updateMatter = function updateMatter(req, res) {
  var id, _req$body2, name, nrc, clave, professor;

  return regeneratorRuntime.async(function updateMatter$(_context3) {
    while (1) {
      switch (_context3.prev = _context3.next) {
        case 0:
          id = req.params.id;
          _req$body2 = req.body, name = _req$body2.name, nrc = _req$body2.nrc, clave = _req$body2.clave, professor = _req$body2.professor;
          Materia.findByIdAndUpdate({
            _id: id
          }, {
            $set: {
              nrc: nrc,
              name: name,
              clave: clave,
              professor: professor
            }
          }).then(function (doc) {
            console.log(doc);
            res.status(200).json({
              message: "Matter has updated."
            });
          })["catch"](function (err) {
            res.status(400).json({
              message: "Some error occured - UPDATE",
              err: err
            });
          });

        case 3:
        case "end":
          return _context3.stop();
      }
    }
  });
};

var deleteMatter = function deleteMatter(req, res) {
  var id;
  return regeneratorRuntime.async(function deleteMatter$(_context4) {
    while (1) {
      switch (_context4.prev = _context4.next) {
        case 0:
          id = req.params.id;
          Materia.findByIdAndDelete({
            _id: id
          }).then(function (doc) {
            console.log(doc);
            res.status(200).json({
              message: "Matter has deleted."
            });
          })["catch"](function (err) {
            res.status(400).json({
              message: "Some error occured - UPDATE",
              err: err
            });
          });

        case 2:
        case "end":
          return _context4.stop();
      }
    }
  });
};

exports.getMaterias = getMaterias;
exports.createNewMatter = createNewMatter;
exports.updateMatter = updateMatter;
exports.deleteMatter = deleteMatter;