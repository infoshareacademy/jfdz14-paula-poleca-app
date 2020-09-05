import React, { Component } from 'react';
import {
    BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer
  } from 'recharts';
import styles from './Recharts.module.css';
const DATABASE_URL_USER = 'https://paulapoleca-vamp.firebaseio.com/Users.json';
export default class SimpleBarChart extends Component {
    constructor(props) {
      super(props);
      this.state = {
        data: [],
      };
    }

  componentDidMount() {
    fetch(DATABASE_URL_USER)
      .then(response => response.json())
      .then(data => {
        const formattedData = Object.keys(data).map(key => ({ ...data[key], id: key}));

        const Monday = formattedData.filter(data => data.day == 1);
        const Tuesday = formattedData.filter(data => data.day == 2);
        const Wednesday = formattedData.filter(data => data.day == 3);
        const Thursday = formattedData.filter(data => data.day == 4);
        const Friday = formattedData.filter(data => data.day == 5);
        const Saturday = formattedData.filter(data => data.day == 6);
        const Sunday = formattedData.filter(data => data.day == 7);

        this.setState({ 
            data: [
              {
                name: 'Po',
                'Zarejestrowanych użytkowników': Monday.length
              },
              {
                name: 'Wt',
                'Zarejestrowanych użytkowników': Tuesday.length
              },
              {
                name: 'Śr',
                'Zarejestrowanych użytkowników': Wednesday.length
              },
              {
                name: 'Cz',
                'Zarejestrowanych użytkowników': Thursday.length
              },
              {
                name: 'Pi',
                'Zarejestrowanych użytkowników': Friday.length
              },
              {
                name: 'So',
                'Zarejestrowanych użytkowników': Saturday.length
              },
              {
                name: 'Ni',
                'Zarejestrowanych użytkowników': Sunday.length
              }
            ] 
          })
      });
  }

  render() {
  return (
      <div style={{ width: '100%', height: 400, paddingBottom: '70px'}}>
      <ResponsiveContainer>
    	<BarChart width={500} height={400} data={this.state.data} className={styles.barChart}
            margin={{top: 5, right: 20, left: 20, bottom: 5}}>
       <CartesianGrid strokeDasharray="3 3"/>
       <XAxis dataKey="name"/>
       <YAxis/>
       <Tooltip/>
       <Bar dataKey="Zarejestrowanych użytkowników" fill="#303f9f" barSize={20} />
      </BarChart>
      </ResponsiveContainer>
      </div>
    );
  }
}