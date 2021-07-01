import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/Context';

const Getexpense: React.FC = () => {

    const { transactions } = useContext(GlobalContext);

    const transAmount = transactions.map((eachTrans, index) => {
        return eachTrans.amount
    });

    console.log('TransAmount :', transAmount);

    const getExpense = -transAmount.filter((s) => s < 0).reduce((a, c) => a + c, 0)

    console.log('getExpense :', getExpense);


    return (
        <React.Fragment>

        </React.Fragment>
    )
}

export default Getexpense;