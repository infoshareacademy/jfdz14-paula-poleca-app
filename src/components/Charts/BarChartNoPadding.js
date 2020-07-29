import React, { Component } from 'react';
// import ReactDOM from 'react-dom';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend,
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
       <Legend />
       <Bar dataKey="Zarejestrowanych użytkowników" fill="#303f9f" barSize={20} />
       {/* <Bar dataKey="uv" fill="#82ca9d" /> */}
      </BarChart>
    );
  }
}

















// const {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// const data = [
//       {name: 'Page A', uv: 4000, pv: 2400, amt: 2400},
//       {name: 'Page B', uv: 3000, pv: 1398, amt: 2210},
//       {name: 'Page C', uv: 2000, pv: 9800, amt: 2290},
//       {name: 'Page D', uv: 2780, pv: 3908, amt: 2000},
//       {name: 'Page E', uv: 1890, pv: 4800, amt: 2181},
//       {name: 'Page F', uv: 2390, pv: 3800, amt: 2500},
//       {name: 'Page G', uv: 3490, pv: 4300, amt: 2100},
// ];
// const SimpleBarChart = React.createClass({
// 	render () {
//   	return (
//     	<BarChart width={600} height={300} data={data}
//             margin={{top: 5, right: 30, left: 20, bottom: 5}}>
//        <CartesianGrid strokeDasharray="3 3"/>
//        <XAxis dataKey="name"/>
//        <YAxis/>
//        <Tooltip/>
//        <Legend />
//        <Bar dataKey="pv" fill="#8884d8" background={{ fill: '#eee' }} />
//        <Bar dataKey="uv" fill="#82ca9d" />
//       </BarChart>
//     );
//   }
// })

// ReactDOM.render(
//   <SimpleBarChart />,
//   document.getElementById('container')
// );
