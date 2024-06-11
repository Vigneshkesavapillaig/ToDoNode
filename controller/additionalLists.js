const express = require("express");
const router = express.Router();
const SalesData = require("../model/SalesData");

const getChartData = async (req, res) => {
  try {
    const salesData = await SalesData.find();
    const chartData = salesData.map((data) => ({
      year: data.year,
      sales: data.sales,
    }));
    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get("/chartData", getChartData);

module.exports = router;
