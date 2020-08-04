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
                    label="Machine Code"
                    multiline
                    rows={20}
                    defaultValue={props.defaultCode}
                    variant="outlined"
                />
                <Button style={{ width: "100%", marginTop: '20px' }} color="primary" variant="contained" onClick={props.saveCode}>Save</Button>
            </Paper>
        </Modal>
    )
}

export default CodeWindow

/*

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {

        setOpen(false);
    };

    <Modal className={classes.modal} open={open} onClose={handleClose}  >
    <div className={classes.modalbox}>
        <h2 className={classes.modalcontent}>Please Choose 3 Priorities</h2>
        {Object.values(props.priorities).map((value, index) => (
                    <TextField variant="filled" id={index.toString()} className={classes.modalcontent} placeholder="Type here.." onChange={props.updateFn} >.</TextField>
            ))}

        <div className={classes.modalprios}><StyledButton priorities={props.priorities} onClick={handleClose} variant="contained" color="primary">Save Priorities</StyledButton></div>
        </div>
    </Modal>
*/