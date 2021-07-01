import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/Context';

const Transaction = () => {
    const { transactions, deleteTransactions } = useContext(GlobalContext);
    return (
        <React.Fragment>
            <div>
                <h1>History</h1>
                <ul>
                    {transactions.map((transObj, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li>
                                    <span>{transObj.title}</span>
                                    <span>{transObj.amount}
                                        <span onClick={() => deleteTransactions(transObj.id)}>
                                            X
                                        </span>
                                    </span>
                                </li>
                            </React.Fragment>
                        )
                    })}
                </ul>
            </div>
        </React.Fragment>
    )
}
export default Transaction;