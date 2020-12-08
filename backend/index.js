const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
// const logger = require("morgan");
const mongoose = require("mongoose");
require("dotenv").config();

const materiasRouter = require("./routes/materias-router");
const horariosRouter = require("./routes/horarios-router");
const updateRoutes = require("./routes/update-router");
const consultaSiiauRouter = require("./routes/consultaSiiau-router");

const HttpError = require("./models/http-error");

const app = express();
app.use(cors());

// app.use((req, res, next) => {
//   res.setHeader("Access-Control-Allow-Origin", "*");
//   res.header("Access-Control-Allow-Credentials", true);
//   res.setHeader(
//     "Access-Control-Allow-Headers",
//     "Origin,X-Requested-With,Content-Type,Accept,content-type,application/json"
//   );
//   res.setHeader(
//     "Access-Control-Allow-Methods",
//     "GET, POST, PATCH, DELETE, OPTIONS"
//   );
//   next();
// });

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

app.listen(process.env.PORT || 5000);

mongoose
  .connect(process.env.MONGO_URI, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
    useCreateIndex: true,
  })
  .then(() => console.log("DB connected!"))
  .catch((err) => console.error(err));

module.exports = app;
