import React, {Component} from 'react';
import { Route, Switch } from 'react-router-dom';
import './styles/App.css';
import Events from './components/Events';
import Form from './components/Form';
import Favourites from './components/Favourites';
import Statistics from './components/Statistics';
import ErrorPage from './components/ErrorPage';
//import Share from './components/Share/Share';
import SignInn from './components/SignIn';
import Account from './components/Account';

import {DATABASE_URL} from './index';
import firebase from 'firebase';

class App extends Component {

  state = {
    events: [],
    loading: true,
    user: null,
    uid: null,    
  }

  getFetch = () => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      this.setState({
        unsubscribe,
        user,   
      }, () => {
        fetch(`${DATABASE_URL}/events.json`)
        .then(response => response.json())
        .then(data => {
            let events = Object.keys(data).map(key => ({ ...data[key], id: key}));
            let uid = null;
            if(this.state.user) { 
              this.setState({
                uid: this.state.user.uid,
              });
              uid = this.state.user.uid; 
            }  
            var starCountRef = firebase.database().ref('person/'+`${uid}`);
            let obj = null;

            this.setState({
                loading: false,
            }, () => {
            starCountRef.once('value', function(snapshot) {
                obj = snapshot.val();             
                }).then(data => {
                  if(obj !== null) {
                    let tab = Object.keys(obj).map(key => ({ id: key, ...obj[key] }));
                    events = events.map(event => {
                      for(let i=0; i<tab.length; i++) {
                        if(tab[i].fav === event.id) {
                           event.favourite = true;
                        }
                      }
                      return event;
                    });
                  }
                  this.setState({events: events,loading: false,})
                });
            });          
        });        
      });
    }); 
  } 
  
  addFavourite = (findId) => {
    const uid = this.state.uid;
    var starCountRef = firebase.database().ref('person/'+`${this.state.uid}`);
    let obj = null;
    starCountRef.once('value', function(snapshot) {
        obj = snapshot.val();
        if(obj !== null) {
            let tab = Object.keys(obj).map(key => ({ id: key, ...obj[key] }));
            let favouriteObj = tab.find(el => {
                return findId === el.fav
            }); 
            if(favouriteObj !== undefined) {
                fetch(`${DATABASE_URL}/person/${uid}/${favouriteObj.id}.json`, {
                    method: 'DELETE', 
                });                      
            } else {
                fetch(`${DATABASE_URL}/person/${uid}.json`, {
                    method: 'POST', 
                    body: `{"fav": "${findId}"}`,
                });                   
            }
            return false;                            
        } else {
          fetch(`${DATABASE_URL}/person/${uid}.json`, {
              method: 'POST', 
              body: `{"fav": "${findId}"}`,
            })
        }
      }).then(() => {this.getFetch()})
  }  

  componentDidMount() {
    this.getFetch();
  }

  // componentWillUnmount() {
    // this.state.unsubscribe();
  // }

  render() {
    return(
      <React.Fragment>

        <Switch>
           {/* NavBar */}
          <Route exact path="/">
              <Events 
                events={this.state.events} 
                loading={this.state.loading} 
                addFavourite={this.addFavourite} 
              />
          </Route>
          <Route exact path="/addEvent" component={Form}>
              {/* <Form /> */}
          </Route>
          <Route exact path="/favourite">
              <Favourites 
                events={this.state.events} 
                addFavourite={this.addFavourite} 
              />
          </Route>

          {/* SideBar */}
          <Route path="/statistics">
            <Statistics />
          </Route>

          <Route path="/sign-in">
            <SignInn />
          </Route>

          <Route path="/sign-up">
            <SignInn isSignUp/>
          </Route>

          <Route path="/account">
            <Account user={this.state.user}/>
          </Route>

          <Route component={ErrorPage} />          
        </Switch>

      </React.Fragment>
    );
  }
}

export default App;
