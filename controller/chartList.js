const { sequelize } = require("../db"); 

const getChartlLists = async (req, res) => {
  try {
    const [results, metadata] = await sequelize.query(
      "select title,item_count from chart;;"
    );
    res.status(200).json(results);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getChartlLists,
};
