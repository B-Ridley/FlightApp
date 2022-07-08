const Schedule = require('../models/FlightSchedule.model');

const newFlight = async ({departureDate, departureTime, departureAirport, arrivalDate, arrivalTime, arrivalAirport}) => {
    try {
        const schedFlight = new Schedule({
            departureDate,
            departureTime,
            departureAirport,
            arrivalDate,
            arrivalTime,
            arrivalAirport
        });
        await schedFlight.save();
        return schedFlight._id;
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err };
    }
}

const addFlightToSchedule = async (_id, {model, capacity, _id: flightId }) => {
    try {
        await Schedule.findByIdAndUpdate(_id, {$push: {flights: {model, capacity, _id: flightId}}});
    } catch (err) {
        console.error(err);
        throw { status: 400, message: err}; 
    }
}

module.exports = { newFlight, addFlightToSchedule };

