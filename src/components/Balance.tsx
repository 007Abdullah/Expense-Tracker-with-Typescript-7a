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
            <span style={{ color: 'black' }}>
                <b>Your Balance
                    <br />
                    {balance}</b>
            </span>
        </React.Fragment>
    )
}

export default Balance;