import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar'
import Menu from './Menu'
import RangeSlider from './RangeSlider'

import './App.css';

function App() {
  return (
    <Container maxWidth="md">
      <Menu />
      <Sidebar></Sidebar>
      <RangeSlider />
      
    
    </Container>
  );
}

export default App;
