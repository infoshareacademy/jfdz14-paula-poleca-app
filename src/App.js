import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import AppNavbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Events from './components/Events';
import Form from './Modal';
import Favourites from './components/Favourites';
import Finder from './components/Finders/Finder';
import { Modal } from 'react-bootstrap';

class App extends Component {

  state = {
    events: []
  }

  componentDidMount() {
      fetch(' https://isa.mateuszmarzecki.pl/v1/proxy?url=https://planerkulturalny.pl/api/rest/events.json ')
          .then(response => response.json())
          .then(events => {
              console.log(events);

              this.setState({
                  events: events
              });
          });
  }

  render() {
    return(
    <BrowserRouter>
      <Switch>

      <Container fluid>

        <Row>
          <Col>
            <AppNavbar />
            <Row>
              

            <div className="col-3">
              <Sidebar />
            </div>

              <div className="col-9">

                {/* NavBar up */}
                <Finder />
                <Route path="/events"><Events events={this.state.events}/></Route>
                <Route path="/addEvent"><Form /></Route>
                <Route path="/favourite"><Favourites /></Route>

                {/* SideBar */}
                <Route path="/statistics"><h2>Statystyki</h2></Route>
                <Route path="/cinema"><h2>Kino</h2></Route>
                <Route path="/theater"><h2>Teatr</h2></Route>
                
              </div>             
            </Row>
           

          </Col>
        </Row>
        
      </Container> 

      </Switch>   
    </BrowserRouter>
    );
  }
}

export default App;
