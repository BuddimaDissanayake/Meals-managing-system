const Meal = require("../models/mealModel");

async function deleteMeals(req, res) {
  try {
    const { id } = req.params;

    const result = await Meal.findByIdAndDelete(id);

    if (!result) {
      return res.status(404).json({ message: "Meal not found" });
    }
    return res.status(200).send({ message: "Meal deleted successfully" });
  } catch (error) {
    return res.status(500).send({ message: error.message });
  }
}

module.exports = deleteMeals;
