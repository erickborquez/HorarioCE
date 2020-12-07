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

var port = process.env.port || 3000;
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

var materiasRouter = require("./routes/materias-router");

var horariosRouter = require("./routes/horarios-router");

var updateRoutes = require("./routes/update-router");

var consultaSiiauRouter = require("./routes/consultaSiiau-router");

app.use("/api/materias", materiasRouter);
app.use("/api/horarios", horariosRouter);
app.use("/api/update", updateRoutes);
app.use("/api/consulta", consultaSiiauRouter);
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