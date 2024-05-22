//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");
const {getUsers} = require("./userModel");


const getFeedbackById=async(id)=>{
    try{
        const query = 'SELECT U.name, f.feedback FROM users U JOIN feedback f ON U.id = f.user_id WHERE U.id = $1;'
        const {rows}=await db.query(query,[id]);
        return rows;

    }catch(error){

    }
};

module.exports={getFeedbackById};