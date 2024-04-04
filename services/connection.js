const mongoose = require("mongoose");

async function connection() {
  await mongoose.connect(
    "mongodb+srv://user:user@cluster0.miafjfy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
  );
  try {
    console.log("Database connected successfully");
  } catch (error) {
    console.log("Database has not connected properly", error);
  }
}

module.exports = connection;
