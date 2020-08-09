import React, { useEffect, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import Modal from '@material-ui/core/Modal';

const useStyles = makeStyles({
    modal: {

    },
    box: {
        padding: '20px',
        width: '80%',
        height: '500px',
        margin: '0 auto',
        marginTop: '150px',
        maxWidth: '500px'
    },
    textField: {
        color: 'black',
        width: '100%',
    }

});

const CodeWindow = (props) => {

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
                <TextField
                    className={classes.textField}
                    onChange={props.updateCode}
                    id="outlined-multiline-static"
                    multiline
                    rows={20}
                    defaultValue={props.codeInput}
                    variant="outlined"
                />
                <Button style={{ width: "100%", marginTop: '20px' }} color="primary" variant="contained" onClick={props.saveCode}>Save</Button>
                <form>
                    <input type="file" onChange={e => props.handleFile(e.currentTarget.files[0])} style={{marginTop: '5px'}} type="file" />
                    
                </form>
            </Paper>
        </Modal>
    )
}

export default CodeWindow
