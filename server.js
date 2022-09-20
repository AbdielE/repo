const express = require('express')
const messages = require('./routes/messages')
class Server{
    constructor(){
        this.app = express()
        this.paths = {
            messages:"/api/v1/messages"
        }
        this.routes( )
    }

    routes(){
        //this.app.get('/',(req, res)=>{
        //    res.send('Hola mundo')
        //})
        this.app.use(this.paths.messages, messages)
    }

    listen(){
        this.app.listen(process.env.PORT,()=>{
            console.log("Backend en ejecución en el puerto",process.env.PORT)
        })
    }
}

module.exports = Server //Exporta módulo