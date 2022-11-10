const { request, response } = require("express");
const pool = require("../db/connection");
const modeloPersonajes = require("../models/personajes");

const getPersonajes = async (req =request, res = response) => {
    let conn;
    try{
        conn = await pool.getConnection()
        const personajes = await conn.query(modeloPersonajes.queryGetPersonajes, (error)=>{throw new error})
        
        if(!personajes){
            res.status(404).json({msg:"No se encontraron registros"})
            return
        }
        res.json({personajes})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const getPersonajebyID = async (req =request, res = response) => {
    const {id} = req.params
    let conn;

    try{
        conn = await pool.getConnection()
        const [personajes] = await conn.query(modeloPersonajes.queryGetPersonajebyID, [id], (error)=>{throw new error})
        
        if(!personajes){
            res.status(404).json({msg:`No se encontraron registros con el ID ${id}`})
            return
        }
        res.json({personajes})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const deletePersonajebyID = async (req =request, res = response) => {
    const {id} = req.query
    let conn;

    try{
        conn = await pool.getConnection()
        const {affectedRows} = await conn.query(modeloPersonajes.queryDeletePersonajeByID, [id], (error)=>{throw new error})
        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo eliminar el registro con el ID ${id}`})
            return
        }
        res.json({msg:`El personaje con ID ${id} se eliminó satisfactoriamente.`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const addPersonaje = async (req =request, res = response) => {
    const {
        Nombre,
        Alias,
        Tipo,
        Organizacion,
        ArmaP,
        ArmaS,
        Dispositivo,
        Habilidad,
        Activo
    } = req.body

    if(
        !Nombre||
        !Alias||
        !Tipo||
        !Organizacion||
        !ArmaP||
        !ArmaS||
        !Dispositivo||
        !Habilidad||
        !Activo
    ){
        res.status(400).json({msg:"Falta información del personaje."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()

        const [personaje] = await conn.query(modeloPersonajes.queryPersonajeExists, [Alias])
        if(personaje){
            res.status(403).json({msg:`El personaje '${Alias}' ya se encuentra registrado.`})
            return
        }

        const {affectedRows} = await conn.query(modeloPersonajes.queryAddPersonaje, [
            Nombre,
            Alias,
            Tipo,
            Organizacion,
            ArmaP,
            ArmaS,
            Dispositivo,
            Habilidad,
            Activo
        ], (error)=>{throw new error})

        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo agregar el registro del personaje ${Alias}`})
            return
        }
        res.json({msg:`El personaje ${Alias} se agregó satisfactoriamente.`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

const updatePersonajeByAlias = async (req =request, res = response) => {
    const {
        Nombre,
        Organizacion,
        ArmaP,
        ArmaS,
        Dispositivo,
        Alias
    } = req.body

    if(
        !Nombre||
        !Organizacion||
        !ArmaP||
        !ArmaS||
        !Dispositivo||
        !Alias
    ){
        res.status(400).json({msg:"Falta información del personaje."})
        return
    }

    let conn;

    try{
        conn = await pool.getConnection()

        const [personaje] = await conn.query(modeloPersonajes.queryGetPersonajeInfo, [Alias])

        if(!personaje){
            res.status(403).json({msg:`El personaje '${Alias}' no se encuentra registrado.`})
            return
        }


        const {affectedRows} = await conn.query(modeloPersonajes.queryUpdateByAlias, [
            Nombre || personaje.Nombre,
            Organizacion || personaje.Organizacion,
            ArmaP || personaje.ArmaP,
            ArmaS || personaje.ArmaS,
            Dispositivo || personaje.Dispositivo,
            Alias
        ], (error)=>{throw new error})

        if(affectedRows===0){
            res.status(404).json({msg:`No se pudo actualizar el registro del personaje ${Alias}`})
            return
        }
        res.json({msg:`El personaje ${Alias} se actualizó satisfactoriamente.`})
    }catch(error){
        console.log(error)
        res.status(500).json({error})
    }finally{
        if(conn){
            conn.end()
        }
    }
}

module.exports = {getPersonajes, getPersonajebyID, deletePersonajebyID, addPersonaje, updatePersonajeByAlias}