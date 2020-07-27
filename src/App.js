import React, {Component} from 'react';
import { Route } from 'react-router-dom';
import './styles/App.css';
import Events from './components/Events';
import Form from './components/Form';
import Favourites from './components/Favourites';
import Statistics from './components/Statistics';

class App extends Component {

  state = {
    events: []
  }

  addFavourite = (id) => {

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
    if(idFromStorage) return Number(idFromStorage);
  }

  componentDidMount() {
      fetch(' https://isa.mateuszmarzecki.pl/v1/proxy?url=https://planerkulturalny.pl/api/rest/events.json ')
          .then(response => response.json())
          .then(data => {
              let events = data;
              // let events = data.slice(0,10);
              // console.log(events);
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
      <React.Fragment>

          {/* NavBar */}
          <Route basename={Process.env.PUBLIC_URL} exact path="/">
              <Events events={this.state.events} addFavourite={this.addFavourite} />
          </Route>
          <Route path="/addEvent">
              <Form />
          </Route>
          <Route path="/favourite">
              <Favourites events={this.state.events} addFavourite={this.addFavourite} />
          </Route>

          {/* SideBar */}
          <Route path="/statistics">
            <Statistics />
          </Route>

      </React.Fragment>
    );
  }
}

export default App;
