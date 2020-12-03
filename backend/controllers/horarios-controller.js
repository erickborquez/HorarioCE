//const { validationResult } = require('express-validator');

//const HttpError = require('../models/http-error');
let Horarios = require("../models/horario");

const getHorario = async (req,res) => {
    try {
        res.status(200).json({
          data: req.Horarios,
        });
      } catch (err) {
        res.status(400).json({
          message: "Some error occured - GET",
          err,
        });
      }
}

const crearHorario = async (req, res) =>{
    const {id} = req.body;
    
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

    const nuevoHorario = new Horarios({
        id,
        materias: []
    });

    try{
        await nuevoHorario.save()
        .then(res.status(200).json({
            data: nuevoHorario,
            })
        );
    } catch (err) {
        res.status(400).json({
            message: "Some error occured - POST",
            err,
          });
    }
}

const updateHorario = async (req, res) => {
    const id = req.params.id;
    const {materias} = req.body;

    Horarios.findByIdAndUpdate({_id: id}, {$set: {materias: materias}}).
    then(doc =>{
        console.log(doc)
        res.status(200).json({
            message: "Schedule has updated.",
        })
    })
    .catch(err=>{
        res.status(400).json({
            message: "Some error occured - UPDATE",
            err,
          });
    })
}

const deleteHorario = async (req, res) =>{
    const id = req.params.id;

    Horarios.findByIdAndDelete({_id: id})
    .then(doc =>{
        console.log(doc)
        res.status(200).json({
            message: "Schedule has deleted.",
        })
    })
    .catch(err=>{
        res.status(400).json({
            message: "Some error occured - DELETE",
            err,
          });
    })
}

exports.getHorario = getHorario;
exports.crearHorario = crearHorario;
exports.updateHorario = updateHorario;
exports.deleteHorario = deleteHorario;