import React, { Fragment, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CodeWindow from "./CodeWindow"

const useStyles = makeStyles({
    grid: {
        width: '90%',
        height: '300px',
        display: 'grid',
        margin: '0 auto',
        gridTemplateColumns: '1fr',
        gridAutoRows: '40px',

    },
    background: {
        backgroundColor: '#EEEEEE',
        width: '100%',

    },
    consoleHeader: {
        backgroundColor: 'black',
        textAlign: 'center',
        display: 'grid',
        alignItems: 'center',

    },
    inputSection: {
        backgroundColor: '#000000',
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '5px',
        height: '100%',
        padding: '10px'
    }

});

const Console = (props) => {

    const classes = useStyles()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    return (
        <Fragment>
            <Paper elevation={10}>
                <div className={classes.background}>
                    <div className={classes.consoleHeader}>
                        <h2 style={{ justifySelf: 'center', color: 'white' }}>Console</h2>
                    </div>
                    <div className={classes.grid}>

                    </div>
                    <div >
                        <Button onClick={handleOpen} color="secondary" variant="contained">Upload Machine Code</Button>
                        {/*This needs to pop up window to add machine code */}
                        <Button onClick={props.handleRun} color="secondary" variant="contained">Run</Button>

                    </div>
                </div>

            </Paper>
            <CodeWindow updateCode={props.updateCode} codeInput={props.codeInput} saveCode={props.saveCode} open={open} handleClose={handleClose} />
        </Fragment>
    )
}

export default Console
