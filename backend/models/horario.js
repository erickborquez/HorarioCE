const mongoose = require("mongoose");
const uniqueValidator = require("mongoose-unique-validator");

const Schema = mongoose.Schema;

const horarioSchema = new Schema({
    id: {type: String, unique: true, required: true},
    materias: [{type: String, required: true}]
})

horarioSchema.plugin(uniqueValidator);

module.exports = mongoose.model("Horario", horarioSchema);