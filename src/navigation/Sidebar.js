import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
    return(
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link to="/statistics">Statystyki</Nav.Link>
            <Nav.Link to="/cinema">Kino</Nav.Link>
            <Nav.Link to="/theater">Teatr</Nav.Link>
        </Nav>
    );
}

export default Sidebar