const userModel = require("../models/userModel");

function addUsers(req, res) {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    if (name === "" || email === "" || password === "") {
      res.status(501).json({
        message: "Bad request, any of fields cannot be empty",
      });
    }

    async function createDocument() {
      const newUser = new userModel({
        name: name,
        email: email,
        password: password,
      });

      const user = await newUser.save();
      return res.status(200).json({
        message: "User saved successfully",
        data: user,
      });
    }

    createDocument();
  } catch (error) {
    return res.status(500).json({ message: error.message });
  }
}

module.exports = addUsers;
