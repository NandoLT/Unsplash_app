import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(width, height, date) {
    return { width, height, date };
}


export const ImgTableData = ({width, height, dateAdded}) => {
    const date = dateAdded.toLocaleString('es-ES', { timeZone: 'UTC' });

    const rows = [
        createData('Weight', width + ' px' ),
        createData('Height', height + ' px'),
        createData('Img added date', date),
    ];

    return (
        <TableContainer component={Paper}>
            <Table aria-label="simple table">
                <TableHead>
                    <TableRow>
                        <TableCell align="right">Data</TableCell>
                        <TableCell align="right">Value</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                {rows.map((row) => (
                    <TableRow
                    key={row.name}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                        <TableCell align="right">{row.width} </TableCell>
                        <TableCell align="right">{row.height} </TableCell>
                        <TableCell align="right">{row.date}</TableCell>
                    </TableRow>
                ))}
                </TableBody>
            </Table>
        </TableContainer>
        );
}