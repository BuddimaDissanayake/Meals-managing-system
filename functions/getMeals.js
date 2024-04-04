const Meal = require("../models/mealModel");

async function getMeals(req, res) {
  try {
    const meals = await Meal.find({});

    return res.status(201).json({
      count: meals.length,
      data: meals,
    });
  } catch (error) {
    console.log(error);
  }
}

async function getMealsById(req, res) {
  try {
    console.log("Hello");
    const { id } = req.params;
    const mealById = await Meal.findById(id);

    return res.status(202).json(mealById);
  } catch (error) {
    console.log(error);
  }
}

module.exports = { getMeals, getMealsById };
