import React from 'react';
import SimplePieChart from './Charts/PieChart';
import SimpleBarChart from './Charts/BarChartNoPadding';

const Statistics = () => {
    return (
        <div>
            <h2>Statystyki</h2>
            <div align="center"><h5>Wydarzenia w Trójmieście</h5>
                <SimplePieChart style={{align: 'center'}}/>
            </div>
            <hr/>
            <div align="center"><h5>Ilość zarejestrowanych użytkowników</h5>
                <SimpleBarChart/>
            </div>
        </div>
    );
}
 
export default Statistics;