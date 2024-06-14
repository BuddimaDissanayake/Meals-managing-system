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
};

async function deleteMultiple(req, res) {
  const { ids } = req.body;
  console.log(ids)
  await Meal.deleteMany({ _id: { $in: ids } });
  res.status(200).send('Deleted successfully');
};

module.exports = {deleteMeals, deleteMultiple};
