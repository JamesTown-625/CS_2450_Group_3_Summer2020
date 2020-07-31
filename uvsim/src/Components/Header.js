import React, { useState } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';




const useStyles = makeStyles((theme) => ({
    title: {
        margin: '0 auto'
    }
}));



const Header = () => {

    const classes = useStyles();

    return (
        <AppBar position="fixed">
            <Toolbar >
                <Typography className={classes.title} color="secondary" variant="h3">
                    UVSim
                </Typography>
            </Toolbar>
        </AppBar>

    );
}

export default Header