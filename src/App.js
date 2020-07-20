import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './App.css';
import AppNavbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import Events from './Events';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <BrowserRouter>
      <Switch>

      <Container fluid>
        {/* <Row>
          <Col>
            <AppNavbar />
              <div style={{display:'flex', float: 'left'}}>
              <Sidebar />
              <Events />
            </div>
          </Col>
        </Row> */}

          <Row>
          <Col>
            <AppNavbar />
            <Row>

              <div className="col-3">
                <Sidebar />
              </div>

              <div className="col-9">
                {/* NavBar up */}
                <Route path="/events">
                  <Events />  
                </Route>
                <Route path="/favourite"><h2>Favourite</h2></Route>

                {/* SideBar */}
                <Route path="/statistics"><h2>Statystyki</h2></Route>
                <Route path="/cinema"><h2>Cinema</h2></Route>
                
              </div>             
            </Row>

          </Col>
        </Row>
        
      </Container> 

      </Switch>   
    </BrowserRouter>

    
  );
}

export default App;
