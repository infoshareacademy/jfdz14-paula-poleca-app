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

    const events = this.state.events.map(event => {
      if(event.id === id) {
        if(event.favourite) {
          this.removeLocalStorage(id);
        } else {
          this.addLocalStorage(id);
        }
        event.favourite = !event.favourite;
      }
      return event;
    });

    this.setState({
      events: events
    });
  }

  addLocalStorage = (id) => {
    let fav;
    if(localStorage.getItem('fav') === null) {
        fav = 0;
    } else {
        fav = localStorage.getItem('fav');
    }
    localStorage.setItem('fav_'+id, id);
    fav++;
    localStorage.setItem('fav', fav);
  }

  removeLocalStorage = (id) => {
    localStorage.removeItem('fav_'+id);
    let ile = localStorage.getItem('fav');
    ile--;
    localStorage.setItem('fav', ile);
  }

  readLocalStorage = (id) => {
    let idFromStorage = localStorage.getItem('fav_'+id);
    // console.log(idFromStorage);
    if(idFromStorage) return Number(idFromStorage);
  }

  componentDidMount() {
      fetch(' https://isa.mateuszmarzecki.pl/v1/proxy?url=https://planerkulturalny.pl/api/rest/events.json ')
          .then(response => response.json())
          .then(events => {
              console.log(events);
              const newEvents = events.map(event => {
                event.favourite = false;
                let idFromStorage = this.readLocalStorage(event.id);
                if(idFromStorage === event.id) {
                  event.favourite = true;
                }
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
                    <Events events={this.state.events} addFavourite={this.addFavourite} />
                </Route>

                <Route path="/addEvent">
                    <Form />
                </Route>

                <Route path="/favourite">
                    <Favourites events={this.state.events} addFavourite={this.addFavourite} />
                </Route>

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
