import React from 'react';
import ReactDOM from 'react-dom';
import './styles/index.css';
import Router from './Router';
import firebase from 'firebase';


  var firebaseConfig = {
    apiKey: "AIzaSyARBazq6RwkjdurMOTneqvPgnRhfE4YIIE",
    authDomain: "paulapoleca-vamp.firebaseapp.com",
    databaseURL: "https://paulapoleca-vamp.firebaseio.com",
    projectId: "paulapoleca-vamp",
    storageBucket: "paulapoleca-vamp.appspot.com",
    messagingSenderId: "867682072188",
    appId: "1:867682072188:web:b769eb89ac43db5f8c7bf9"
  };

  export const DATABASE_URL = firebaseConfig.databaseURL;

  firebase.initializeApp(firebaseConfig);



ReactDOM.render(
  <React.StrictMode>
    <Router />
  </React.StrictMode>,
  document.getElementById('root')
);

