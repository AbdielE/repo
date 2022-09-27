const { request, response } = require("express")

const rootMessage = (req = request,res = response)=>{
    res.status(404).json({msg:"Hola"})
}

const hiMessage = (req = request,res = response)=>{
    res.status(400).json({msg:"Hola"})
}

const byeMessage = (req = request,res = response)=>{
    res.status(401).json({msg:"Adios mundo"})
}

const postMessage = (req = request,res = response)=>{
    res.status(403).json({msg:"Mensaje POST"})
}

const putMessage = (req = request,res = response)=>{
    res.status(405).json({msg:"Mensaje PUT"})
}

const deleteMessage = (req = request,res = response)=>{
    res.status(406).json({msg:"Mensaje DELETE"})
}
module.exports = {rootMessage, hiMessage, byeMessage, postMessage, putMessage, deleteMessage}