const express = require("express");
const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });
const insertMeals = require("../functions/insertMeals");
const getMeals = require("../functions/getMeals");
const updateMeals = require("../functions/updateMeals");
const deleteMeals = require("../functions/deleteMeals");
const addUsers = require("../functions/addUsers");
const uploadCSV = require("../functions/uploadCsv");

router.post("/insertMeals", (req, res) => {
  insertMeals(req, res);
});

router.post("/csvMeal", upload.single("file"), (req, res) => {
  uploadCSV(req, res);
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

router.post("/login", (req, res) => {
  login(req, res);
});

module.exports = router;
