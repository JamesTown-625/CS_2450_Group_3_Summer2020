import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        maxWidth: 350,
        margin: '0 auto'
    },
    headerCell: {
        colspan: "2"
    }
});

function createData(rowNum, op1, op2, rand1, rand2) {
    return { rowNum, op1, op2, rand1, rand2 };
}

const rows = [
    createData(0, 1, 0, 0, 0),
    createData(1, 1, 1, 0, 0),
    createData(2, 2, 0, 0, 0),
    createData(3, 2, 1, 0, 0),
    createData(4, 3, 0, 0, 0),
    createData(5, 3, 1, 0, 0),
    createData(6, 3, 2, 0, 0),
    createData(7, 3, 3, 0, 0),

];

const UvsimTable = () => {

    const classes = useStyles();
    return (

        <TableContainer className={classes.table} component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Row</TableCell>
                        <TableCell colSpan={2} align="center">Operation</TableCell>
                        <TableCell colSpan={2} align="center">Operand</TableCell>

                    </TableRow>
                </TableHead>
                <TableBody>
                    {rows.map((row) => (
                        <TableRow key={row.name}>
                            <TableCell align="center" component="th" scope="row">
                                {row.rowNum}
                            </TableCell>
                            <TableCell align="right">{row.op1}</TableCell>
                            <TableCell align="left">{row.op2}</TableCell>
                            <TableCell align="right">{row.rand1}</TableCell>
                            <TableCell align="left">{row.rand2}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}

export default UvsimTable


