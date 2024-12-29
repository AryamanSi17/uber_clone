const rideService = require('../services/ride.service');
const { validationResult } = require('express-validator');

module.exports.createRide = async (req, res, next) => {
    const errors=validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({errors:errors.array()});
    }
    const {pickup,destination,vehicleType}=req.body;
    try{
        const ride=await rideService.getFare(pickup,destination,vehicleType);
        res.status(200).json(ride);
    }catch(err){
        console.error(err);
        res.status(500).json({message:'Internal server error'});
    }    
}