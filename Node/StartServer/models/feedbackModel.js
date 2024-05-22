//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");
const {updateUser} = require("./userModel");


const getFeedbackById=async(id)=>{
    try{
        const query = 'SELECT U.name, f.feedback FROM users U JOIN feedback f ON U.id = f.user_id WHERE U.id = $1;'
        const {rows}=await db.query(query,[id]);
        return rows;

    }catch(error){

    }
};


const createFeedback=async(feedback, user_id)=>{
    try{
        const query='INSERT INTO feedback (feedback, user_id) VALUES ($1, $2) RETURNING *';
        const {rows} = await db.query(query, [feedback,user_id]);
        return rows[0];


    }catch(error){
        throw new Error(error);
    }
}

module.exports={getFeedbackById,createFeedback,updateUser};