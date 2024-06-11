const express = require("express");
const router = express.Router();
const SalesData = require("../model/SalesData"); // Import the SalesData model

const getChartData = async (req, res) => {
  try {
    const salesData = await SalesData.find(); // Retrieve sales data from the SalesData collection
    // Map the retrieved sales data to match the format expected by the chart
    const chartData = salesData.map((data) => ({
      year: data.year, // Assuming 'year' property exists in SalesData schema
      sales: data.sales, // Assuming 'sales' property exists in SalesData schema
    }));
    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

router.get("/chartData", getChartData);

module.exports = router;
