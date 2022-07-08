import React from "react";
import NumericInput from "react-numeric-input";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


//page that will hold all of the update, add, delete, and search forms for flights
export const UpdateFlight = () => {
    const[flight, setFlight] = useState('');

useEffect(() => {
    axios.get('http://localhost:8085/flights')
    .then(res => setFlight(res.data));
})

//get current state of variables 
const nav = useNavigate();
const flightIdRef = useRef();
const modelRef = useRef(); 
const pilotRef = useRef();
const depDateRef = useRef();
const depTimeRef = useRef();
const depAirRef = useRef();
const arrDateRef = useRef();
const arrTimeRef = useRef();
const arrAirRef = useRef();
const capacityRef = useRef();
   
    
   const handleSubmit = async (event) => {
        // prevents the browser from refreshing when submitting the form
        console.log('handleSubmit function ran');
        event.preventDefault();

        try{
            await axios.put('http://localhost:8085/',
                {flightID: flightIdRef.current.value, planeModel: modelRef.current.value, Pilot: pilotRef.current.value, 
                     departureDate: depDateRef.current.value, departureTime: depTimeRef.current.value, departureAirport: depAirRef.current.value,
                     arrivalDate: arrDateRef.current.value, arrivalTime: arrTimeRef.current.value, arrivalAirport: arrAirRef.current.value, 
                     capacity: capacityRef.current.value})
               nav('../', {replace: true});
               console.log("response.data") 
                    
      } catch(error) {
           console.log('Something went wrong');
       }
   }
    return (
        
       <div>
        <h1><strong>Flight Update System</strong></h1>
         <div class="topnav">
         <a href = "home">Home</a>
            <a href ="flightSchedule">Flight Schedule</a>
            <a href ="update">Update Flight</a>
            <a href ="add">Add Flight</a>
            <a href="delete">Delete Flight</a>
            <a href ="contact">Contact</a>
            <a href ="help">Help</a>

        </div>
        <h2>Welcome to the Flight Updating System</h2>
       
        <body>
            <form className="MyForm" onSubmit={handleSubmit}>
                <label><strong>Add New Flight</strong></label>
                <div>
            <label>Flight ID</label>        
            <input type="number" id="flightID" ref={flightIdRef} placeholder="Enter the flight ID" required />
            </div>
            <div>
                <label>Plane Model</label>
                <input type="text" id="planeModel" ref={modelRef} placeholder="Enter plane model" />
            </div>
            <div>
                <label>Pilot</label>
                <input type="text" id="Pilot" ref={pilotRef} placeholder="Enter the Pilot's Name" />
            </div>
            <div>
                <label>Departure Date</label>
                <input type="date" id="departureDate" ref={depDateRef} placeholder="Enter the Date of Departure" />
            </div>
            <div>
                <label>Departure Time</label>
                <input type="time" id="departureTime" ref={depTimeRef} placeholder="Enter the Time of Departure" />
            </div>
            <div>
                <label>Departure Airport</label>
                <input type="text" id="departureAirport" ref={depAirRef} placeholder="Enter the Departure Airport" />
            </div>
            <div>
                <label>Arrival Date</label>
                <input type="date" id="arrivalDate" ref={arrDateRef} placeholder="Enter the Date of Arrival" />
            </div>
            <div>
                <label>Arrival Time</label>
                <input type="time" id="arrivalTime" ref={arrTimeRef} placeholder="Enter the Time of Arrival" />
            </div>
            <div>
                <label>Arrival Airport</label>
                <input type="text" id="arrivalAirport" ref={arrAirRef} placeholder="Enter the Arrival Airport" />
            </div>
            <div>
                <label>Flight Capacity</label>
            <NumericInput min={0} max={120} id="capacity" value={capacityRef} placeholder="Enter the flight capacity" required />
            </div>  

            <button type="submit" onClick={handleSubmit}>Submit</button>
            
            </form>
        </body>
        
       </div> 
    )
}