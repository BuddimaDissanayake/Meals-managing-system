const express = require("express");
const router = express.Router();
const insertData = require("../functions/insertMeals");
const getMeals = require("../functions/getMeals");
const updateMeals = require("../functions/updateMeals")

router.post("/insertData", (req, res) => {
  insertData(req, res);
});

router.get("/getMeals", (req, res) => {
  getMeals.getMeals(req, res);
});

router.get("/getMealsById/:id", (req, res) => {
  getMeals.getMealsById(req, res);
});

router.put("/updateMeals/:id", (req,res) => {
    updateMeals(req,res);
});

module.exports = router;
