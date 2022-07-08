/* The FlightSched function returns the flight data in table format
 * 
 * Some functions that will be performed on the flight schedule:
 * 
 * get() - fetches the flight list from the local host using axios 
 * post() - posts a new flight to the flight list and adds it to the Flight Schedule
 * put() - the put method gets a current flight by ID and allows user to update the flight details
 * delete() - delete grabs a flight by ID and deletes it 

*/

import { useEffect, useState } from 'react';
import React from 'react'
import axios from 'axios';


// Displays the entire flight schedule
export const FlightSched = () => {
   
   
   
    const [flights, setFlights] = useState([]);

    // once the component loads, get all flights and display them in a table
    useEffect(() => {
        axios.get('http://localhost:8085/flights') 
          .then(res => setFlights(res.data))
          .catch((err) => console.log(err))
            //getFlights(); 
            //flightDel(); 
   }, []);



// Delete
const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8085/flights/${id}`)
        .then(res => setFlights(res.data));
        return flights.id; 
    }


   //Format and return the flight schedule
   const flightInfo = flights.map((flights, index) => {
            return(
              <> 
              
              <div class="card">
                    <div class="card-body">
                        <h5 class="card-title"><b>Flight ID: {flights.flightID}</b> </h5>
                        <p class="card-text">Plane Model: {flights.planeModel}</p>
                        <p class="card-text">Pilot: {flights.Pilot}</p>
                        <p class="card-text">Departure Date: {flights.departureDate}</p>
                        <p class="card-text">Departure Time: {flights.departureTime}</p>
                        <p class="card-text">Departure Airport: {flights.departureAirport}</p>
                        <p class="card-text">Arrival Date: {flights.arrivalDate}</p>
                        <p class="card-text">Arrival Time: {flights.arrivalTime}</p>
                        <p class="card-text">Arrival Airport: {flights.arrivalAirport}</p>
                        <p class="card-text">Flight Capacity:<b>{flights.capacity}</b>/120</p>
                        <a href="http://localhost:8086/update" class="card-link"><button>Update</button></a>
                        <a href="http://localhost:8086/delete" className="card-link"><button onClick={handleDelete(flights.id)}>Delete</button></a>
                        
                    </div>
            </div> 
            
            </> 
           
           /*  <div className="card">
                <div>
                    <b>Flight ID:</b><b>{flights.flightID}</b>
                    </div>
                   <div>
                    <div>Plane Model: {flights.planeModel}</div>
                    </div>
                    <div>
                    <div>Pilot: {flights.Pilot}</div>
                    </div>
                    <div>
                    <div>Departure Date: {flights.departureDate}</div>
                    </div>
                    <div>
                    <div>Departure Time: {flights.departureTime}</div>
                    </div>
                    <div >
                    <div>Departure Airport: {flights.departureAirport}</div> 
                    </div>
                    <div>
                    <div>Arrival Date: {flights.arrivalDate}</div>
                    </div>
                    <div>
                    <div>Arrival Time: {flights.arrivalTime}</div>
                    </div>
                    <div>
                    <div>Arrival Airport: {flights.arrivalAirport}</div>
                    </div>
                    <div>
                    <div>Flight Capacity: <b>{flights.capacity}</b>/120</div>
                    </div>
                    <div>
                    <a href="http://localhost:8086/update" class="card-link"><button>Update</button></a>
                    <a href="http://localhost:8086/delete" className="card-link"><button onClick={handleDelete(flights.id)}>Delete</button></a>
                    {/*<div><button onClick={handleDelete(flights.id)}>Delete</button></div> */
            //</div>  
                    
                    
                    

           // </div> 
            
              
               )

        

   })

    
       return (
            
            <div>
            
                <h1>Flight Schedule</h1>
                <div className="topnav">
                    <a class="active" href = "home">Home</a>
                    <a href ="flightSchedule">Flight Schedule</a>
                    <a href ="update">Update Flight</a>
                    <a href ="add">Add Flight</a>
                    <a href="delete">Delete Flight</a>
                    <a href ="contact">Contact Us</a>
                    <a href ="help">Help</a>
        </div>
        <div></div>

                {/*<body>
                    
                    <div border="1" class="card">
                        
                        <div class="schedContainer">
                            <h4><b>Flight ID</b></h4>
                            <p>Plane Model</p>
                            <p>Pilot</p>
                            <p>Departure Date</p>
                            <p>Departure Time</p>
                            <p>Departure Airport</p>
                            <p>Arrival Date</p>
                            <p>Arrival Time</p>
                            <p>Arrival Airport</p>
                            <p>Capacity</p>
                         </div>
                    </div>
                   
       </body> */}
               
                {flightInfo}
                
        
        </div>
        
                
            
       )  
  
       } 

      
