//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");


const getDescriptionById=async(id)=>{
    try{
        const query = 'SELECT U.name, d.description, d.prescription, d.createat FROM users U JOIN description d ON U.id = d.userd_id WHERE U.id = $1;';
        const {rows}=await db.query(query,[id]);
        return rows;

    }catch(error){

    }
};


const createDescription=async(description,prescription,userd_id)=>{
    try{
        const query='INSERT INTO description (description, prescription, userd_id) VALUES ($1, $2, $3) RETURNING *;';
        const {rows} = await db.query(query, [description,prescription,userd_id]);
        return rows[0];
    }catch(error){
        throw new Error(error);
    }

}

module.exports={getDescriptionById, createDescription};