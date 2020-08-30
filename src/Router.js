import React, {Component} from 'react';
import { BrowserRouter, Switch } from 'react-router-dom';
import './styles/App.css';
import AppNavbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';
import App from './App';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import './styles/Router.css';
import Share from './components/Share/Share';

class Router extends Component {

  render() {
    return(
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      
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
            <Row>
                 {/* <div className="col"> */}
                 {/* <nav class="navbar navbar-expand navbar-dark bg-secondary">Footer</nav> */}
                 {/* </div> */}
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
