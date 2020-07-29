import React from 'react';
import Container from '@material-ui/core/Container';
import Sidebar from './Sidebar';
import Menu from './Menu';
import Form from './Modal';
import SimplePieChart from './components/Charts/PieChart';
import SimpleBarChart from './components/Charts/BarChartNoPadding';
import SimpleAreaCharts from './components/Charts/AreaChart';

import './App.css';

function App() {
  return (
    <Container maxWidth="m">
      <Sidebar></Sidebar>
      <Form />
      <div align="center">Wydarzenia w Trójmieście
      <SimplePieChart />
      </div>
    
      <div align="center">Ilość dodanych wydarzeń
      <SimpleAreaCharts />
      </div>
    
      <div align="center">Ilość zarejestrowanych użytkowników
      <SimpleBarChart />
      </div>
      
    </Container>
  );
}

export default App;
