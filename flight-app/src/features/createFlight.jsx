import React from "react";
import { useState } from "react";
import axios from 'axios';
import '../components/Form/index'




//page that will hold all of the update, add, delete, and search forms for flights
export const FlightModSystem = () => {
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

           // posts the new flight information to the URL
        axios.post('http://localhost:8085/flights', flightData).then((res) => {
            console.log(res.status);
            console.log(res.data.token);
        });

    /*handleUpdate = () => {
        const {id, flightID, planeModel, Pilot, departureDate, departureTime, departureAirport,
        arrivalDate, arrivalTime, arrivalAirport, capacity} = this.state; 
        axios.put(`http://localhost:8085/flights/${id}`, {
            flightID: {flightID},
            planeModel: {planeModel},
            Pilot: {Pilot},
            departureDate: {departureDate},
            departureTime: {departureTime},
            departureAirport: {departureAirport},
            arrivalDate: {arrivalDate},
            arrivalTime: {arrivalTime},
            arrivalAirport: {arrivalAirport},
            capacity: {capacity}


        })
        .then(res => {
            this.setState({ status: response.status })
        })
        .catch(error => {
            this.setState({errorMessage: error.message});
        })
    } */


      

        //update flight
        const {id, flightID, planeModel, Pilot, departureDate, departureTime, departureAirport,
            arrivalDate, arrivalTime, arrivalAirport, capacity} = this.state; 
            axios.put(`http://localhost:8085/flights/${id}`, {
                flightID: {flightID},
                planeModel: {planeModel},
                Pilot: {Pilot},
                departureDate: {departureDate},
                departureTime: {departureTime},
                departureAirport: {departureAirport},
                arrivalDate: {arrivalDate},
                arrivalTime: {arrivalTime},
                arrivalAirport: {arrivalAirport},
                capacity: {capacity} 
            })
            .then(res => {
                this.setState({ status: res.status })
            })
            .catch(error => {
                this.setState({errorMessage: error.message});
            })


    };

    // use a form to submit the data
    return (
        <div>
            {/* Include the Navigation Bar to navigate from page to page */}
            <h1><strong>Add New Flight</strong></h1>
            <div className="topnav">
            <a className="active" href = "home">Home</a>
            <a href ="flightSchedule">Flight Schedule</a>
            <a href ="update">Update Flight</a>
            <a href ="add">Add Flight</a>
            <a href="delete">Delete Flight</a>
            <a href ="contact">Contact</a>
            <a href ="help">Help</a>
            </div>
            
            {/* Create the Form 
            Style properties are located in the Form.css file*/}
                <div>
                
                <form className="form-inline" onSubmit={handleSubmit}>
                <h3>Please Enter the New Flight Details </h3>
                   <div className="form-group c1 required">
                    <label htmlFor="flightID">Flight ID
                        <input type="number" name="flightID" value={state.flightID} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c2 required">
                    <label htmlFor="planeModel">Plane Model
                        <input type="text" name="planeModel" value={state.planeModel} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c1 required">
                    <label htmlFor="Pilot">Pilot
                        <input type="text" name="Pilot" value={state.Pilot} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c2 required">
                    <label htmlFor="departureDate">Date of Departure
                        <input type="date" name="departureDate" value={state.departureDate} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c1 required">
                    <label htmlFor="departureTime">Time of Departure 
                        <input type="time" name="departureTime" value={state.departureTime} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c2 required">
                    <label htmlFor="departureAirport">Departure Airport
                        <input type="text" name="departureAirport" value={state.departureAirport} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c1 required">
                    <label htmlFor="arrivalDate">Date of Arrival
                        <input type="date" name="arrivalDate" value={state.arrivalDate} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c2 required">
                    <label htmlFor="arrivalTime">Time of Arrival
                        <input type="time" name="arrivalTime" value={state.arrivalTime} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c1 required">
                    <label htmlFor="arrivalAirport">Arrival Airport
                        <input type="text" name="arrivalAirport" value={state.arrivalAirport} onChange={handleChange}/>
                    </label>
                    </div>
                    <div className="form-group c2 required">
                    <label htmlFor="capacity">Flight Capacity
                        <input type="number" name="capacity" value={state.capacity} onChange={handleChange}/>
                    </label>
                    </div>
                    <button type="submit">Submit Flight</button>

                </form>
            </div>

            
        </div>
        
       
        
        
    )
}