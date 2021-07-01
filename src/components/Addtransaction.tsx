import { makeStyles } from '@material-ui/core';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../globalContext/Context';

const useStyle = makeStyles((theme) => ({
    text: {
        width: '80%',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        margin: theme.spacing(1),
        marginLeft: '40px'
    },
    amount: {
        width: '80%',
        color: 'black',
        display: 'flex',
        justifyContent: 'space-between',
        margin: theme.spacing(1),
        marginLeft: '40px'
    },
    btn: {
        textAlign: 'center',
    }
}))

const Addtransaction: React.FC = () => {

    const classes = useStyle();
    const { addTransactions } = useContext(GlobalContext);

    const [title, setTitle] = useState<string>("");
    const [amount, setAmount] = useState<number | string>("");

    function handleSubmit(e: { preventDefault: () => void }) {
        e.preventDefault();
        const newTransaction = {
            id: Math.floor(Math.random() * 100000000),
            title,
            amount: +amount
        };
        addTransactions(newTransaction);
        setTitle('');
        setAmount('');
    }

    return (
        <React.Fragment>
            <h1 style={{ color: 'black', marginLeft: '40px', fontSize: '1.5em' }}>Add New Transactions</h1>
            <hr style={{ width: '80%' }} />
            <form onSubmit={handleSubmit}>
                <div className={classes.text}>
                    <label>Text</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div className={classes.amount}>
                    <label>Enter Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>
                <br />
                <div className={classes.btn}>
                    <button style={{ color: 'black', padding: '10px' }}>Add Transaction</button>
                </div>
            </form>
        </React.Fragment>
    )
}

export default Addtransaction;