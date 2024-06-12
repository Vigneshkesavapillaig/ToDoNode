const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CarDataSchema = new Schema({
  car: {
    type: String,
    required: true,
  },
  sales: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("CarData", CarDataSchema);
