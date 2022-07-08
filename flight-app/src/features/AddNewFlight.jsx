import { useEffect, useState, useRef } from 'react';
import axios from 'axios'; 
import { useNavigate } from 'react-router-dom';

// Create a new Flight
export const AddNewFlight = async (formData) => {
    
    const url = 'http://localhost:8085/';
    const [flights, addFlights] = useState([]);
    //const flightRef = useRef();
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
    


    // Track and add the new flights to the Flight Schedule
    //useEffect(() => {
    //    axios.post(url)
   //         .then(res => addFlights(res.data));
  // }, []);

   async function handleSubmit (event) {
    // prevents the browser from refreshing on submit
    event.preventDefault();

    try{
      await axios.post(url,
      {formData:{flightID: flightIdRef.current.value, planeModel: modelRef.current.value, pilot: pilotRef.current.value, 
        departureDate: depDateRef.current.value, departureTime: depTimeRef.current.value, departureAirport: depAirRef.current.value,
      arrivalDate: arrDateRef.current.value, arrivalTime: arrTimeRef.current.value, arrivalAirport: arrAirRef.current.value, 
      capacity: capacityRef.current.value}})
      nav('../', {replace: true});
    } catch(error) {
      if (error.message.indexOf("0") !== -1)
      {
        alert("This flight number is already in use");
      }
      if (error.name === "mongoose:validatorError") {
        alert("Please enter the required information")
      }
    }
   };

   //const handleChange = (event) => {
    //addFlights({
   // ...flights,
   // [event.target.name]: event.target.value
  //  });

   //}; 

   const addFlightForm = flights.map((flights, index) => {
     return(  
       <form>
             <label>Please enter the new flight information</label>
            <input type="text" id="flightID" value={flights._id} placeholder="Enter the flight ID" required></input>
            <input type="text" id="planeModel" value={flights.planeModel} placeholder="Enter the plane model"></input>
            <input type="text" id="Pilot" value={flights.Pilot}placeholder="Enter the flight pilot"></input>
            <input type="date" id="departureDate" value={flights.departureDate} placeholder="Enter the departure date" required></input>
        {/*<input value={flights.flightID}></input>
        <input value={flights.planeModel}></input>
        <input value={flights.Pilot}></input>
        <input value={flights.flight.departureDate}></input>
        <input value={flights.flight.departureTime}></input>
        <input value={flights.flight.departureAirport}></input>
        <input value={flights.flight.arrivalDate}></input>
        <input value={flights.flight.arrivalTime}></input>
        <input value={flights.flight.arrivalAirport}></input>
     <input value={flights.capacity}></input> */}
        

       </form>
     ) 
     
   
  }) 

  /*return(
    <div>
        <h1>Flight Management System</h1>
        <div class="topnav">
            <a class="active" href = "home">Home</a>
            <a href ="flightSchedule">Flight Schedule</a>
            <a href ="contact">Contact Us</a>
            <a href ="help">Help</a>

        </div>
        <h2>Add New Flight</h2>
        <form method="post" action="/getFlight" onSubmit={handleSubmit}>
            <label>Please enter the new flight information</label>
            <input type="text" id="flightID" placeholder="Enter the flight ID" required></input>
            <input type="text" id="planeModel"  placeholder="Enter the plane model"></input>
            <input type="text" id="Pilot" placeholder="Enter the flight pilot"></input>
            <input type="date" id="departureDate" placeholder="Enter the departure date" required></input>
            <input type="text" id="departureTime" placeholder="Enter the departure time" required></input>
            <input type="text" id="departureAirport" placeholder="Enter the departure airport" required></input>
            <input type="date" id="arrivalDate" placeholder="Enter the arrival date" required></input>
            <input type="text" id="arrivalTime"  placeholder="Enter the arrival time" required></input>
            <input type="text" id="arrivalAirport"  placeholder="Enter the arrival airport" required></input>
            <input type="text" id="capacity" placeholder="Enter the flight capacity" required></input>
            <input type="submit" value="Add Flight"></input>
        </form>
        
    </div> 
   ) */
  
}


  
 
