import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles({
    grid: {
        width: '90%',
        height: '80px',
        display: 'grid',
        alignItems: 'center',
        margin: '0 auto',
        paddingTop: '0px',
    },
    background: {

    },
    registerHeader: {
        backgroundColor: 'black',
        textAlign: 'center',
        display: 'grid',
        alignItems: 'center',

        top: '0'
    },
    span: {
        alignSelf: 'center',
        justifySelf: 'center',
        marginTop: '2px',
        marginBottom: '2px'
    },
    regName: {
        justifySelf: 'center',
        color: 'white'
    }


});

const RegisterAccumulator = (props) => {
    const classes = useStyles()
    return (
        <Paper className={classes.background} elevation={10}>
            <div className={classes.registerHeader}>
                <h2 className={classes.regName}>Register</h2>
            </div>
            <div className={classes.grid}>
                <span className={classes.span}>
                    <strong>Register1:</strong> x00000
                </span>
            </div>
        </Paper>
    )
}

export default RegisterAccumulator
