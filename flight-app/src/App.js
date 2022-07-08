//import { useState } from 'react';
import React, { Component } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { FlightNav } from './features';
import { Contact, Home, Help, FlightSched, UpdateFlight} from './features';
import './components/Nav'
import { render } from '@testing-library/react';
import {FlightModSystem} from './features/createFlight'
import {DeleteFlight} from './features/deleteFlight'





//import ThemeContext, { themes }  from './contexts/ThemeContext' 

// React based function

class App extends Component {
  render() {
  return (
  <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/flightSchedule" element={<FlightSched />} />
        <Route path="/add" element={<FlightModSystem />} />
        <Route path="/update" element={<UpdateFlight />} />
        <Route path="/delete" element={<DeleteFlight />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/help" element={<Help />} />

     
        

      </Routes>
      
    
    
  </BrowserRouter>

  );
  
}
}


export default App;
