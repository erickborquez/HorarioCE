const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const materiaSchema = new Schema({
    name: {type: String, required: true},
    nrc: {type: String, required: true, unique: true},
    clave: {type: String, required: true},
    date: [{type: String, required: true}],
    professor: {type: String, required: true}
})

materiaSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Materia", materiaSchema);