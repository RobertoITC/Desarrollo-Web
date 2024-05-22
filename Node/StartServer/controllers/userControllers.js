const userModel = require("../models/userModel");

async function getAllUsers(req, res) {
    try{
        const users = await userModel.getUsers();
        res.json(users);
    }catch(error){
        res.status(500).send(error);
    }
};

async function getUserId(req, res) {
    const { id } = req.params;
    console.log(id);
    try {
        const user = await userModel.getUserId(id);
        res.json(user);
    } catch (error) {
        res.status(500).send(error);
    }
}
async function createUser(req, res) {
    const user  = req.body;
    console.log(user);
    try {
        const newUser = await userModel.createUser(user);
        res.json(newUser);
    } catch (error) {
        res.status(500).send(error);
    }
}

async function updateUser(req, res) {
    const {id}=req.params;
    const user=req.body;
    try{

        const updateUser=await userModel.updateUser(id, user);
        res.json(updateUser);

    }catch(error){
        res.status(500).send(error);
    }
}


module.exports={getAllUsers,getUserId, createUser, updateUser};