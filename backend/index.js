const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
require("dotenv").config();

const materiasRouter = require("./routes/materias-router");
const horariosRouter = require("./routes/horarios-router");
const updateRoutes = require("./routes/update-router");
const consultaSiiauRouter = require("./routes/consultaSiiau-router");

const HttpError = require("./models/http-error");

const app = express();
app.use(cors());

app.use(bodyParser.json());

app.use("/api/materias", materiasRouter);
app.use("/api/horarios", horariosRouter);
app.use("/api/update", updateRoutes);
app.use("/api/siiau", consultaSiiauRouter);

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

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error(err));

app.listen(process.env.PORT || 5000);

module.exports = app;
