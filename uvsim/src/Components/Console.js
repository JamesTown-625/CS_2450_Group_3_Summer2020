import React, { Fragment, useState } from "react";
import Paper from "@material-ui/core/Paper";
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import CodeWindow from "./CodeWindow";
import { printUsedFunctionToConsole } from "../functions";

const useStyles = makeStyles({
    grid: {
        width: "90%",
        height: "357px",
        display: "grid",
        margin: "0 auto",
        gridTemplateColumns: "1fr",
        gridAutoRows: "40px",
        padding: "5px",
        border: "solid black 2px",
        backgroundColor: "#263238",
    },
    background: {
        backgroundColor: "#EEEEEE",
        width: "100%",
    },
    consoleHeader: {
        backgroundColor: "#263238",
        textAlign: "center",
        display: "grid",
        alignItems: "center",
        marginBottom: "5px",
    },
    buttons: {
        display: "grid",
        padding: "5px",
        gridTemplateRows: "1fr 1fr",
        gridGap: "5px",
    },
});

const Console = (props) => {
    const classes = useStyles();

    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        printUsedFunctionToConsole(
            props.consoleLines,
            props.setConsoleLines,
            "opening window"
        );
        setOpen(true);

    };

    const handleClose = () => {
        printUsedFunctionToConsole(
            props.consoleLines,
            props.setConsoleLines,
            "closing window"
        );
        setOpen(false);
    };

    return (
        <Fragment>
            <Paper className={classes.background} elevation={10}>
                <div>
                    <div className={classes.consoleHeader}>
                        <h2 style={{ justifySelf: "center", color: "white" }}>Console</h2>
                    </div>
                    <div className={classes.grid}>
                        <p style={{ textAlign: "center", color: "#69f0ae" }}>
                            ------- Upload a program and step through it -------
            </p>
                        {props.consoleLines.map((row, index) => (
                            <p style={{ color: "#69f0ae" }}>{row}</p>
                        ))}
                    </div>
                </div>
                <div className={classes.buttons}>
                    <Button onClick={handleOpen} color="primary" variant="contained">
                        Upload Machine Code
                    </Button>
                    <Button
                        onClick={props.handleStep}
                        color="primary"
                        variant="contained"
                    >
                        Step
                    </Button>
                    {/* <Button style={{ gridColumnStart: '1', gridColumnEnd: '3' }} onClick={props.handleRun} color="primary" variant="contained">
                        Run
                    </Button>*/}


                </div>
            </Paper>
            <CodeWindow
                defaultCode={props.defaultCode}
                updateCode={props.updateCode}
                codeInput={props.codeInput}
                saveCode={props.saveCode}
                open={open}
                handleClose={handleClose}
            />
        </Fragment>
    );
};

export default Console;
