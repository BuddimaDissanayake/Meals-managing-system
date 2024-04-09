const userModel = require('../models/userModel');

function addUsers(req,res) {
try {
    async function createDocument() {
        const newUser = new userModel({
            name: req.body.name,
            email: req.body.email,
            password: req.body.password
        });

        const user = await newUser.save();
        return res.status(200).json({
            message: user + 'saved successfully'
        });
    }
    
    createDocument();

} catch (error) {
    return res.status(500).json({message: error.message});
}
}

module.exports = addUsers;