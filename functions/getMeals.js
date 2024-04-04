const meal = require ('../models/mealModel');


async function getMeals(req,res) {
    try{
        const meals = await meal.find({})

        return res.status(201).json(meals);
    }
    catch(error){
       console.log(error);
    }
    
}

module.exports = getMeals;