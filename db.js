const { Sequelize } = require("sequelize");
const dotenv = require("dotenv");

dotenv.config();

const sequelize = new Sequelize(
  process.env.DB_NAME,
  process.env.DB_USER,
  process.env.DB_PASS,
  {
    host: process.env.DB_HOST,
    dialect: "postgres",
  }
);

const connectDB = async () => {
  try {
    await sequelize.authenticate();
    console.log("PostgreSQL connected...");
    await sequelize.sync();
  } catch (err) {
    console.error("PostgreSQL connection error:", err);
    process.exit(1);
  }
};

module.exports = { connectDB, sequelize };
