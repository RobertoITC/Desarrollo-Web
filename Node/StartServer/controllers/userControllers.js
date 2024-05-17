const userModel = require("../models/userModel");

async function getAllUsers(req, res) {
    try{
        const users = await userModel.getUsers();
        res.json(users);
    }catch(error){
        res.status(500).send(error);
    }
};

module.exports={getAllUsers};