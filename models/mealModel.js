const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    key: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

const mealModel = mongoose.model('meals', mealSchema);

module.exports = mealModel;
