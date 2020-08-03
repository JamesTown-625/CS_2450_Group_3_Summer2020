import React, { Fragment, useState } from 'react';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';
import CodeWindow from "./CodeWindow"
import { printUsedFunctionToConsole } from "../functions"

const useStyles = makeStyles({
    grid: {
        width: '90%',
        height: '357px',
        display: 'grid',
        margin: '0 auto',
        gridTemplateColumns: '1fr',
        gridAutoRows: '40px',
        padding: '5px',
        border: 'solid black 2px',
        backgroundColor: 'black',

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
        marginBottom: '10px'

    },
    buttons: {
        display: 'grid',
        padding: '5px',
        gridTemplateColumns: '1fr 1fr',
        gridGap: '5px'
    }

});

const Console = (props) => {

    const classes = useStyles()

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        printUsedFunctionToConsole(props.consoleLines, props.setConsoleLines, "opening window")
        setOpen(true);
    };

    const handleClose = () => {
        printUsedFunctionToConsole(props.consoleLines, props.setConsoleLines, "closing window")
        setOpen(false);
    };

    return (
        <Fragment>
            <Paper className={classes.background} elevation={10}>
                <div >
                    <div className={classes.consoleHeader}>
                        <h2 style={{ justifySelf: 'center', color: 'white' }}>Console</h2>
                    </div>
                    <div className={classes.grid}>
                        <p style={{ textAlign: 'center', color: 'green' }}>------- Starting BasicML Program -------</p>
                        {props.consoleLines.map((row, index) => (
                            <p style={{ color: 'green' }}>{row}</p>
                        ))}
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Button onClick={handleOpen} color="primary" variant="contained">Upload Machine Code</Button>
                    <Button onClick={props.handleRun} color="primary" variant="contained">Run</Button>

                </div>
            </Paper>
            <CodeWindow updateCode={props.updateCode} codeInput={props.codeInput} saveCode={props.saveCode} open={open} handleClose={handleClose} />
        </Fragment>
    )
}

export default Console
