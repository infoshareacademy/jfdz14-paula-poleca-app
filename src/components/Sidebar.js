import React from 'react'
import { NavLink } from 'react-router-dom';
import Nav from "react-bootstrap/Nav";

const Sidebar = () => {
    return(
        <Nav defaultActiveKey="/home" className="flex-column">
            <Nav.Link>
                    <NavLink to="/statistics">Statystyki</NavLink>
            </Nav.Link>
            <Nav.Link>
                    <NavLink to="/cinema">Kino</NavLink>
            </Nav.Link>
            {/* <Nav.Link eventKey="disabled" disabled>
                Disabled
            </Nav.Link> */}
        </Nav>
    );
}

export default Sidebar