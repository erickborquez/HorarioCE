const express = require("express");
const router = express.Router();

let geis = require("../temporalDatabase");

router.get("/list", async (req, res) => {
  try {
    res.status(200).json({
      data: geis,
    });
  } catch (err) {
    res.status(400).json({
      message: "Some error occured",
      err,
    });
  }
});

module.exports = router;
