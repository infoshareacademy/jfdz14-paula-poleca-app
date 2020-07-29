import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../styles/Navbar.css';
import logo from "./logo.png";




const AppNavbar = () => {

    return(
            <Navbar bg="primary" variant="dark">
                <Navbar.Brand href="/">
                <img
                    alt=""
                    src={logo}
                    width="32"
                    height="32"
                    className="d-inline-block align-top"
                />{' '}
                Paula Poleca
                </Navbar.Brand>

            </Navbar>


        );    
}

export default AppNavbar
 