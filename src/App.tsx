import React, { useEffect } from 'react';
import './App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { InitNotification } from './services/FirebaseService.js';
import { Provider } from './globalContext/Context';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import History from './components/History';
import Addtransaction from './components/Addtransaction';


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#f5f5f5',
    height: 'auto'
  },
  paper: {
    width: '30%',
    height: 'auto',
    padding: theme.spacing(2),
    color: theme.palette.text.secondary,
  },
}));


function App() {

  const classes = useStyles();

  useEffect(() => {
    InitNotification();
  }, []);

  return (
    <React.Fragment>
      <div className={classes.root}>
        <Grid container>
          <Grid item xs={12}>
            <div style={{ padding: '50px', display: 'flex', justifyContent: 'center' }}>
              <Paper className={classes.paper} elevation={3}>
                <h1 style={{ fontSize: '1.5em', textAlign: 'center', color: 'floralwhite', fontFamily: 'Serif', textTransform: 'uppercase', textShadow: '1px 1px 1px #919191,1px 2px 1px #919191,1px 3px 1px #919191,1px 4px 1px #919191,1px 5px 1px #919191,1px 6px 1px #919191,1px 7px 1px #919191,1px 8px 1px #919191,1px 9px 1px #919191,1px 10px 1px #919191,1px 18px 6px rgba(16,16,16,0.4),1px 22px 10px rgba(16,16,16,0.2)' }}>Expense Tracker</h1>
                <Provider>
                  <br />
                  <Balance />
                  <IncomeExpense />
                  <History />
                  <Addtransaction />
                </Provider>
              </Paper>
            </div>

          </Grid>
        </Grid>
      </div>
    </React.Fragment>
  );
}

export default App;
