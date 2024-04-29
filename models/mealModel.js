const mongoose = require("mongoose");

const mealSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    type: {
      type: String,
      required: true,
    },
    company: {
      type: String,
      required: true,
    },
    date: {
      type: Date,
      required: false,
    },
    catogory: {
      type: String,
      required: false,
    },
    calories: {
      type: Number,
      required: false,
    },
    Protein: {
      type: Number,
      required: false,
    },
    carbs: {
      type: Number,
      required: false,
    },
    fat: {
      type: Number,
      required: false,
    },
  },
  {
    timestamps: true,
  }
);

const mealModel = mongoose.model("meals", mealSchema);

module.exports = mealModel;
