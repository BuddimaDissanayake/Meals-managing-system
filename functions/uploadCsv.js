const mealModel = require("../models/mealModel");
const csv = require("csvtojson");

function uploadCSV(req, res, next) {
  csv()
    .fromFile(req.file.path)
    .then((jsonObj) => {
      var meal = [];
      for (var i = 0; i < jsonObj.length; i++) {
        var obj = {};
        obj.name = jsonObj[i]["Name"];
        obj.type = jsonObj[i]["Type"];
        obj.company = jsonObj[i]["Company"];
        meal.push(obj);
      }
      mealModel
        .insertMany(meal)
        .then(function () {
          res.status(200).send({
            message: "CSV Successfully Uploaded to the DB!",
          });
        })
        .catch(function (error) {
          res.status(500).send({
            message: "File Uploading Failed!",
            error,
          });
        });
    })
    .catch((error) => {
      res.status(500).send({
        message: "File path error!",
        error,
      });
    });
}

module.exports = uploadCSV;
