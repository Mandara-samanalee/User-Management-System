import { TableBody, TableCell, TableContainer, TableHead, TableRow, Paper, Table, Button } from '@mui/material'
import React from 'react'

const Usertable = ({ rows, selectedUser, deleteUser }) => {
    return (
    //We write here all the props passed by the users component
        <TableContainer component={Paper}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>ID</TableCell>
                        <TableCell>Name</TableCell>
                        <TableCell>Actions</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {/*Here we use map function to transform one array to another array. This row is used to represent one user, Hence we use this to return one object, it is no need to use return keyword*/}
                
                    {/*Here we use the map function to iterate through the rows array and return a table row for each row. This key={row id} is the unique value to each row*/}
                    {
                        rows.length > 0 ? rows.map(row => (
                            <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">{row.id}
                                </TableCell>
                                <TableCell component='th' scope="row">{row.name}
                                </TableCell>
                                <TableCell>
                                    <Button
                                        sx={{
                                            margin: '0px 10px',
                                            backgroundColor: '#3f8f29',
                                            color: '#ffffff'

                                        }}
                                        onClick={() => selectedUser({ id: row.id, name: row.name } )}
                                    >
                                        Update
                                    </Button>
                                    <Button
                                        sx={{
                                            margin: '0px 10px',
                                            backgroundColor: '#bf1029',
                                            color: '#ffffff'
                                        }}
                                        onClick={() => deleteUser({ id: row.id }) }
                                    >
                                        Delete
                                    </Button>
                                </TableCell>
                            </TableRow>
                        )) : (
                            <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                <TableCell component='th' scope="row">No Data
                                </TableCell>
                            </TableRow>
                        )
                    }
                </TableBody>
            </Table>
        </TableContainer>
    );
}


export default Usertable

