import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {
  ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip,
  Legend, ResponsiveContainer} from 'recharts';
import styles from './Recharts.module.css';



// const {PropTypes} = React;
// const {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
const data = [{name: 'Po', 'Zarejestrowanych użytkowników': 590, pv: 800, amt: 1400},
              {name: 'Wt', 'Zarejestrowanych użytkowników': 868, pv: 967, amt: 1506},
              {name: 'śr', 'Zarejestrowanych użytkowników': 1397, pv: 1098, amt: 989},
              {name: 'Cz', 'Zarejestrowanych użytkowników': 1480, pv: 1200, amt: 1228},
              {name: 'Pi', 'Zarejestrowanych użytkowników': 1520, pv: 1108, amt: 1100},
              {name: 'So', 'Zarejestrowanych użytkowników': 1520, pv: 1108, amt: 1100},
              {name: 'Ni', 'Zarejestrowanych użytkowników': 1400, pv: 680, amt: 1700}];

const SameDataComposedChart = () =>{
  	return (
    	<ComposedChart width={600} height={400} data={data} className={styles.composedChart}>
          <CartesianGrid stroke='#f5f5f5'/>
          <XAxis dataKey="name"/>
          <YAxis />
          <Tooltip/>
          <Legend/>
          {/* <Bar dataKey='Zarejestrowanych użytkowników' barSize={20} fill='#413ea0'/> */}
          <Line type='monotone' dataKey='Zarejestrowanych użytkowników' stroke='#303f9f'/>
       </ComposedChart>
    );
};

export default SameDataComposedChart;


























// const {PropTypes} = React;
// const {ComposedChart, Line, Area, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} = Recharts;
// const data = [{name: 'Page A', uv: 590, pv: 800, amt: 1400},
//               {name: 'Page B', uv: 868, pv: 967, amt: 1506},
//               {name: 'Page C', uv: 1397, pv: 1098, amt: 989},
//               {name: 'Page D', uv: 1480, pv: 1200, amt: 1228},
//               {name: 'Page E', uv: 1520, pv: 1108, amt: 1100},
//               {name: 'Page F', uv: 1400, pv: 680, amt: 1700}];

// const SameDataComposedChart = React.createClass({
// 	render () {
//   	return (
//     	<ComposedChart width={600} height={400} data={data}
//             margin={{top: 20, right: 20, bottom: 20, left: 20}}>
//           <CartesianGrid stroke='#f5f5f5'/>
//           <XAxis dataKey="name"/>
//           <YAxis />
//           <Tooltip/>
//           <Legend/>
//           <Bar dataKey='uv' barSize={20} fill='#413ea0'/>
//           <Line type='monotone' dataKey='uv' stroke='#ff7300'/>
//        </ComposedChart>
//     );
//   }
// })

// ReactDOM.render(
//   <SameDataComposedChart />,
//   document.getElementById('container')
// );
