import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar'
import Menu from './Menu'

import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Menu />
      <Sidebar></Sidebar>
      
    
    </Container>
  );
}

export default App;
