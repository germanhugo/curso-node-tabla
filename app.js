const { crearArchivo } = require('./multiplicar/multiplicar');
const argv = require('./config/yargs');
const colors = require('colors');

console.clear();


crearArchivo(argv.b, argv.l, argv.h)
    .then(archivo => console.log(`Archivo creado: ${archivo}`))
    .catch(err => console.log(err))