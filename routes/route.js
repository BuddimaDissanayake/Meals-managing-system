const express = require("express");
const router = express.Router();
const insertData = require ('../functions/insertMeals')
const getMeals = require ('../functions/getMeals') 

router.post("/insertData", (req,res) => {
    insertData(req,res);
});

router.get("/getMeals", (req,res) => {
    getMeals(req,res);
});

module.exports = router;