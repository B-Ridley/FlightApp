/* eslint-disable no-throw-literal */
// Require the data in the flight.model JavaScript File 
const Flight = require('../models/flight.model.js');

//const { addNewDeparture } = require('./departure.controller.js')

// Create a new flight instance 
const createFlight = async ({flightID, planeModel, Pilot, departureDate, departureTime, departureAirport, 
    arrivalDate, arrivalTime, arrivalAirport, capacity}) => {
    try {
        const flights = new Flight({
            flightID,
            planeModel,
            Pilot,
            departureDate,
            departureTime,
            departureAirport,
            arrivalDate,
            arrivalTime,
            arrivalAirport, 
            capacity
        });

        await flights.save() // saves a new flight to the database
        
        // update the flight to add new arrival, capacity, and departure information
        // loop over the flights and update information
       //for (let flight of flights) {
           
           // eslint-disable-next-line no-undef
        //await addFlightToSchedule(schedFlight._id, flight);
       //}
        //for (let flight of flights.departure) {
           // await updateFlightDeparture(departure, flight);
       // }
       // for (let arrival of flight.arrival) {
           // await updateFlightArrival(arrival, flight);
       // } 
       // return flights._id; 
       
    }
     // Catch that will occur if the try fails 
     catch(err) {
        console.error(err);
        throw { status: 400, message: err}; 
    }
}

// Find a flight by its ID number
const findFlightById = async id => {
    try {
        const flights = await Flight.findById({id});
        
        // function that handles invalid ids
        if (flights == null) {
            throw `No flight with the id of ${id} could be found`;
        }
        return flights; //If the flight was found, it will be returned to the user
    } catch (err) {
        console.error(err);
        throw { status: 404, message: err}; 
    }
}
 
// Return flight information for all flights
const findAllFlights = async (limit = 0) => {
    const fflights = await Flight.find(); // get all of the flights
    return fflights; 
} 

// Export the functions so they can be used in other project files
module.exports = {createFlight, findFlightById, findAllFlights}

