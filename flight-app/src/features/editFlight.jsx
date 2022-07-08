// File that finds an existing flight and lets the user update it

// import dependencies
import axios from 'axios';
import { get } from 'mongoose';
import React from 'react';
import { useState} from 'react';



// The flightEditor function will 
export const FlightEditor = () => {

    const [state, setState] = useState({
        flightID: "",
        planeModel: "",
        Pilot: "",
        departureDate: "",
        departureTime: "",
        departureAirport: "",
        arrivalDate: "",
        arrivalTime: "",
        arrivalAirport: "",
        capacity: ""
    }); 

    // handles errors upon submit 
    const handleChange = (event) => {
        const value = event.target.value;
        setState({
            ...state,
            [event.target.name]: value
        });
    };

    // Prevents the browser from refreshing on form Submit 
    const handleSubmit = (event) => {
        event.preventDefault();
        const flightData = {
            flightID: state.flightID,
            planeModel: state.planeModel,
            Pilot: state.Pilot,
            departureDate: state.departureDate,
            departureTime: state.departureTime,
            departureAirport: state.departureAirport,
            arrivalDate: state.arrivalDate,
            arrivalTime: state.arrivalTime,
            arrivalAirport: state.arrivalAirport,
            capacity: state.capacity

        }
   
        function deleteFlight(id) {
            get(`http://localhost:8085/flights/${id}`, {
                method: 'DELETE'
            }).then((result) => {
                result.json().then((res) => {
                    console.warn(res)
                    flightData(); 
                })
            })
        }

   // Formatted Form to Update the data
   return (

    <div>
        {/* Include the Navigation Bar to navigate from page to page */}
        <h1><strong>Flight Update System</strong></h1>
         <div class="topnav">
            <a class="active" href = "home">Home</a>
            <a href ="flightSchedule">Flight Schedule</a>
            <a href ="update">Flight Update System</a>
            <a href ="contact">Contact</a>
            <a href ="help">Help</a> 
            </div>

            <div className = "Delete">
                <h1>Delete Flight</h1>
                <table border ="1" style={{float: 'left'}}>
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
                        

                    </tbody>


                </table>

            </div>
            




    </div>
   )


}
}