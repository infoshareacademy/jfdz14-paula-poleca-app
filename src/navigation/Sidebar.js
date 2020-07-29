import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
    return(
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link as={NavLink} to="/">Eventy</Nav.Link>
            <Nav.Link as={NavLink} to="/addEvent">Dodaj event</Nav.Link>
            <Nav.Link as={NavLink} to="/favourite">Ulubione</Nav.Link>            
            <Nav.Link as={NavLink} to="/statistics">Statystyki x</Nav.Link>
        </Nav>
    );
}

export default Sidebar