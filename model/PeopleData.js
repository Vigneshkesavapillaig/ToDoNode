const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const PeopleDataSchema = new Schema({
  year: {
    type: Number,
    required: true,
  },
  size: {
    type: Number,
    required: true,
  },
});

module.exports = mongoose.model("PeopleData", PeopleDataSchema);
