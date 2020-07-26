import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";

const AppNavbar = () => {

    return(

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Paula Poleca</Navbar.Brand>
            {/* for User logged In in Sprint-4 */}

            {/* <Nav className="mr-auto">
                <Nav.Link as={NavLink} to="/events">Events</Nav.Link>
            </Nav> */}
  </Navbar>
        );    
}

export default AppNavbar