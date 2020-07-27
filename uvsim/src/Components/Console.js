import React, { Fragment } from 'react';
import Paper from '@material-ui/core/Paper';
import { Button, TextField } from "@material-ui/core";
import { makeStyles } from '@material-ui/core/styles';


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
    return (
        <Paper elevation={10}>
            <div className={classes.background}>
                <div className={classes.consoleHeader}>
                    <h2 style={{ justifySelf: 'center', color: 'white' }}>Console</h2>
                </div>
                <div className={classes.grid}>
                    <p>{'>'} Add 2 to register ..  </p>
                    <p>{'>'} Add value to value in register</p>
                    <p>{'>'} Assign value from address X to address Y</p>
                    <p>{'>'} Hello</p>
                </div>
                <div >
                    <form className={classes.inputSection}>
                        <TextField focused="true" autoFocus="true" variant="outlined" color="secondary" label="Input"></TextField>
                        <Button onClick={props.handleInput} color="secondary" variant="contained">Submit</Button>
                        {/*Right now this button hands one single opcode.. should eventually be different opcode based on input... */}
                    </form>
                </div>
            </div>
        </Paper>
    )
}

export default Console
