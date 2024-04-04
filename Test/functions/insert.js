const connection = require ('../services/connection')
const mealModel = require ('../models/mealModel')

module.exports = function insertData(req, res) {
  console.log('insert data working')
  try{
  let name = req.body.name;
  let key = req.body.key;

   if(name === "" || key === ""){

     res.status(400).json({
      message:"bad request, name or Id cannot be empty"
    })


  }

  async function createDocument(){
    await connection();

    const newMeal = new mealModel({
      name: name,
      key: key
    });

    let meal = await newMeal.save();
    console.log('Meal created successfully',meal)
    return res.status(200).json({
      message:"meal saved",
      data: meal
    })
  }

    createDocument();
  } 
  catch(error){
   

    return res.status(500).json({message:"internal server error"})

   
  }


};


