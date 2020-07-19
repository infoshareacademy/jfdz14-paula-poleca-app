import React from 'react';
import './App.css';
import AppNavbar from './components/Navbar'
import Events from './Events';
import Sidebar from './components/Sidebar'
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function App() {
  return (
    <Container fluid>
      <Row>
        <Col>
          <AppNavbar />
          <div style={{display:'flex', float: 'left'}}>

            <Sidebar />
            <Events />
          </div>
        </Col>
      </Row>
        {/* <Row>
        <Col>
          <AppNavbar />
          <Row>
            <Col>
              <Sidebar />
            </Col>
            <Col>
              <Events />
            </Col>             
          </Row>

        </Col>
      </Row> */}
    </Container>
    
  );
}

export default App;
