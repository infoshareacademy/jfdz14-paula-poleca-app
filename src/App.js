import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Form from './Modal';
import PieChart from './components/Charts/PieChart';
import Example from './components/Charts/PieChart';
import Pie from './components/Charts/PieChart';
import SimplePieChart from './components/Charts/PieChart';


import './App.css';

function App() {
  return (
    <Container maxWidth="m">
      <Sidebar></Sidebar>
      <Form />
      {/* <PieChart/> */}
      <SimplePieChart />
      {/* <Pie/> */}
        {/* <Pie width={400} height={400} style={{background: "blue" }}/>
        <Example width={400} height={400} style={{background: "yellow" }}/> */}
    </Container>
  );
}

export default App;
