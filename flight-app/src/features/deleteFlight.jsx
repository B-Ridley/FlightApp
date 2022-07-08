// File that handles deleting a flight

//Import dependencies
import React,{useEffect, useState} from 'react'
import axios from 'axios'


export const DeleteFlight = () => {
    //set state
    const [flights, setFlight] = useState([])
    useEffect(() => {
        axios.get('http://localhost:8085/flights')
            .then(res => setFlight(res.data))
            .catch((err) => console.log(err))
   }, []);

   //function flightDel(id) {
   const flightDel = async (id) => { 
     await axios.delete(`http://localhost:8085/flights/${id}`)
       // .then((res) => setFlight(res.data));

       setFlight(
        flights.filter((flight) => {
            return flight.id !== id; 
        })
       )

        //handle constraints
        if(id == null) {
            return console.error();
        }
    
    
   }

return(
    <div> 
        <div className="topnav">
            <a className="active" href = "home">Home</a>
            <a href ="flightSchedule">Flight Schedule</a>
            <a href ="update">Update Flight</a>
            <a href ="add">Add Flight</a>
            <a href="delete">Delete Flight</a>
            <a href ="contact">Contact</a>
            <a href ="help">Help</a>
            </div>

        <h1>Flight Schedule</h1>
        <table border="1">
            <tbody>
                <tr>
                <td>Flight ID</td>
                <td>Plane Model</td>
                <td>Pilot</td>
                <td>Departure Date</td>
                <td>Departure Time</td>
                <td>Departure Airport</td>
                <td>Arrival Date</td>
                <td>Arrival Time</td>
                <td>Arrival Airport</td>
                <td>Flight Capacity</td>
                </tr>
                {
                    flights.map((flights, index) => 
                    <tr key={index}>
                        <td>{flights.flightID}</td>
                        <td>{flights.planeModel}</td>
                        <td>{flights.Pilot}</td>
                        <td>{flights.departureDate}</td>
                        <td>{flights.departureTime}</td>
                        <td>{flights.departureAirport}</td>
                        <td>{flights.arrivalDate}</td>
                        <td>{flights.arrivalTime}</td>
                        <td>{flights.arrivalAirport}</td>
                        <td>{flights.capacity}</td>
                        <td><button onClick={() =>flightDel(flights._id)}>Delete Flight</button></td>
                        <button onClick={this.updateFlight}> Update Flight</button>
                        {/*<Link to='/flightSchedule'>
                            
                </Link> */}
                        
                    </tr>
                        )
                }
            </tbody>
        </table>


    </div>
)
    
}

