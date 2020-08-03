import React, { useEffect } from 'react';
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
        marginTop: '150px'
    },
    textField: {
        color: 'black',
        width: '100%'
    }

});

const CodeWindow = (props) => {

    const classes = useStyles();

    return (

        <Modal open={props.open} onClose={props.handleClose} className={classes.modal}>
            <Paper className={classes.box}>
                <TextField
                    onChange={props.updateCode}
                    id="outlined-multiline-static"
                    label="Multiline"
                    multiline
                    rows={20}
                    defaultValue="Default Value"
                    variant="outlined"
                />
                <Button onClick={props.saveCode}>Save</Button>
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