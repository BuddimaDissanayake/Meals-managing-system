const express = require("express");
const app = express();
const router = require("./routes/route");
const connection = require("./services/connection");
const cors = require("cors");
const bodyParser = require("body-parser");
require("dotenv/config");

app.use(express.json());
app.use(cors());
app.use("/", router);
app.use(bodyParser.urlencoded({ extended: false }));

app.listen(8080, () => {
  connection();
  console.log("port is working");
});
