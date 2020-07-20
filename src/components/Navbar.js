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
                    <NavLink to="/favourite">Favourite</NavLink>
                </Nav.Link>
                <Nav.Link href="#features">wolne</Nav.Link>
            </Nav>
        {/* <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-info">Search</Button>
        </Form> */}
  </Navbar>
        );    
}

export default AppNavbar