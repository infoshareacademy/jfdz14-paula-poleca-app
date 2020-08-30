import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Events from './components/Events';
import Forms from './components/Form';
import Favourites from './components/Favourites';
import Statistics from './components/Statistics';
import ErrorPage from './components/ErrorPage';
// import Share from './components/Share/Share';

class App extends Component {

  state = {
    events: [],
    loading: true,
  }

  fetchData = () => {
    fetch('https://paulapoleca-vamp.firebaseio.com/events.json')
    .then(response => { 
      return response.json()})
    .then(data => {
        let events = Object.keys(data).map(key => ({ ...data[key], id: key}));
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
            loading: false,
        });
    });
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
    this.fetchData()
      // fetch('https://paulapoleca-vamp.firebaseio.com/events.json')
      //     .then(response => { 
      //       return response.json()})
      //     .then(data => {
      //         let events = Object.keys(data).map(key => ({ ...data[key], id: key}));
      //         console.log(events);
      //         const newEvents = events.map(event => {
      //           event.favourite = false;
      //           let idFromStorage = this.readLocalStorage(event.id);
      //           if(idFromStorage === +event.id) {
      //             event.favourite = true;
      //           }
      //           return event;
      //         });
      //         this.setState({
      //             events: newEvents,
      //             loading: false,
      //         });
      //     });
  }

  render() {
    return(
      <React.Fragment>

        <Switch>
           {/* NavBar */}
          <Route exact path="/">
              <Events events={this.state.events} loading={this.state.loading} addFavourite={this.addFavourite} />
          </Route>
          <Route exact path="/addEvent">
              <Forms onAdd={this.fetchData} />
          </Route>
          <Route exact path="/favourite">
              <Favourites events={this.state.events} addFavourite={this.addFavourite} />
          </Route>

          {/* SideBar */}
          <Route path="/statistics">
            <Statistics />
          </Route>

          <Route component={ErrorPage} /> 
                  
        </Switch>

        {/* <div align="center" margin='200'>
          <Share />
        </div> */}

      </React.Fragment>
    );
  }
}

export default App;
