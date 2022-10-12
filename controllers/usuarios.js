const { request, response } = require("express");

const getUsers = (req =request, res = response) => {
    console.log("Funcion getUsers")
    res.json({
        msg:"Función getUser"
    })
}

module.exports = {getUsers}