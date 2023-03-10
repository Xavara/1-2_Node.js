const express = require("express");

const colors = require("colors");

const server = express();

server.get('/', function (req, res){
    res.send("<h1>Servidor funcionando correctamente</h1>");
})

server.listen(3000, function(){
    console.log("Servidor escuchando desde el puerto 3000".blue);
})