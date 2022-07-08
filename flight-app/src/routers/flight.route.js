/* The flight.route.js file uses routing from the Express library
to handle requests from the client:
    - get(): retrieves the list of flights and prints them to the Flight Schedule
    - post(): posts a new flight to the list then appends it to the Flight Schedule
*/

// the router will require the Router() method from Express
const router = require('express').Router();
// router function that will require the flight.controller file
const {createFlight, findFlightById, findAllFlights} = require('../controllers/flight.controller')

// A get request to retrieve all flights and flight information 
// The get function takes 2 parameters: 
router.get('/', async (req, res) => {
    try {
        const flights = await findAllFlights();
        res.json(flights);
    }  catch (err) {
        res.status(err?.status || 500).json(err);
    }
}); 

// A post request to send the newly created flight info
/*const monmodel=mongoose.model(Flight)
router.post("/", async(req, res) => {
    console.log("Flight successfully created");
    const data=new monmodel({
        flightID: req.body.flightID,
        planeModel:req.body.planeModel,
        Pilot: req.body.Pilot,
        flight: [{
            departureDate: req.body.departureDate,
            departureTime: req.body.departureTime,
            departureAirport: req.body.departureAirport,
            arrivalDate: req.body.arrivalDate,
            arrivalTime: req.body.arrivalTime,
            arrivalAirport: req.body.arrivalAirport,
        }],
        capacity: req.body.capacity
    })

    const val = await data.save(); 
    res.json(val); 
}) */


router.post('/', async (req, res) => {
    // try to create a new flight 
    try {
       const flightId = await createFlight(req.body);
       res.status(201).json({_id: flightId});
      // const url = 'http://localhost:8085/flights';
   //const url = 'https://2bffd9a5-ac7d-4ad9-932f-e0c8536a65b8.mock.pstmn.io/getFlight';
   // const [setFlights] = useState([]);

    // once the component loads, get all flights
    //useEffect(() => {
       // axios.get(url)
           // .then(res => setFlights(res.data))
            //.catch((err) => console.log(err))
   //}, [setFlights]);
        // return an error if flight can't be created 
    } catch (err) {
        res.status(err?.status || 500).json(err);
    }
}); 

// a get request to retrieve flights using an id
router.get('/edit/:id', async (req, res) => {
    // Try to return the flight by id
    try{
        const flight = await findFlightById(req.params.id);
        res.json(flight);
        // if id can't be found, an error message will be returned
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
});

router.get('/flights/:id', async (req, res) => {
    // Try to return the flight by id
    try{
        const flight = await findFlightById(req.params.id);
        res.json(flight);
        // if id can't be found, an error message will be returned
    } catch (err) {
        res.status(err?.status || 400).json(err);
    }
})

// export router so that it can be used within multiple files
module.exports = router; 
