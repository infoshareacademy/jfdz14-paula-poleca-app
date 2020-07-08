import React from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { createMuiTheme } from '@material-ui/core/styles';
import purple from '@material-ui/core/colors/purple';



  const Menu = () => {

    const theme = createMuiTheme({
      palette: {
        primary: {
          main: purple[500],
        },
        secondary: {
          main: '#f44336',
        },
      },
    });

  return (
    <Paper>
      <Tabs
        indicatorColor="primary"
        textColor="primary"
        variant="fullWidth"
        
      >
        <Tab label="Item One" />
        <Tab label="Item Two" />
        <Tab label="Item Three" />
        <Tab label="Item Three" />
        <Tab label="Item Three" />
        <Tab label="Item Three" />

      </Tabs>
    </Paper>
  );
}


export default Menu