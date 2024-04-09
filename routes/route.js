const express = require("express");
const router = express.Router();
const insertMeals = require("../functions/insertMeals");
const getMeals = require("../functions/getMeals");
const updateMeals = require("../functions/updateMeals");
const deleteMeals = require("../functions/deleteMeals");
const addUsers = require("../functions/addUsers");

router.post("/insertMeals", (req, res) => {
  insertMeals(req, res);
});

router.get("/getMeals", (req, res) => {
  getMeals.getMeals(req, res);
});

router.get("/getMealsById/:id", (req, res) => {
  getMeals.getMealsById(req, res);
});

router.put("/updateMeals/:id", (req, res) => {
  updateMeals(req, res);
});

router.delete("/deleteMeals/:id", (req, res) => {
  deleteMeals(req, res);
});

router.post("/addUsers", (req, res) => {
  addUsers(req, res);
});
module.exports = router;
