const express = require('express')
const messages = require('./routes/messages')
const usuarios = require('./routes/usuarios')
const personajes = require('./routes/personajes')
const cors = require("cors")
class Server{
    constructor(){
        this.app = express()
        this.paths = {
            messages:"/api/v1/messages",
            usuarios:"/api/v1/usuarios",
            personajes: "/api/v1/personajes"
        }
        this.middlewares()
        this.routes()
    }

    routes(){
        //this.app.get('/',(req, res)=>{
        //    res.send('Hola mundo')
        //})
        this.app.use(this.paths.messages, messages)
        this.app.use(this.paths.usuarios, usuarios)
        this.app.use(this.paths.personajes, personajes)
    }

    middlewares(){
        this.app.use(cors())//Permite solicitudes de origen cruzado
        this.app.use(express.json()) //Habilita la lectura de contenido en formato JSON
    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log("Backend en ejecución en el puerto",process.env.PORT)
        })
    }
}

module.exports = Server //Exporta módulo