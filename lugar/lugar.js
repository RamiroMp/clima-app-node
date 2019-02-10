const axios = require('axios');



const getLugarLatLng = async(direccion) => {

    let encodeUrl = encodeURI(direccion);


    let resp = await axios.get(`https://maps.googleapis.com/maps/api/geocode/json?address=${encodeUrl}&key=AIzaSyBWZfshVrf3DyQ2jaL8zJV1O3TH9AMIguE `)
    if (resp.data.status === "ZERO_RESULTS") {
        throw new Error(`No hay resultados para la ciudad ${direccion}`)
    }



    let location = resp.data.results[0].formatted_address;
    let coors = resp.data.results[0].geometry.location;

    /*console.log(resp.data.results[0].formatted_address);
    console.log(resp.data.results[0].geometry.location.lat);
    console.log(resp.data.results[0].geometry.location.lng);*/



    return {
        direccion: location,
        lat: coors.lat,
        lng: coors.lng
    }


};

module.exports = {
    getLugarLatLng
};