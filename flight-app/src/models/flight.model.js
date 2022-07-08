// The Mongoose schema for the flight document 
const mongoose = require('mongoose');
const Schema = mongoose.Schema;


 //Sample input format for the Flight Schema
/*const flightOne = {
    flightID: 7827,
    planeModel:'Boeing 737',
    Pilot: "Betty Chaplain",
    flight: [{
        departureDate: '07/12/2022',
        departureTime: '6:30 am',
        departureAirport: 'Dallas/Fort Worth International Airport (DFW)',
        arrivalDate: "07/13/2022",
        arrivalTime: "1:15 am",
        arrivalAirport: "Denver International Airport (DEN)",
    }],
    capacity: 108
};  
 */
// Create a Flight Schema
const allFlightSchema = new Schema ({
    flightID: Number,
        
    planeModel: String,
    Pilot: String,
    // The flight details will be embedded 
   //flightDeets: [{
    // departure stores the date, time, and airport info for departures
    departureDate: String,  
    departureTime: String, 
    departureAirport: String,
    arrivalDate: String,
    arrivalTime: String,
    arrivalAirport: String,     
    capacity: {
        // Plane capacity can be a number from 0 - 120
        type: Number,
        // Sets the minimum passenger capacity at 0 and the maximum capacity at 115
        // Throws an error message if these conditions are not met
        min: [0, 'Sorry, Capacity can not be less than 0'],
        max: [120, 'FULL CAPACITY: The capacity of the plane has been reached'],
        // capacity is a required field that can't be left blank
        
    }

});
    

//
const Flight = mongoose.model('flight', allFlightSchema, 'Flights');
module.exports = Flight; // require('flight.model.js') will return this flight class