import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './styles/App.css';
import AppNavbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';
import App from './App';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import firebase from 'firebase';
import './styles/Router.css';
import Share from './components/Share/Share';

class Router extends Component {

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
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      
        <React.Fragment>
          <Container fluid>
            <Row>
              <Col>
                <AppNavbar 
                user = {this.state.user}
                // handleOnSignOutClick = {this.handleOnSignOutClick}
                />
                <Row>
                  <div className="col-3">
                    <Sidebar user = {this.state.user}/>
                  </div>
                  <div className="col-9">
                    <App 
                    user = {this.state.user}/>
                  </div>             
                </Row>

              </Col>
            </Row>
            <Row>
                 <div className="footer">
                    <div align="center" margin='200'>
                      <Share />
                    </div>
                 </div>
            </Row>            
          </Container> 
        </React.Fragment>
        
    </BrowserRouter>
    );
  }
}

export default Router;
