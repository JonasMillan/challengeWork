import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

const TableData = props => {
    const { classes, data } = props; 

return (
    <div>
    {data === 'empty' ? 'not found': 
    <Paper className={classes.root}>
        <Table className={classes.table}>
        <TableHead>
            <TableRow>
                <TableCell align="center">Contract Until</TableCell>
                <TableCell align="center">Date of Birth</TableCell>
                <TableCell align="center">Jersey Number</TableCell>
                <TableCell align="center">Name</TableCell>
                <TableCell align="center">Nationality</TableCell>
                <TableCell align="center">Position</TableCell>
            </TableRow>
        </TableHead>
        <TableBody>
            {data.length > 0 &&
                data.map((row, index) => (
                <TableRow key={index}>
                    <TableCell component="th" scope="row"> {row.contractUntil}</TableCell>
                    <TableCell align="center">{row.dateOfBirth}</TableCell>
                    <TableCell align="center">{row.jerseyNumber}</TableCell>
                    <TableCell align="center">{row.name}</TableCell>
                    <TableCell align="center">{row.nationality}</TableCell>
                    <TableCell align="center">{row.position}</TableCell>
                </TableRow>
            ))}
        </TableBody>
        </Table> 
    </Paper>
    }
    </div>    
);
}

TableData.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TableData);