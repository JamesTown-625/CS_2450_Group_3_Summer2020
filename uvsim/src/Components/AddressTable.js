import React, { Fragment, useState } from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import TablePagination from '@material-ui/core/TablePagination';
import PropTypes from 'prop-types';
import TableFooter from '@material-ui/core/TableFooter';
import IconButton from '@material-ui/core/IconButton';
import FirstPageIcon from '@material-ui/icons/FirstPage';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import LastPageIcon from '@material-ui/icons/LastPage';

const useStyles = makeStyles({
    table: {
        maxWidth: 600,
        margin: "0 auto",

    },
    test: {
        overflow: "auto",
        height: "595px",
    },
    headerCell: {
        colspan: "2",
    },
    tableTitleBackground: {
        height: "67px",
        display: "grid",
        backgroundColor: "#263238",
    },
    tableTitle: {
        alignSelf: "center",
        color: "white",
        textAlign: "center",
    },
});

const useStyles1 = makeStyles((theme) => ({
    root: {
        flexShrink: 0,
    },
}));


const AddressTable = (props) => {

    const classes = useStyles();
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, props.memory.length - page * rowsPerPage);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
    };

    return (
        <Fragment>
            <div className={classes.tableTitleBackground}>
                <h2 className={classes.tableTitle}>Addresses</h2>

            </div>
            <Paper elevation={10} className={classes.table}>
                <TableContainer className={classes.test} >
                    <Table aria-label="simple table">
                        <TableHead>
                            <TableRow>
                                <TableCell align="center">Address</TableCell>
                                <TableCell align="center">Instruction</TableCell>
                                {/* <TableCell align="center">Value</TableCell> */}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {(rowsPerPage > 0
                                ? props.memory.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                                : props.memory
                            ).map((row) => (
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

                <TablePagination
                    style={{ display: 'grid', justifyContent: 'center' }}
                    colSpan={3}
                    count={props.memory.length}
                    rowsPerPage={rowsPerPage}
                    page={page}
                    SelectProps={{
                        inputProps: { 'aria-label': 'rows:' },
                        native: true,
                    }}
                    onChangePage={handleChangePage}
                    onChangeRowsPerPage={handleChangeRowsPerPage}
                    rowsPerPageOptions={[]}
                />

            </Paper>
        </Fragment>
    );
};

export default AddressTable;

//ActionsComponent={TablePaginationActions}

/*

function TablePaginationActions(props) {
    const classes = useStyles1();
    const theme = useTheme();
    const { count, page, rowsPerPage, onChangePage } = props;

    const handleFirstPageButtonClick = (event) => {
        onChangePage(event, 0);
    };

    const handleBackButtonClick = (event) => {
        onChangePage(event, page - 1);
    };

    const handleNextButtonClick = (event) => {
        onChangePage(event, page + 1);
    };

    const handleLastPageButtonClick = (event) => {
        onChangePage(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1));
    };

    return (
        <div className={classes.root}>
            <IconButton
                onClick={handleFirstPageButtonClick}
                disabled={page === 0}
                aria-label="first page"
            >
                {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
            </IconButton>
            <IconButton onClick={handleBackButtonClick} disabled={page === 0} aria-label="previous page">
                {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
            </IconButton>
            <IconButton
                onClick={handleNextButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="next page"
            >
                {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
            </IconButton>
            <IconButton
                onClick={handleLastPageButtonClick}
                disabled={page >= Math.ceil(count / rowsPerPage) - 1}
                aria-label="last page"
            >
                {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
            </IconButton>
        </div>
    );
}

TablePaginationActions.propTypes = {
    count: PropTypes.number.isRequired,
    onChangePage: PropTypes.func.isRequired,
    page: PropTypes.number.isRequired,
    rowsPerPage: PropTypes.number.isRequired,
};

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
*/