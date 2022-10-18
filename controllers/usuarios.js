const { request, response } = require("express");
const pool = require("../db/connection")

const getUsers = async (req =request, res = response) => {
    let conn;

    try{
        conn = await pool.getConnection()
        const users = await conn.query("SELECT * FROM usuarios", (error)=>{throw new error})
        
        if(!users){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({users})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getUserbyID = async (req =request, res = response) => {
    const {id} = req.params
    let conn;

    try{
        conn = await pool.getConnection()
        const [users] = await conn.query(`SELECT * FROM usuarios WHERE ID = ${id}`, (error)=>{throw new error})
        
        if(!users){
            res.status(404).json({msg:`No se encontraron registros con el ID ${id}`})
            return
        }
        res.json({users})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}
module.exports = {getUsers, getUserbyID}