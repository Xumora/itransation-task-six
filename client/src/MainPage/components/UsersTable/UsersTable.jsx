import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import InfiniteScroll from 'react-infinite-scroll-component';


const UsersTable = ({ users, setPage }) => {
    const fetchData = () => {
        setPage(prev => prev + 1)
    }

    return (
        <InfiniteScroll
            dataLength={users.length}
            next={fetchData}
            hasMore={true}
            loader={users.length > 0 ? <div className='d-flex justify-content-center py-3'>
                <div className="spinner-border" role="status">
                    <span className="visually-hidden">Loading...</span>
                </div>
            </div> : ''}
            scrollThreshold={0.99}
            endMessage={
                <p style={{ textAlign: 'center' }}>
                    <b>Yay! You have seen it all</b>
                </p>
            }
        >
            <TableContainer component={Paper}>
                <Table sx={{ minWidth: 650 }} aria-label="simple table">
                    <TableHead>
                        <TableRow>
                            <TableCell>№</TableCell>
                            <TableCell align="left">ID</TableCell>
                            <TableCell align="left">Name</TableCell>
                            <TableCell align="left">Phone</TableCell>
                            <TableCell align="left">Adress</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {users?.map((row, index) => (
                            <TableRow
                                key={index}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell component="th" scope="row">{index + 1}</TableCell>
                                <TableCell align="left">{row?.id}</TableCell>
                                <TableCell align="left">{row?.name}</TableCell>
                                <TableCell align="left">{row?.phone}</TableCell>
                                <TableCell align="left">{row?.address?.city} {row.address?.street}</TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
        </InfiniteScroll>
    )
}

export default UsersTable