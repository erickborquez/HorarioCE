const HttpError = require('../models/http-error');

const Horarios = require("../models/horario");

const getHorarios = async (req,res) => {
    let horarios;
    try{
        horarios = await Horarios.find();
    } catch (err){
        res.status(500).json({
        message: "Fetching error ocurred, please try again later",
        err,
        });
    }
    res.json({
        data: {
        materias: horarios.map((horario) => horario.toObject({ getters: true })),
        },
        
    });
}

const getSingleHorario = async (req,res) => {
    const { id } = req.params;

    let horarios;
    try{
        horarios = await Horarios.findOne({id})
    }catch (err){
        res.status(500).json({
            message: "Fetching error ocurred, please try again later",
            err,
        });
    }

    if (horarios){
        res.json({
            data: horarios.toObject({ getters: true }),
        });
    }
}

const crearHorario = async (req, res, next) =>{
  const { id, materias } = req.body;

  let existingHorario;
  try {
    existingHorario = await Horarios.findOne({ id });
  } catch (err) {
    const error = new HttpError("Internal error, please try again later", 500);
    return next(error);
  }
  if (existingHorario) {
    const error = new HttpError(
      "Horario exists already, please update instead",
      402
    );
    return next(error);
  }

  const nuevoHorario = new Horarios({
    id,
    materias,
  });

  try {
    await nuevoHorario.save();
    res
      .status(200)
      .json({ data: { horario: nuevoHorario.toObject({ getters: true }) } });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured - POST",
      err,
    });
  }
}

const updateHorario = async (req, res, next) => {
    const { id } = req.params;
    let horarios;
    try{
        horarios = await Horarios.findOne({ id });
    } catch (err){
        res.status(500).json({
          message: "Fetching error ocurred, please try again later",
          err,
        });
    }
    
    for (let property in req.body){
        console.log(req.body[property]);
        horarios[property] = req.body[property];
    }
      
    try{
        await horarios.save();
        res.status(200).json({
          message: "Materia was updated",
          data: horarios,
        });
    }catch (err){
        console.log(err);
        
        const error = new HttpError(
          'Something went wrong, please try again later.',
          500
        );
        return next(error);
    }

};

const deleteHorario = async (req,res) => {
    const { id } = req.params;
    try{
        await Horarios.findOneAndDelete({ id });
        res.status(200).json({
        message: "Materia was deleted",
        });
    } catch (err){
        res.status(500).json({
        message: "Fetching error ocurred, please try again later",
        err,
        });
    }
}

exports.getHorarios = getHorarios;
exports.getSingleHorario = getSingleHorario;
exports.crearHorario = crearHorario;
exports.updateHorario = updateHorario;
exports.deleteHorario = deleteHorario;