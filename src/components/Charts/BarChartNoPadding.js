import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip
  } from 'recharts';
import styles from './Recharts.module.css';

const data = [
      {name: 'Po', 'Zarejestrowanych użytkowników': 400},
      {name: 'Wt', 'Zarejestrowanych użytkowników': 300},
      {name: 'śr', 'Zarejestrowanych użytkowników': 200},
      {name: 'Cz', 'Zarejestrowanych użytkowników': 278},
      {name: 'Pi', 'Zarejestrowanych użytkowników': 189},
      {name: 'So', 'Zarejestrowanych użytkowników': 239},
      {name: 'Ni', 'Zarejestrowanych użytkowników': 349},
];
export default class SimpleBarChart extends Component {
  render() {
  return (
    	<BarChart width={600} height={400} data={data} className={styles.barChart}
            margin={{top: 5, right: 20, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       {/* <Legend /> */}
       <Bar dataKey="Zarejestrowanych użytkowników" fill="#303f9f" barSize={20} />
       {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    );
  }
}