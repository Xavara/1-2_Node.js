const http = require("http");

const colors = require('colors');

const handleServer = function(req, res){
    res.writeHead(200, {"content-type" : "text/plain"})
    res.write('texto plano');
    res.end();
}

const server = http.createServer(handleServer)

server.listen(3000,function(){
    console.log("Servidor escuchando por el puerto 3000".yellow);
})