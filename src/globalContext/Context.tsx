import React, { createContext, useReducer } from 'react';
import TransactionReducer from './Reducer';
import { TransactionTypes } from '../Types';

const initialState = {
    transactions: [{ id: 1, title: 'Cash', amount: 2000 }, { id: 2, title: 'Book', amount: 5000 }, { id: 3, title: 'Camera', amount: 10000 }],
    addTransactions: (transactions: TransactionTypes) => { },
    deleteTransactions: (id: number) => { },
};

export const GlobalContext = createContext(initialState);

export const Provider: React.FC = ({ children }) => {
    const [state, dispatch] = useReducer(TransactionReducer, initialState);
    console.log("State Context File:", state)

    // yaha sa action send karay ga reducer ko data send 
    function addTransactions(transactions: TransactionTypes) {
        dispatch({
            type: 'add',
            transactions: transactions
        });
    }

    function deleteTransactions(id: number) {
        dispatch({
            type: 'delete',
            id: id
        });
    }

    return (
        <React.Fragment>
            <GlobalContext.Provider value={{ transactions: state.transactions, addTransactions, deleteTransactions }}>
                {children}
            </GlobalContext.Provider>
        </React.Fragment>
    )
}
