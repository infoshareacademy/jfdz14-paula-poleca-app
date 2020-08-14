import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../styles/Navbar.css';
import logo from "./logo-white.png";




const AppNavbar = () => {

    return(
            <Navbar style={{backgroundColor :"#008000"}}>
                <Navbar.Brand as={NavLink} to="/">
                <img
                    alt=""
                    src={logo}
                    width="32"
                    height="32"
                    className="d-inline-block align-top"
                />
                Paula Poleca
                </Navbar.Brand>

            </Navbar>


        );    
}

export default AppNavbar
 