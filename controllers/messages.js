const rootMessage = (req,res)=>{
    res.send("Hola")
}

const hiMessage = (req,res)=>{
    res.send("Hola mundo")
}

const byeMessage = (req,res)=>{
    res.send("Adios mundo")
}

module.exports = {rootMessage, hiMessage, byeMessage}