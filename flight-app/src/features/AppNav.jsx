//import { useContext } from 'react';
import { useSelector } from 'react-redux';
import { Nav, NavItem, NavLink, NavSection } from '../components/Nav';

// Creating the Navigation Bar
export const FlightNav = () => {
        //const theme = useContext(ThemeContext); // When the context Provider changes in App.jsx, this component will rerender

        const { userId } = useSelector(store => store);

        return (
            <Nav /*backgroundColor={theme.backgroundColor} color={theme.color}*/>
                <NavSection jc="flex-start">
                    <NavItem>
                        <NavLink to="/">Home</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/flightsched" transitionColor="#0000FF">Flight Schedule</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/update">Modify Flight</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink to="/help">FAQs</NavLink>
                    </NavItem>
                </NavSection>
                <NavSection jc="flex-end">
                    {/* If the userId is truthy, render the hello message, otherwise don't render anything */}
                    {userId && <NavItem>Welcome to the Frequent Flights Management System, {userId}!</NavItem>}
                    <NavItem>
                        Sign In
                    </NavItem>
                    <NavItem></NavItem>
                </NavSection>
            </Nav>
        );








}