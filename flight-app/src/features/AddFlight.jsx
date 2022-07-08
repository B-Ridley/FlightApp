import axios from 'axios';
import { React, useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
//import { useDispatch, useSelector } from 'react-redux';
import { FlightSched } from './FlightSched'

const url = 'http://localhost:8085/';


// Find movie by an Id and post it on the Flight update page
export const addFlightByIdTable = async () => {
    const router = require('express').Router();

    router.get('/:id', async (req, res) => {
        try {
            const flightId = await FlightSched(req.body);
            res.status(201).json({_id: flightId});
        } catch (err) {
            res.status(err?.status || 500).json(err);
        }
    })

    return (
        <form>
            <label htmlFor="flightbyid">Find Flight By Id</label>
            <div>
                <input id="id" type="number" placeholder="Please enter the flight id number" />
            </div>
            <input type="submit" value="Submit Form" />
        </form>
    )
    
}


// Post a new flight and add it to the Flight Schedule
export const AddFlightTable = async () => {

    const [flights, postFlight] = useState([]);
    useEffect(() => {
        axios.post(url)
            .then(res => postFlight(res.data));
   }, []);


   const flightIdRef = useRef();
    const planeModelRef = useRef();
    const flightPilotRef = useRef();
    const departDateRef = useRef();
    const departTimeRef = useRef();
    const departAirRef = useRef(); 
    const arrDateRef = useRef();
   const arrTimeRef = useRef();
   const arrAirRef = useRef(); 
    const flightCapRef = useRef(); // the flight capacity ref  

    const nav = useNavigate();

    async function handleSubmit (event) {
        // prevents the browser from refreshing when submitting the form
        event.preventDefault();
    

       // await the new flight creation info 
       try {
        await axios.post('http://localhost:8085/',
       
            {flightID: flightIdRef.current.value, planeModel: planeModelRef.current.value, 
                Pilot: flightPilotRef.current.value, departureDate: departDateRef.current.value,
                departureTime: departTimeRef.current.value, departureAirport: departAirRef.current.value,
                arrivalDate: arrDateRef.current.value, arrivalTime: arrTimeRef.current.value,
                arrivalAirport: arrAirRef.current.value, capacity: flightCapRef.current.value });
            nav('../', {replace: true}); 
           
            
            
       } catch(error) {
        console.log(error);
       } 

    return (
        <form className = "flightForm" onSubmit = {handleSubmit}>
            <div>
                <h1> Add a New Flight</h1>
                <label htmlFor="flightID"> Flight ID</label>
                <input type = "text" id="flightNumber" ref={flightIdRef} />

                <label htmlFor="planeModel"> Plane Model</label>
                <input type = "text" id="planeModel" ref={planeModelRef} />

                <label htmlFor="departureDate"> Departure Date</label>
                <input type = "date" id="departureDate" ref={departDateRef} />

                <label htmlFor="departureTime"> Departure Time</label>
                <input type = "text" id="departureTime" ref={departTimeRef} />

                <label htmlFor="departureAirport"> Departure Airport</label>
                <input type = "text" id="departureAirport" ref={departAirRef} />

                <label htmlFor="arrivalDate"> Arrival Date</label>
                <input type = "date" id="arrivalDate" ref={arrDateRef} />

                <label htmlFor="arrivalTime"> Arrival Time</label>
                <input type = "text" id="arrivalTime" ref={arrTimeRef} />

                <label htmlFor="arrivalAirport"> Arrival Airport</label>
                <input type = "text" id="arrivalAirport" ref={arrAirRef} />

                <label htmlFor="capacity"> Flight Capacity</label>
                <input type = "text" id="capacity" ref={flightCapRef} />


                <input type="submit" value="Add Flight" />

            </div>
        </form>
    )
}
}
