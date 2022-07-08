// ---- User Login ----
/* in order to update the details of a flight, the user must have the
    proper managerial credentials 
*/

import { useState, useRef } from "react";
import { useDispatch, useSelector } from 'react-redux';

export const UserLogin = () => {
    const [userId, setUserId] = useState('');
    const userIdRef = useRef();
    const flightIdRef = useRef();
    const removeFlightRef = useRef();
    const dispatcher = useDispatch();

    const modifyFlight = useSelector(store => store.modifyFlight);

    const handleSubmit = (event) => {
        // prevent the page from refreshing when the form is submitted
        event.preventDefault();
        // userIdRef.current.value
        dispatcher({type: 'SET_USERID', payload: userIdRef.current.value});
        userIdRef.current.value = null;
    }

    const addFlight = (e) => {
        e.preventDefault();
        dispatcher({type: 'ADD_FLIGHT', payload: flightIdRef.current.value});
        flightIdRef.current.value = null; 
    }

    const removeFlight = (e) => {
        e.preventDefault();
        dispatcher({type: 'REMOVE_FLIGHT', payload: removeFlightRef.current.value});
        removeFlightRef.current.value = null; 
    }

    return (
        <>
            {/* Form to submit user ID */}
            <form>
                <label htmlFor="userId"> Change User ID</label>
                <input id="userId" placeholder="Please enter your user ID" ref={userIdRef} />
                <button onClick={handleSubmit}>Set User ID</button>
            </form>

            {/* Form to add a new flight */}
            <form>
                <label htmlFor="addFlight">Add Friend</label>
                <input id="addFlight" placeholder="Please enter the new flight information" ref={flightIdRef} />
                <button onClick={addFlight}>Add Flight</button>
            </form>

            {/* Form to remove a flight from the schedule */}
            <form>
                <label htmlFor="removeFlight">Remove Friend</label>
                <input id="removeFlight" placeholder="Please enter the flight ID for the flight you would like to remove" ref={removeFlightRef} />
                <button onClick={removeFriend}>Remove Friend</button>
            </form>

            <ol>
                {modifyFlight.map((flight, index) => {
                    return (
                        <li key={index}>{flight}</li>
                    )
                })}
            </ol>
        
        
        </>
    )






}