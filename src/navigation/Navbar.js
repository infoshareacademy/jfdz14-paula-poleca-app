import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
// import Form from "react-bootstrap/Form";

const AppNavbar = () => {

    return(

        <Navbar bg="dark" variant="dark">
            <Navbar.Brand href="#home">Paula Poleca</Navbar.Brand>
            <Nav className="mr-auto">
                <Nav.Link>
                    <NavLink to="/events">Events</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/addEvent">Dodaj event</NavLink>
                </Nav.Link>
                <Nav.Link>
                    <NavLink to="/favourite">Favourite</NavLink>
                </Nav.Link>
            </Nav>
  </Navbar>
        );    
}

export default AppNavbar