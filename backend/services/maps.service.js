const axios = require('axios');
const captainModel = require('../models/captain.model');

module.exports.getAddressCoordinate = async (address) => {
    const apiKey = process.env.GOOGLE_MAPS_API;
    const url = `https://maps.googleapis.com/maps/api/geocode/json?address=${encodeURIComponent(address)}&key=${apiKey}`;
   
    try {
        const response = await axios.get(url);
        if (response.data.status === 'OK') {
            const location = response.data.results[ 0 ].geometry.location;
            return {
                ltd: location.lat,
                lng: location.lng
            };
        } else {
            throw new Error('Unable to fetch coordinates');
        }
    } catch (error) {
        console.error(error);
        throw error;
    }
}

module.exports.getDistanceTime=async (origin,destination)=>{
    if(!origin||!destination){
        throw new Error('Origin and destination are required');
    }
    const apiKey=process.env.GOOGLE_MAPS_API;
    const url=`https://maps.googleapis.com/maps/api/distancematrix/json?units=metric&origins=${origin}&destinations=${destination}&key=${apiKey}`;
    try{
        const response=await axios.get(url);
        if(response.data.status==='OK'){

            if(response.data.rows[0].elements[0].status==='NOT_FOUND'){
                throw new Error('Invalid origin or destination');
            }
            return response.data.rows[0].elements[0];
        }else{
            throw new Error('Unable to fetch distance and time');
        }
    }catch(error){
        console.error(error);
        throw error;
    }
}

module.exports.getAutoCompleteSuggestions=async (input)=>{
    if(!input){
        throw new Error('Input is required');
    }
    const apiKey=process.env.GOOGLE_MAPS_API;
    const url=`https://maps.googleapis.com/maps/api/place/autocomplete/json?input=${input}&key=${apiKey}`;
    try{
        const response=await axios.get(url);
        if(response.data.status==='OK'){
            if(response.data.predictions.length===0){
                throw new Error('No suggestions found');
            }
            return response.data.predictions;
        }else{
            throw new Error('Unable to fetch suggestions');
        }
    }catch(error){
        console.error(error);
        throw error;
    }
}


module.exports.getCaptainsInTheRadius = async (ltd, lng, radius) => {
    const captains = await captainModel.find({
        location: {
            $geoWithin: {
                $centerSphere: [ [ ltd, lng ], radius / 6378.1 ]
            }
        }
    });

    return captains;
}