import React, {Component} from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import './styles/App.css';
import AppNavbar from './navigation/Navbar';
import Sidebar from './navigation/Sidebar';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import Events from './components/Events';
import Form from './components/Form';
import Favourites from './components/Favourites';

class App extends Component {

  state = {
    events: []
  }

  addFavourite = (id) => {
    console.log('addFavourite', id);

    this.setState({
      events: this.state.events.map(event => {
        if(event.id === id) {
          event.favourite = true;
        }
        return event;
      })
    })
  }

  componentDidMount() {
      fetch(' https://isa.mateuszmarzecki.pl/v1/proxy?url=https://planerkulturalny.pl/api/rest/events.json ')
          .then(response => response.json())
          .then(events => {
              console.log(events);
              const newEvents = events.map(event => {
                event.favourite = false;
                // console.log(event);
                return event;
              });
              this.setState({
                  events: newEvents,
              });
          });
  }

  render() {
    return(
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
                  <Events events={this.state.events} addFavourite={this.addFavourite} /></Route>
                <Route path="/addEvent"><Form /></Route>
                <Route path="/favourite"><Favourites events={this.state.events} /></Route>

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
