// Cross Origin Resource Sharing

const express = require('express');
const mongoose = require('mongoose');
const logger = require('./src/middleware/flight.logger');
const cors = require('cors');

// import the .env file so that app can connect 
require('dotenv').config(); 


const app = express();
const PORT = process.env.PORT || 8080; // Default to 8080 if not in .env
app.use(express.json()); // This is middleware that auto parses JSON into JS objects between each HTTP request and the endpoint
app.use(cors()); // Allow all traffic
app.use(logger);

//
const flightRouter = require('./src/routers/flight.route.js');

app.use('/flights', flightRouter);
//app.use('/update', require('./src/features/FlightSched'));

app.use('/flights/id', flightRouter);


app.all('*', (req, res) => {
    res.status(404).send('The page you are looking for could not be found.');
});

mongoose.connect(process.env.MONGO_URI)
    .then(() => {
        console.log('Successfully connected to MongoDB!');
    })
    .catch(err => {
        console.error(err);
        // Options
        // Connect to fallback database
        // OR
        // Terminate process
        process.exit(1);
    });

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}!`);
});

