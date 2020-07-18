import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Form from './Modal';
import PieChart from './components/Charts/PieChart';
import Example from './components/Charts/PieChart';
import Pie from './components/Charts/PieChart';
import SimplePieChart from './components/Charts/PieChart';
import SameDataComposedChart from './components/Charts/ComposedChart';
import SimpleBarChart from './components/Charts/BarChartNoPadding';


import './App.css';

function App() {
  return (
    <Container maxWidth="m">
      <Sidebar></Sidebar>
      <Form />
      <div align="center">PieChart
      <SimplePieChart />
      </div>
      <div align="center">BarChart
      <SimpleBarChart />
      </div>
      <div align="center">ComposedChart
      <SameDataComposedChart />
      </div>
      
    </Container>
  );
}

export default App;
