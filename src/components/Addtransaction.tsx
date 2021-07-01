import React, { useContext, useState } from 'react';
import { GlobalContext } from '../globalContext/Context';



const Addtransaction: React.FC = () => {

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
            <h1>Add New Transactions</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Text</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Amount</label>
                    <input type="number" value={amount} onChange={(e) => setAmount(e.target.value)} required />
                </div>
                <button>Add Transaction</button>
            </form>
        </React.Fragment>
    )
}

export default Addtransaction;