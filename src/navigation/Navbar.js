import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import Navbar from "react-bootstrap/Navbar";
import '../styles/Navbar.css';
import logo from "./logo-white.png";
import firebase from 'firebase'
import { connect } from 'react-redux';
import { addAvatar } from '../state/reducer';

class AppNavbar extends React.Component {
    
    state = {
        user: '',
        url: '',
    }

    handleOnSignOutClick = () => {
        this.setState({
            url: '',
        }, () => {
            const initialAvatar = 'https://img.pngio.com/user-logo-png-user-computer-icons-clipart-download-800-800-user-logo-png-900_800.png';
            this.props.addNewAvatar(initialAvatar);
        });         
        firebase.auth().signOut();     
    }

    componentDidMount() {

        firebase.auth().onAuthStateChanged(user => {
            this.setState({
                user: user,
            }, () => {
                if(user) {
                    firebase.storage().ref('avatars/' + this.state.user.uid)
                        .getDownloadURL()
                        .then(url => {
                            this.setState({
                                url,
                            }, () => {
                                this.props.addNewAvatar(this.state.url);
                                this.setState({
                                    redirect: true,
                                });
                            })
                        });                      
                }
            });            
        });
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
                {/* <p>{this.props.user && `Hello ${this.props.user.email}`}</p> */}
                {
                    this.props.user ?

                    // <Navbar.Brand className='right' as={NavLink} to='/'>
                    <Navbar.Brand className='right'>
                        <p className='email'>Hello {this.props.user.email}</p>
                        {/* <p className="pImg"><img className="imgAvatar" src={avatar} alt="avatar"/></p> */}
                        <p className="pImg"><img className="imgAvatar" src={this.props.img} alt="avatar"/></p>

                        <Link to="/account" className="account">Account</Link>

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

const mapStateToProps = (state) => {
    return {img: state};
}
const mapDispatchToProps = {
    addNewAvatar: addAvatar
}
export default connect(mapStateToProps, mapDispatchToProps)(AppNavbar);
