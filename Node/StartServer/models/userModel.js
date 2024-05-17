//Este archivo contiene todas las queries a la bases de datos
const {db}=require('../config/db');
const getUsers=async()=>{
    const query = "SELECT * FROM users ORDER BY id ASC;";
    const{rows}=await db.query(query);
    return rows;
};

module.exports={getUsers};