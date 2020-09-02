import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {Redirect, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from 'firebase';
import Modal from 'react-bootstrap/Modal';
import ButtonBoot from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';
import {DATABASE_URL} from '..';

class SignIn extends React.Component {

    state = {
        email: '',
        password: '',
        redirect: false,
        isModalOpen: false,
        name: undefined,
        surname: undefined,
        city: undefined,
        user: null,
    }

    handleOnChange = (event) => {
        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleOnSubmit = (event) => {
        event.preventDefault();

        if (this.props.isSignUp) {
            firebase.auth()
                .createUserWithEmailAndPassword(this.state.email, this.state.password)
                .then((data) => {
                    console.log('utowrozno konto');
                    this.setState({user: data.user});
                    
                    this.setState({
                        email: '',
                        password: '',
                    });
                    this.handleShowModal();
                })
                .catch((error) => {
                    alert(error.message);
                })
        } else {
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then((data) => {
                    console.log('zalogowano');
                    this.setState({user: data.user});
                    this.setState({
                        redirect: true
                    })
                })
                .catch((error) => {
                    alert(error.message);
                })
        }
    }

    handleShowModal = () => {
        this.setState({
            isModalOpen: true,
        });
    }
    handleOnHide = () => {
        this.setState({
            isModalOpen: false,
        });
    }
    handleChangeForm = (event) => {
        this.setState({
            [event.target.name]: event.target.value,
        })        
    }
    handleModalForm = () => {

        const {name = 'brak', surname = 'brak', city = 'brak'} = this.state;
        const form = {name: name, surname: surname, city: city};

        // fetch(`${DATABASE_URL}/Users/${this.state.user.uid}.json`, {
        //     method: 'POST', 
        //     body: JSON.stringify(form)
        //   });

        var rootRef = firebase.database().ref().child('Users');
        var userRef = rootRef.child(this.state.user.uid);
		userRef.set(form, function(error) {
			if(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                console.error('Message: ' + errorMessage + ' ' + errorCode);
			} else {
				console.log('Success');
			}
        });
        this.handleOnHide();
    } 

    render() {

        if (this.state.redirect) {
            return <Redirect to='/'/>
        }

        return(
            <>
             <Container component="main" maxWidth="xs">
                    <form onSubmit={this.handleOnSubmit}>
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            id="email"
                            label="Email Address"
                            name="email"
                            autoComplete="email"
                            autoFocus
                            value = {this.state.email}
                            onChange = {this.handleOnChange}
                        />
                        <TextField
                            variant="outlined"
                            margin="normal"
                            required
                            fullWidth
                            name="password"
                            label="Password"
                            type="password"
                            id="password"
                            autoComplete="current-password"
                            value = {this.state.password}
                            onChange = {this.handleOnChange}
                        />
                        <Button
                            type="submit"
                            fullWidth
                            variant="contained"
                            color="primary"
                        >
                            {this.props.isSignUp ? 'Zarejestruj się!' : 'Zaloguj się!'}
                        </Button>
                        <div style={{ paddingTop: '20px' }} >
                            {this.props.isSignUp
                                ? <Link to='/sign-in'>Masz konto? Zaloguj się!</Link>
                                : <Link to='/sign-up'>Nie masz jeszcze konta? Zarejestruj się!</Link>
                            }
                        </div>
                    </form>
                </Container>

                <div className="text-left my-3" >
                    <Modal show={this.state.isModalOpen} onHide={this.handleOnHide}>
                        <Modal.Header><h2>Dodatkowe dane do konta</h2></Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group>
                                <Form.Label>Imię</Form.Label>
                                <Form.Control
                                    type="text"
                                    // {this.state.name === undefined 
                                    //     ? value='' 
                                    //     : value=this.state.name}  
                                    value={this.state.name === undefined ? '' : this.state.name} 
                                    name="name" onChange={this.handleChangeForm}
                                />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label>Nazwisko</Form.Label>
                                <Form.Control 
                                    value={this.state.surname === undefined ? '' : this.state.surname} 
                                    name="surname" onChange={this.handleChangeForm}
                                />
                                </Form.Group>

                                <Form.Group>
                                <Form.Label>Miasto</Form.Label>
                                <Form.Control 
                                    value={this.state.city === undefined ? '' : this.state.city} 
                                    name="city" onChange={this.handleChangeForm}
                                />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <ButtonBoot variant="primary" onClick={this.handleModalForm}>Add</ButtonBoot>
                            <ButtonBoot onClick={this.handleOnHide}>Close</ButtonBoot>
                        </Modal.Footer>
                    </Modal>    
                </div>
            </>
            
        );
    }
}

export default SignIn