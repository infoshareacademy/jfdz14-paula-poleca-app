import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar'
import Menu from './Menu'
import Form from './Modal'
import Finder from './Finder/Finder'

import './App.css';

function App() {
  return (
    <Container maxWidth="m">
      <Sidebar></Sidebar>
      <Form></Form>
      <Finder />
    
    </Container>
  );
}

export default App;
