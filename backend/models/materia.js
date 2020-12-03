const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const Materia = new Schema({
  name: { type: String, required: true },
  nrc: { type: String, required: true, unique: true },
  clave: { type: String, required: true },
  date: [
    {
      day: String,
      start: String,
      end: String,
    },
  ],
  professor: { type: String, required: true },
});

Materia.plugin(uniqueValidator);

module.exports = mongoose.model("Materia", Materia);
