const { info } = require('console');
const fs = require('fs');
fs.writeFileSync('archivo3.txt', "Hola Raul, este es un archivo, creado de manera sincrónica");
fs.writeFile('archivo.txt', "Hola Raul, este es un archivo nuevo, creado de manera asincrónica", (err) => {
    if (err)
        console.log(err);
    else {
    }
});

//let informacion = fs.readFileSync('info.txt', 'utf8');
//console.log(informacion);

//fs.unlinkSync('archivo.txt');