import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../styles/Navbar.css';

const AppNavbar = () => {

    return(
        <div style={{paddingLeft:"0", paddingRight:"0"}}>
            <Navbar className="mr-auto" bg="light" variant="light">
            <Navbar.Brand className="navbar" to="/">
                      <img 
                      alt=""
                      src="../img/logo-white.png"
                      width="30"
                      height="30"
                      className="d-inline-block align-top"

                    />
                    Paula Poleca</Navbar.Brand>
            <Nav className="mr-auto">
                {/* <Nav.Link as={NavLink} to="/events">Events</Nav.Link>
                <Nav.Link as={NavLink} to="/addEvent">Dodaj event</Nav.Link>
                <Nav.Link as={NavLink} to="/favourite">Favourite</Nav.Link> */}
            </Nav>
            </Navbar>
        </div>


        );    
}

export default AppNavbar