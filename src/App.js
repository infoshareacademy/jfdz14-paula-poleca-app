import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar'
import Menu from './Menu'
import Form from './Modal'

import './App.css';

function App() {
  return (
    <Container maxWidth="m">
      <Sidebar></Sidebar>
      <Form></Form>
    
    </Container>
  );
}

export default App;
