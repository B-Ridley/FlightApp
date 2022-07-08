import React from 'react';


export const Home = () => {
    return(
        <div>
        
        <div className="container">
            <div className="wrapper">
            <h1>Frequent Flights</h1>
                
            </div>
            
        </div>

        <div className="topnav">
            <a href = "home">Home</a>
            <a href ="flightSchedule">Flight Schedule</a>
            <a href ="update">Update Flight</a>
            <a href ="add">Add Flight</a>
            <a href="delete">Delete Flight</a>
            <a href ="contact">Contact</a>
            <a href ="help">Help</a>
            
        </div>
        {/*<h3 className='h3Nav'>Admin Flight Management System</h3>*/}
        
        <body>
            <div class="centerMe">
                <div>
                    <p></p>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <p></p>
                </div>
                <div>
                    <p></p>
                </div>
                <div className="info">
                <h2 >Admin Flight Management System</h2>
            <p><strong>Welcome to the flight management system</strong></p>

            <p ><strong>In this portal, you can check the flight schedule,
                add, update, and delete flights. 
                </strong></p>
                </div>
            </div>

            <a href="http://localhost:8086/flightSchedule" class="card-link"><button>Check Flight Schedule</button></a>
        </body>
        <style>
            
        </style>
        </div>

    
    );
}

