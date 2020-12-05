"use strict";

var express = require("express");

var app = express();

var cors = require("cors");

var bodyParser = require("body-parser");

var logger = require("morgan");

var mongoose = require("mongoose");

require("dotenv").config();

mongoose.connect(process.env.MONGO_URI, {
  useUnifiedTopology: true,
  useNewUrlParser: true,
  useCreateIndex: true
}).then(function () {
  return console.log("DB connected!");
})["catch"](function (err) {
  return console.error(err);
});

var HttpError = require("./models/http-error");

var port = process.env.port || 3001;
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
/* let materias = [];
let str = 'DEPTO,DEPARTAMENTO,AREA,CLAVE,MATERIA,CRED,TEORIA,PRACTICA,TIPO,NIVEL,PRERREQUISITOS,CORREQUISITOS,CARRERAS\n,,\"ARIG\",00332,\"ANALISIS PROBABILISTICOS DE SISTEMAS ELECTRICOS",1,80,0,\" C\",\" DO\",,,\n<BR>\n,,\"ARIG\",00335,\"ANALISIS QUIMICO INSTRUMENTAL\",1,120,0,\" C\",\" LI\",,,\n<BR>\n'
let regEx = /".*"\s*(".*")\s*g;
console.log(str);
materias = regEx.exec(str);
console.log(materias); */

var materiasRouter = require("./routes/materias-router");

var horariosRouter = require("./routes/horarios-router");

var updateRoutes = require("./routes/update-router");

app.use("/api/materias", materiasRouter);
app.use("/api/horarios", horariosRouter);
app.use("/api/update", updateRoutes);
app.listen(port, function () {
  console.log("Port: " + port);
});
app.use(function (req, res, next) {
  next(new HttpError("Could not find this route.", 404));
});
app.use(function (error, req, res, next) {
  if (req.headerSent) {
    return next(error);
  }

  res.status(error.code || 500);
  res.json({
    message: error.message || "An unknown error ocurred!"
  });
});
module.exports = app;