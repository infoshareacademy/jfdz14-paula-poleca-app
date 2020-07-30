import React, { Component } from 'react';
import {
  PieChart, Pie, Cell, Legend
} from 'recharts';
import styles from './Recharts.module.css';

const data = [
  { name: 'Teatr', value: 400 },
  { name: 'Sztuka', value: 300 },
  { name: 'Muzyka', value: 300 },
  { name: 'Nauka', value: 200 },
  { name: 'Literatura', value: 350 },
  { name: 'Rozrywka', value: 100 },
  { name: 'Rekreacja', value: 150 },
  { name: 'Kino', value: 80 },
  { name: 'Inne', value: 120 },
];
const COLORS = [
  '#0088FE',
  '#00C49F',
  '#FFBB28',
  '#FFFF00',
  '#845EC2',
  '#F1681F',
  '#3BCF15',
  '#37EEF3',
  '#949999'
  ];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.7;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="black" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central" >
    	{`${(percent * 100).toFixed(0)}%`} 
    </text>
  );
};

export default class SimplePieChart extends Component {
  render() {
    return (
    	<PieChart width={600} height={400} className={styles.pieChart} dataKey="index">
      
        <Pie dataKey="value"
          data={data}
          cx={300} 
          cy={165} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={170} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
        <Legend/>
      </PieChart>
    );
  }
}