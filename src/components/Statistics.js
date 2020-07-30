import React from 'react';
import SimplePieChart from './Charts/PieChart';
import SimpleBarChart from './Charts/BarChartNoPadding';
import SimpleAreaCharts from './Charts/AreaChart';

const Statistics = () => {
    return (
        <div align="center">
            <h2>Statystyki</h2>
            <div align="center">Wydarzenia w Trójmieście
                <SimplePieChart />
            </div>
            <hr/>
            <div align="center">Ilość dodanych wydarzeń
                <SimpleAreaCharts />
            </div>
            <hr/>
            <div align="center">Ilość zarejestrowanych użytkowników
                <SimpleBarChart />
            </div>
        </div>
    );
}
 
export default Statistics;