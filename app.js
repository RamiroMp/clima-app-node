const lugar = require('./lugar/lugar');
const clima = require('./clima/clima');


const argv = require('yargs')
    .options({
        direccion: {
            alias: 'd',
            desc: 'direccion de la ciudad',
            require: true
        }
    })
    .argv


//console.log(argv);
let encodeUrl = encodeURI(argv.direccion);
lugar.getLugarLatLng(encodeUrl)
    .then(clima.clima)
    .then(console.log)
    .catch(e => console.log(e))