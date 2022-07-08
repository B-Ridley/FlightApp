const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const scheduleSchema = new Schema({
    departureDate: String,
    departureTime: String, 
    departureAirport: String,
    arrivalDate: String,
    arrivalTime: String,
    arrivalAirport: String,
    _id: {
      type: Schema.Types.ObjectId,
      ref: 'flight' //refer to the flight Mongoose Model 
    }
});

const Schedule = mongoose.model('FlightSchedule', scheduleSchema, 'Flights');
module.exports = Schedule; 