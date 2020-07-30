import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";
import '../styles/Sidebar.css';
import planner from "./planner.png";
import addNew from "./addNew.png";
import favourite from "./favourite.png";
import stats from "./stats.png";


const Sidebar = () => {
    return(
        <div className="wrapper">
        <Nav variant="pills" defaultActiveKey="/home" className="flex-column">
        <Nav.Item >
        <Nav.Link as={NavLink} to="/"> <img src={planner} height="25"/>Wydarzenia</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as={NavLink} to="/addEvent"> <img src={addNew} height="25"/>Nowe wydarzenie</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as={NavLink} to="/favourite"> <img src={favourite} height="25"/>Ulubione</Nav.Link>
        </Nav.Item>
        <Nav.Item>
        <Nav.Link as={NavLink} to="/statistics"><img src={stats} height="25"/>Statystyki</Nav.Link>
        </Nav.Item>
        </Nav>

        </div>

    );
}

export default Sidebar

