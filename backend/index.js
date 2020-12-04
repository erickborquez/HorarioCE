const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error(err));

const HttpError = require("./models/http-error");
const port = process.env.port || 3001;

app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

const materiasRouter = require("./routes/materias-router");
const horariosRouter = require("./routes/horarios-router");
const updateRoutes = require("./routes/update-router");

app.use("/api/materias", materiasRouter);
app.use("/api/horarios", horariosRouter);
app.use("/api/update", updateRoutes);

app.listen(port, function () {
  console.log("Port: " + port);
});

app.use((req, res, next) => {
  next(new HttpError("Could not find this route.", 404));
});

app.use((error, req, res, next) => {
  if (req.headerSent) {
    return next(error);
  }
  res.status(error.code || 500);
  res.json({ message: error.message || "An unknown error ocurred!" });
});

module.exports = app;
