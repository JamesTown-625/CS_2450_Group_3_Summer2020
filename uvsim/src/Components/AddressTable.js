import React, { Fragment } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

const useStyles = makeStyles({
    table: {
        maxWidth: 600,
        margin: "0 auto",
        overflow: "auto",
        height: "553px",
    },
    headerCell: {
        colspan: "2",
    },
    tableTitleBackground: {
        height: "67px",
        display: "grid",
        backgroundColor: "black",
    },
    tableTitle: {
        alignSelf: "center",
        color: "white",
        textAlign: "center",
    },
});

const AddressTable = (props) => {
    const classes = useStyles();
    return (
        <Fragment>
            <div className={classes.tableTitleBackground}>
                <h2 className={classes.tableTitle}>Addresses</h2>
            </div>
            <TableContainer className={classes.table} component={Paper}>
                <Table aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell align="center">Address</TableCell>
                            <TableCell align="center">Instruction</TableCell>
                            {/* <TableCell align="center">Value</TableCell> */}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {props.memory.map((row, index) => (
                            <TableRow key={row.name}>
                                <TableCell align="center">
                                    {row.memoryAddress}
                                </TableCell>
                                <TableCell align="center">
                                    {row.machine_language_line}
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </Fragment>
    );
};

export default AddressTable;
