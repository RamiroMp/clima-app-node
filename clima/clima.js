const axios = require('axios');





let clima = async(posic) => {

    //console.log(posic);
    let resp = await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${posic.lat}&lon=${posic.lng}&&units=metric&appid=eaae685a29c27c703cb1fab2ce9956eb`)
        //console.log(resp.data.main);
    if (resp.data.cod === 400) {
        throw new Error(`No hay resultados para la ciudad ${posic.direccion}`)
    }

    return {

        direccion: posic.direccion,
        lat: posic.lat,
        lng: posic.lng,
        temp: resp.data.main.temp
    }


}

module.exports = {
    clima
};