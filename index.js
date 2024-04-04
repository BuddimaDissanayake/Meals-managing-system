const express = require("express");
const app = express();
const router = require("./routes/route");
const connection = require("./services/connection");

app.use(express.json());
app.use("/", router);

app.listen(8080, () => {
  connection();
  console.log("port is working");
});
