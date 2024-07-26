const express = require('express')
const server = express()

server.get('/',(req,res)=>{
    res.send("Ola, ExpressJS na área")
})

server.listen(3000)