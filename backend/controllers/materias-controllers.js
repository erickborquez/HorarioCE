//const { validationResult } = require('express-validator');

//const HttpError = require('../models/http-error');
const Materia = require("../models/materia");

const getMaterias = async (req,res) => {
    try {
        res.status(200).json({
          data: req.Materia,
        });
      } catch (err) {
        res.status(400).json({
          message: "Some error occured - GET",
          err,
        });
      }
}

const createNewMatter = async (req, res) =>{
    const {name,
        nrc, 
        clave,
        professor} = req.body;
    
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

    const nuevaMateria = new Materia({
        name,
        nrc, 
        clave,
        date: [],
        professor,
    });

    try{
        await nuevaMateria.save()
        .then(res.status(200).json({
            data: nuevaMateria,
            })
        );
    } catch (err) {
        res.status(400).json({
            message: "Some error occured - POST",
            err,
          });
    }

}

const updateMatter = async (req, res) => {
    const id = req.params.id;
    const {name,
        nrc, 
        clave,
        professor} = req.body;

    Materia.findByIdAndUpdate({_id: id}, {$set: {nrc: nrc, name: name, clave: clave, professor: professor}}).
    then(doc =>{
        console.log(doc)
        res.status(200).json({
            message: "Matter has updated.",
        })
    })
    .catch(err=>{
        res.status(400).json({
            message: "Some error occured - UPDATE",
            err,
          });
    })
}

const deleteMatter = async (req, res) =>{
    const id = req.params.id;

    Materia.findByIdAndDelete({_id: id})
    .then(doc =>{
        console.log(doc)
        res.status(200).json({
            message: "Matter has deleted.",
        })
    })
    .catch(err=>{
        res.status(400).json({
            message: "Some error occured - UPDATE",
            err,
          });
    })
}



exports.getMaterias = getMaterias;
exports.createNewMatter = createNewMatter
exports.updateMatter = updateMatter
exports.deleteMatter = deleteMatter