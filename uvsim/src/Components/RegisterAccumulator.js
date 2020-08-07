import React, { Fragment, useEffect } from "react";
import Paper from "@material-ui/core/Paper";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

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
          <TableContainer component={Paper}>
            <Table
              className={classes.table}
              size="small"
              aria-label="a dense table"
            >
              <TableHead>
                <TableRow>
                  <TableCell align="right">r1</TableCell>
                  <TableCell align="right">r2</TableCell>
                  <TableCell align="right">r3</TableCell>
                  <TableCell align="right">r4</TableCell>
                  <TableCell align="right">r5</TableCell>
                  <TableCell align="right">r6</TableCell>
                  <TableCell align="right">r7</TableCell>
                  <TableCell align="right">pc</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow key={1}>
                  <TableCell align="right">{props.registers["r001"]}</TableCell>
                  {/* <TableCell align="right">
                    {props.registers["r010"]["value"]}
                  </TableCell>
                  <TableCell align="right">
                    {props.registers["r011"]["value"]}
                  </TableCell>
                  <TableCell align="right">
                    {props.registers["r100"]["value"]}
                  </TableCell>
                  <TableCell align="right">
                    {props.registers["r101"]["value"]}
                  </TableCell>
                  <TableCell align="right">
                    {props.registers["r110"]["value"]}
                  </TableCell>
                  <TableCell align="right">
                    {props.registers["r111"]["value"]}
                  </TableCell> */}
                  <TableCell align="right">{props.pc}</TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </TableContainer>
        </span>
      </div>
    </Paper>
  );
};

export default RegisterAccumulator;
