const express = require("express");
const router = express.Router();
const insertData = require ('../functions/insert')

router.post("/insertData", (req,res) => {
    insertData(req,res);
});

module.exports = router;