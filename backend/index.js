const express = require("express");
const app = express();
const cors = require("cors");
const bodyParser = require("body-parser");
const logger = require("morgan");
const tempRoute = require("./routes/geis");

const port = process.env.port || 3001;
app.use(logger("dev"));
app.use(cors());
app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());
app.use("/geis", tempRoute);

app.listen(port, function(){
    console.log("Port: " + port);
})
module.exports = app;