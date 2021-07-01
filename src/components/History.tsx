import { makeStyles } from '@material-ui/core';
import React, { useContext } from 'react';
import { GlobalContext } from '../globalContext/Context';

const useStyles = makeStyles((theme) => ({
    ullist: {
        width: 'auto',
        listStyle: 'none',
        color: 'black',
        margin: '0',
        padding: '0',
        marginLeft: 'auto'
    },
    lilist: {
        display: 'flex',
        justifyContent: 'space-between',
        margin: '10px 0',
        padding: '10px 5px',
        boxShadow: '0 0 10px gray',
        backgroundColor: 'white'
    }

}))


const History = () => {
    const { transactions, deleteTransactions } = useContext(GlobalContext);
    const classes = useStyles();

    return (
        <React.Fragment>
            <div>
                <h1 style={{ color: 'black', marginLeft: '40px', fontSize: '1.5em' }}>History</h1>
                <hr style={{ width: '80%' }} />
                <ul className={classes.ullist}>
                    {transactions.map((transObj, index) => {
                        return (
                            <React.Fragment key={index}>
                                <li className={classes.lilist}>
                                    <span>{transObj.title}</span>
                                    <span>{transObj.amount}</span>
                                    <span onClick={(id) => deleteTransactions(transObj.id)}>
                                        X
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
export default History;