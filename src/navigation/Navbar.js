import React from 'react';
import { NavLink } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import '../styles/Navbar.css';
import logo from "./logo-white.png";
import firebase from 'firebase'




class AppNavbar extends React.Component {
    state = {
        user: null
    }

    

    handleOnSignOutClick = () => {
        firebase.auth().signOut();
    }


    componentDidMount() {
        const unsubscribe  = firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user
            })
        });



        this.setState({
            unsubscribe 
        })
    }

    componentWillUnmount() {
        this.state.unsubscribe();
    }


    render() {

        return(
            <Navbar className="text">
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
                <p>{this.state.user && `Hello ${this.state.user.email}`}</p>
                {
                    this.state.user ?
                    <Navbar.Brand as={NavLink} to='/'>
                        <button onClick={this.handleOnSignOutClick}>Sign out</button>
                    </Navbar.Brand>
                    : 
                    <Navbar.Brand as={NavLink} to='sign-in'>
                        <button>Sign in</button>
                    </Navbar.Brand>
                }
               

            </Navbar>


        );    
    }
}

export default AppNavbar
