import { TransactionTypes } from '../Types';

type Actions =
    | { type: 'add'; transactions: TransactionTypes }
    | { type: 'delete'; id: number }

const TransactionReducer = ((state: { transactions: TransactionTypes[] }, action: Actions) => {
    switch (action.type) {
        case 'add':
            return {
                ...state,
                transactions: [action.transactions, ...state.transactions]
            };
        case 'delete':
            return {
                transactions: state.transactions.filter((e) => e.id !== action.id)
            };
        default:
            return state;
    }
});

export default TransactionReducer;
