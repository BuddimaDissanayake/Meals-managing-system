const mealModel = require("../models/mealModel");

function insertMeals(req, res) {
  try {
    let name = req.body.name;
    let type = req.body.type;

    if (name === "" || type === "") {
      res.status(400).json({
        message: "bad request, name or type cannot be empty",
      });
    }

    async function createDocument() {
      const newMeal = new mealModel({
        name: name,
        type: type,
        company: req.body.company,
        catogory: req.body.catogory,
        date: req.body.date,
        calories: req.body.calories,
        carbs: req.body.carbs,
        protein: req.body.protein
      });

      let meal = await newMeal.save();
      console.log("Meal created successfully", meal);
      return res.status(200).json({
        message: "meal saved",
        data: meal,
      });
    }

    createDocument();
  } catch (error) {
    return res.status(500).json({ message: "internal server error" });
  }
}

module.exports = insertMeals;
