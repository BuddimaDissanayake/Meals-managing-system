const userModel = require("../models/userModel");

function login(req,res) {
    const {email, password} = req.body;
    userModel.findOne({email : email})
    .then(user => {
        if(user.password === password){
            res.json("success")
        }else{
            res.json("Incorrect password")
        }
    })
}