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
            <h1>Get Icome</h1>
            {getIcome}
            <br />
            <h2>Get Expense</h2>
            {Getexpense}
            <br />
        </React.Fragment>
    )
}

export default IncomeExpense;

