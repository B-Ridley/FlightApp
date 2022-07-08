//flightReducer file that sets the conditions for modifying the flight information 

const initialState = {
    flights: []

};

//flightReducer should return the new state for this reducer
export const flightReducer = (state=initialState, action) => {
    switch(action.type) {
        case 'ADD_FLIGHT': 
            return {...state, flights: [...state.flights, action.payload]};
        case 'REMOVE_FLIGHT':
            return {...state, flights: state.flights?.filter(flights => flights !== action.payload)};
        default:
            return state; // Returns the previous state (make no changes)
            
    }
}