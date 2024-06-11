const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const AdditionalListSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  items: [
    {
      title: {
        type: String,
        required: true,
      },
      createdAt: {
        type: Date,
        default: Date.now,
      },
    },
  ],
});

module.exports = mongoose.model("AdditionalList", AdditionalListSchema);
