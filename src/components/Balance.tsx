import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/Context';

const Balance = () => {

    const { transactions } = useContext(GlobalContext);

    console.log('transactions :', transactions)

    var TransAmount = transactions.map((eachTrans, index) => {
        return eachTrans.amount
    })

    console.log("TransAmount Coming Balance File :", TransAmount);

    const balance = TransAmount.reduce((accum, currentVal) => accum + currentVal, 0);

    return (
        <React.Fragment>
            <h1>Your Balance</h1>
            <br />
            <h3>{balance}</h3>
        </React.Fragment>
    )
}

export default Balance;