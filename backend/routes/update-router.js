const express = require("express");
const router = express.Router();

const { updateCenter } = require("../controllers/update-controller.js");
//
// router.get("/siiau", updateAll);

router.get("/siiau/:centro", updateCenter);

module.exports = router;
