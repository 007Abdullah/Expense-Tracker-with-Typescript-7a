import React, { useEffect } from 'react';
import './App.css';
import { InitNotification } from './services/FirebaseService.js';
import { Provider } from './globalContext/Context';
import Header from './components/Header';
import Balance from './components/Balance';
import IncomeExpense from './components/IncomeExpense';
import Transaction from './components/Transaction';
import Addtransaction from './components/Addtransaction';

function App() {

  useEffect(() => {
    InitNotification();
  }, []);

  return (
    <div>
      <Provider>
        <Header />
        <br />
        <Balance />
        <br />
        <IncomeExpense />
        <br />
        <Transaction />
        <br />
        <Addtransaction />
      </Provider>
    </div>
  );
}

export default App;
