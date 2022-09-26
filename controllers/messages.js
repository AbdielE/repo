const { request, response } = require("express")

const rootMessage = (req = request,res = response)=>{
    res.json({msg:"Hola"})
}

const hiMessage = (req,res)=>{
    res.send("Hola mundo")
}

const byeMessage = (req,res)=>{
    res.send("Adios mundo")
}

const postMessage = (req,res)=>{
    res.send("Mensaje post")
}

const putMessage = (req,res)=>{
    res.send("Mensaje put")
}

const deleteMessage = (req,res)=>{
    res.send("Mensaje delete")
}
module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}