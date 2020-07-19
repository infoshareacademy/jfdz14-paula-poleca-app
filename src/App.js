import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar'
import Menu from './Menu'
import Form from './Modal'
import Events from './Events'

import './App.css';

function App() {
  return (
    <Container maxWidth="m">
      {/* <Events /> */}
      <Sidebar></Sidebar>
    
    </Container>
  );
}

export default App;
