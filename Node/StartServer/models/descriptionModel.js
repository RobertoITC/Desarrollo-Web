//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const res = require("express/lib/response");
const {response} = require("express");


const getDescriptionById=async(id)=>{
    try{
        const query = 'SELECT U.name, d.description FROM users U JOIN description d ON U.id = d.userd_id WHERE U.id = $1;'
        const {rows}=await db.query(query,[id]);
        return rows;

    }catch(error){

    }
};

module.exports={getDescriptionById};