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
    res.status(405).send({message: error.message})
  }
}

async function getMealsById(req, res) {
  try {
    const { id } = req.params;
    const mealById = await Meal.findById(id);

    return res.status(202).json(mealById);
  } catch (error) {
    console.log(error);
    res.status(405).send({message: error.message})
  }
}

module.exports = { getMeals, getMealsById };
