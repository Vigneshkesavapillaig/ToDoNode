const express = require("express");
const { getChartlLists } = require("../controller/chartList");

const router = express.Router();

router.get("/getChartLists", getChartlLists);

module.exports = router;
