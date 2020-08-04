import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({

    box: {
        padding: '20px',
        width: '80%',
        height: '480px',
        margin: '0 auto',
        marginTop: '150px',
        maxWidth: '500px',

    },
    textField: {
        color: 'white',
        width: '100%',
        backgroundColor: '#263238',
        paddingLeft: '5px'
    },
    header: {
        textAlign: 'center',
        marginBottom: '50px'
    }

});

const HelpScreen = (props) => {

    const classes = useStyles();

    /*
    @ ORIG x0000
    0011000000000000
    @ add decimal 10 to register 1 (immediate mode)
    0001001001101010
    @ add the contents of register 1 to register 2 (not immediate mode)
    0001010001000010
    @ TRAP- HALT
    1111000000100101
    */
    return (

        <Modal open={props.open} onClose={props.handleClose} className={classes.modal}>
            <Paper className={classes.box}>
                <div className={classes.header}>Need Help? Here's some test code:</div>
                <TextField
                    multiline
                    rows={20}
                    className={classes.textField}
                    defaultValue={`@ ORIG x0000\n0011000000000000\n@ add decimal 10 to register 1 (immediate mode)\n0001001001101010\n@ add the contents of register 1 to register 2 (not immediate mode)\n0001010001000010\n@ TRAP- HALT\n1111000000100101`}>

                </TextField>

            </Paper>
        </Modal>
    )
}

export default HelpScreen
