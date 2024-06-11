const { DataTypes } = require("sequelize");
const { sequelize } = require("../db"); 

const AdditionalList = sequelize.define(
  "AdditionalList",
  {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    items: {
      type: DataTypes.JSONB, 
      allowNull: false,
      defaultValue: [],
    },
  },
  {
    timestamps: true,
  }
);

module.exports = AdditionalList;
