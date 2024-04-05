const Meal = require("../models/mealModel");

async function updateMeals(req, res) {
  try {
    if (!req.body.name || !req.body.key) {
      return res.status(403).send({
        message: "Send all required fields",
      });
    }

    const { id } = req.params;
    const result = await Meal.findByIdAndUpdate(id, req.body);

    if (!result) {
      return res.status(404).json({ message: "Meal not found" });
    }
    return res.status(206).send({ message: "Meal updated successfully" });
  } catch (error) {
    console.log(error);
    res.status(406).send({ message: error.message });
  }
}

module.exports = updateMeals;
