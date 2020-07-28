import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import '../styles/Sidebar.css';

const Sidebar = () => {
    return(
        <div className="wrapper">
        <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
        <Nav.Item >
        <Nav.Link as={NavLink} to="/events">Wydarzenia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as={NavLink} to="/addEvent">Nowe wydarzenie</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as={NavLink} to="/favourite">Ulubione</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link to="/statistics">Statystyki</Nav.Link>
        </Nav.Item>
        </Nav>

        </div>

    );
}

export default Sidebar

