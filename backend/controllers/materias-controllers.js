const HttpError = require("../models/http-error");

const Materia = require("../models/materia");

const getMaterias = async (req, res) => {
  let materias;
  try {
    materias = await Materia.find();
  } catch (err) {
    res.status(500).json({
      message: "Fetching error ocurred, please try again later",
      err,
    });
  }
  res.json({
    data: {
      materias: materias.map((materia) => materia.toObject({ getters: true })),
    },
  });
};

const getSingleMateria = async (req, res) => {
  const { nrc } = req.params;
  console.log(req.params);
  let materia;
  try {
    materia = await Materia.findOne({ nrc });
  } catch (err) {
    res.status(500).json({
      message: "Fetching error ocurred, please try again later",
      err,
    });
  }
  console.log(materia);
  if (materia)
    res.json({
      data: materia.toObject({ getters: true }),
    });
};

const createMateria = async (req, res, next) => {
  const { name, nrc, clave, professor, date } = req.body;

  let existingMateria;
  try {
    existingMateria = await Materia.findOne({ nrc });
  } catch (err) {
    const error = new HttpError("Internal error, please try again later", 500);
    return next(error);
  }
  if (existingMateria) {
    const error = new HttpError(
      "Materia exists already, please update instead",
      402
    );
    return next(error);
  }

  const nuevaMateria = new Materia({
    name,
    nrc,
    clave,
    date,
    professor,
  });

  try {
    await nuevaMateria.save();
    res
      .status(200)
      .json({ data: { materia: nuevaMateria.toObject({ getters: true }) } });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured - POST",
      err,
    });
  }
};

const updateMateria = async (req, res, next) => {
  const { nrc } = req.params;
  let materias;
  console.log(req.params)
  try{
    materias = await Materia.findOne({ nrc });
  } catch (err){
    res.status(500).json({
      message: "Fetching error ocurred, please try again later",
      err,
    });
  }

  for (let property in req.body){
    console.log(req.body[property]);
    materias[property] = req.body[property];
  }
  
  try{
    await materias.save();
    res.status(200).json({
      message: "Materia was updated",
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

const deleteMateria = async (req, res) => {
  const { nrc } = req.params;

  try{
    await Materia.findOneAndDelete({ nrc});
    res.status(200).json({
      message: "Materia was deleted",
    });
  } catch (err){
    res.status(500).json({
      message: "Fetching error ocurred, please try again later",
      err,
    });
  }
};

exports.getMaterias = getMaterias;
exports.getSingleMateria = getSingleMateria;
exports.createMateria = createMateria;
exports.updateMateria = updateMateria;
exports.deleteMateria = deleteMateria;
