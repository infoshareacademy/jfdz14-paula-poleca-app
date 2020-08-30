import React from 'react'
import Container from '@material-ui/core/Container';
import TextField from '@material-ui/core/TextField';
import {Redirect, Link} from 'react-router-dom';
import Button from '@material-ui/core/Button';
import firebase from 'firebase'

class SignIn extends React.Component {

    state = {
        emial: '',
        password: '',
        redirect: false,
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
                .then(() => {
                    console.log('utowrozno konto')
                    this.setState({
                        redirect: true
                    })
                })
                .catch((error) => {
                    alert(error.message);
                })
        } else {
            firebase.auth()
                .signInWithEmailAndPassword(this.state.email, this.state.password)
                .then(() => {
                    console.log('zalogowano')
                    this.setState({
                        redirect: true
                    })
                })
                .catch((error) => {
                    alert(error.message);
                })
        }
    }

    render() {


        if (this.state.redirect) {
            return <Redirect to='/'/>
        }

        return(
            
             

             <Container component="main" maxWidth="xs">
                    <form noValidate onSubmit={this.handleOnSubmit}>
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
                            onSubmit = {this.handleOnSubmit}
                        
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
                            onSubmit = {this.handleOnSubmit}
                  
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
            
            
        );
    }
}

export default SignIn