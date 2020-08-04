import React, { Fragment, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  grid: {
    width: "90%",
    height: "80px",
    display: "grid",
    alignItems: "center",
    margin: "0 auto",
    paddingTop: "0px",
  },
  background: {},
  registerHeader: {
    backgroundColor: "#263238",
    textAlign: "center",
    display: "grid",
    alignItems: "center",

    top: "0",
  },
  span: {
    alignSelf: "center",
    justifySelf: "center",
    marginTop: "2px",
    marginBottom: "2px",
  },
  regName: {
    justifySelf: "center",
    color: "white",
  },
});

const RegisterAccumulator = (props) => {
  const classes = useStyles();

  return (
    <Paper className={classes.background} elevation={10}>
      <div className={classes.registerHeader}>
        <h2 className={classes.regName}>General Use Registers</h2>
      </div>
      <div className={classes.grid}>
        <span className={classes.span}>
          <strong> Register1:</strong> {props.registers.r001.value}
          <strong> Register2:</strong> {props.registers.r010.value}
          <strong> Register3:</strong> {props.registers.r011.value}
          <strong> Register4:</strong> {props.registers.r100.value}
          <strong> Register5:</strong> {props.registers.r101.value}
          <strong> Register6:</strong> {props.registers.r110.value}
          <strong> Register7:</strong> {props.registers.r111.value}
        </span>
      </div>
    </Paper>
  );
};

export default RegisterAccumulator;
