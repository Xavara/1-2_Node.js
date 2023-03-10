const fs = require('fs');

fs.writeFile('./texto.txt', 'linea uno', function(err){
    if (err) {
        console.log(err)
    }
    console.log("Archivo creado correctamente")
    //Lectura del archivo creado
    fs.readFile("./texto.txt", function(err,data){
        if(err){
            console.log(err)
        }
        console.log("Contenido de texto.txt: ")
        console.log(data.toString());
    })
});

console.log('Ultima linea de codigo');

