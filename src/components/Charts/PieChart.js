import React, { Component } from 'react';
import {
  PieChart,
  Pie, 
  Cell, 
  Legend, 
  } from 'recharts';
import styles from './Recharts.module.css';
const DATABASE_URL = 'https://paulapoleca-vamp.firebaseio.com/events.json';

const COLORS = [
  'lime',
  'yellow',
  'aqua'
  ];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central" >
    	{`${(percent * 100).toFixed(0)}%`} 
    </text>
  );
};
export default class SimplePieChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
  }
  componentDidMount() {
    fetch(DATABASE_URL)
      .then(response => response.json())
      .then(data => {
        const formattedData = Object.keys(data).map(key => ({ ...data[key], id: key}));
        
        const gdansk = formattedData.filter(data => data.place.name === "Gdańsk");
        const sopot = formattedData.filter(data => data.place.name === "Sopot");
        const gdynia = formattedData.filter(data => data.place.name === "Gdynia");
        
        this.setState({ 
          data: [
            {
              name: 'Gdańsk',
              value: gdansk.length
            },
            {
              name: 'Sopot',
              value: sopot.length
            },
            {
              name: 'Gdynia',
              value: gdynia.length
            },
          ] 
        })
      });
  }
  
  render() {

    return (
      <div style={{ width: '100%', height: 270}}>
    	<PieChart width={200} height={250} className={styles.pieChart} dataKey="index" >
        <Pie dataKey="value" 
          data={this.state.data}
          cx={90} 
          cy={100} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="#8884d8"
        >
        	{
          	this.state.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Legend align='center'/>
      </PieChart>
      </div>
    );
  }
}