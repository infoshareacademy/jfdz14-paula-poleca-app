import React, { PureComponent } from 'react';
import ReactDOM from 'react-dom';
import {PieChart, Pie, Sector, Cell
} from 'recharts';
import styles from './Recharts.module.css';

// const { PieChart, Pie, Sector, Cell } = Recharts;
const data = [{name: 'Group A', value: 100}, {name: 'Group B', value: 300},
                  {name: 'Group C', value: 300}, {name: 'Group D', value: 200}, {name: 'Group E', value: 200}];
const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', 'red'];

const RADIAN = Math.PI / 180;                    
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
 	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x  = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy  + radius * Math.sin(-midAngle * RADIAN);
 
  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
    	{`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

const SimplePieChart = () => {
	// render () 
  	return (
    	<PieChart width={800} height={400} className={styles.pieChart} >
        <Pie 
          data={data} 
          cx={300} 
          cy={200} 
          labelLine={false}
          label={renderCustomizedLabel}
          outerRadius={80} 
          fill="#8884d8"
        >
        	{
          	data.map((entry, index) => <Cell fill={COLORS[index % COLORS.length]}/>)
          }
        </Pie>
      </PieChart>
    );
  }


export default SimplePieChart;

















// const data = [
//   { name: 'Group A', value: 400 },
//   { name: 'Group B', value: 300 },
//   { name: 'Group C', value: 300 },
//   { name: 'Group D', value: 200 },
// ];

// const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

// const RADIAN = Math.PI / 180;
// const renderCustomizedLabel = ({
//   cx, cy, midAngle, innerRadius, outerRadius, percent, index,
// }) => {
//    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
//   const x = cx + radius * Math.cos(-midAngle * RADIAN);
//   const y = cy + radius * Math.sin(-midAngle * RADIAN);

//   return (
//     <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
//       {`${(percent * 100).toFixed(0)}%`}
//     </text>
//   );
// };

// export default class Example extends PureComponent {
//   static jsfiddleUrl = 'https://jsfiddle.net/alidingling/c9pL8k61/';

//   render() {
//     return (
//       <PieChart width={400} height={400}>
//         <Pie
//           data={data}
//           cx={200}
//           cy={200}
//           labelLine={false}
//           label={renderCustomizedLabel}
//           outerRadius={80}
//           fill="#8884d8"
//           dataKey="value"
//         >
//           {
//             data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
//           }
//         </Pie>
//       </PieChart>
//     );
//   }
// }

// export { PieChart, Example, Pie};
// export default PieChart;
// export {Example, Pie};
