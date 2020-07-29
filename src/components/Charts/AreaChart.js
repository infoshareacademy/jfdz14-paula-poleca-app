import React, { Component } from 'react';
import {
  AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';
import styles from './Recharts.module.css';

const data = [
  {
    name: 'Pn', 'Dodano wydarzeń': 250, pv: 2400, amt: 2400,
  },
  {
    name: 'Wt', 'Dodano wydarzeń': 400, pv: 1398, amt: 2210,
  },
  {
    name: 'Śr', 'Dodano wydarzeń': 300, pv: 9800, amt: 2290,
  },
  {
    name: 'Cz', 'Dodano wydarzeń': 500, pv: 3908, amt: 2000,
  },
  {
    name: 'Pi', 'Dodano wydarzeń': 280, pv: 4800, amt: 2181,
  },
  {
    name: 'So', 'Dodano wydarzeń': 350, pv: 3800, amt: 2500,
  },
  {
    name: 'Ni', 'Dodano wydarzeń': 500, pv: 4300, amt: 2100,
  },
];

export default class SimpleAreaCharts extends Component {
  render() {
    return (
      <AreaChart className={styles.simpleAreaCharts}
        width={600}
        height={400}
        data={data}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="Dodano wydarzeń" stroke="#303f9f" fill="#8884d8" />
      </AreaChart>
    );
  }
}