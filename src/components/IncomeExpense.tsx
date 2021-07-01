import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/Context';
import Getexpense from './Getexpense';

const IncomeExpense: React.FC = () => {

    const { transactions } = useContext(GlobalContext);

    const transAmount = transactions.map((eachTrans, index) => {
        return eachTrans.amount
    });
    console.log('Income Expense :', transAmount);

    const getIcome = transAmount.filter((s) => s > 0).reduce((a, c) => a + c, 0);

    console.log('getIncome :', getIcome);


    return (
        <React.Fragment>
            <div style={{ color: 'black', width: '80%', display: 'flex', justifyContent: 'space-around', backgroundColor: 'white', margin: '0 auto', marginTop: '20px', boxShadow: '0 0 10px gray' }}>
                <h3>INCOME <br />{getIcome}</h3>
                <h3>EXPENSE <br />{Getexpense}</h3>
            </div>
        </React.Fragment>
    )
}

export default IncomeExpense;

