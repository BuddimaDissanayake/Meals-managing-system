const express = require("express");
const app = express();
const router = require("./routes/route");
const connection = require("./services/connection");
const cors = require('cors');
const bodyParser = require('body-parser');
const multer = require('multer');
const csv = require('csvtojson');
require('dotenv/config');
const upload = multer({ dest: 'uploads/' });
const mealModel = require("./models/mealModel")

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false })); 

app.post('/csvMeal', upload.single('file'), (req, res, next) => {
  csv()
  .fromFile(req.file.path)
  .then((jsonObj)=>{
      var meal = [];
      for(var i = 0;i<jsonObj.length;i++){
          var obj={};
          obj.name=jsonObj[i]['Name'];
          obj.type=jsonObj[i]['Type'];
          obj.company=jsonObj[i]['Company'];
          meal.push(obj);
      }
      mealModel.insertMany(meal).then(function(){
          res.status(200).send({
              message: "Successfully Uploaded!"
          });
      }).catch(function(error){
          res.status(500).send({
              message: "failure",
              error
          });
      });
  }).catch((error) => {
      res.status(500).send({
          message: "failure",
          error
      });
  })
});

app.listen(8080, () => {
  connection();
  console.log("port is working");
});
