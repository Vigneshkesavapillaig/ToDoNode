const express = require("express");
const router = express.Router();
const SalesData = require("../model/SalesData");
const PeopleData = require("../model/PeopleData");
const CarData = require("../model/CarData");


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


const getLineChartData = async (req, res) => {
  try {
    const peoplesData = await PeopleData.find();
    const chartData = peoplesData.map((data) => ({
      year: data.year,
      size: data.size,
    }));
    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const getCarChartData = async (req, res) => {
  try {
    const carsData = await CarData.find();
    const chartData = carsData.map((data) => ({
      car: data.car,
      sales: data.sales,
    }));
    res.status(200).json(chartData);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};


router.get("/carChartData", getCarChartData);
router.get("/lineChartData", getLineChartData);
router.get("/chartData", getChartData);

module.exports = router;
