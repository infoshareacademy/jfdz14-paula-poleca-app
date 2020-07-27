import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './styles/App.css';
import AppNavbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';
import App from './App';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

class Router extends Component {

  render() {
    return(
    <BrowserRouter basename={Process.env.PUBLIC_URL}>
      <Switch>
        <React.Fragment>
          <Container fluid>
            <Row>
              <Col>
                <AppNavbar />
                <Row>
                  <div className="col-3">
                    <Sidebar />
                  </div>
                  <div className="col-9">
                    <App />
                  </div>             
                </Row>
              </Col>
            </Row>
          </Container> 
        </React.Fragment>
      </Switch>   
    </BrowserRouter>
    );
  }
}

export default Router;
