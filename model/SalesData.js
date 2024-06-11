const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const SalesDataSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  sales: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("SalesData", SalesDataSchema);
