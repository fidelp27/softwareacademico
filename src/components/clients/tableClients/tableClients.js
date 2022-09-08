import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useClients } from '../../../context/customerContext';
import { useEffect } from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteClient, getClients } from '../../../helpers';

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: theme.palette.common.black,
    color: theme.palette.common.white,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
  svg: {
    cursor: 'pointer',
    margin: '0 5px',
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  '&:nth-of-type(odd)': {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  '&:last-child td, &:last-child th': {
    border: 0,
  },
}));

function createData(
  id: string,
  identificacion: number,
  nombre: string,
  apellidos: string,
  acciones: string
) {
  return { id, identificacion, nombre, apellidos, acciones: id };
}

const rows = [];

export default function TableClients() {
  const clients = useClients();
  console.log(clients);

  // const headersTable = [
  //   ...new Set(
  //     React.Children.toArray(clients.map((elem) => Object.keys(elem)))
  //   ),
  // ];

  const onDelete = async (id) => {
    try {
      const res = await deleteClient(id);
      console.log(res);
    } catch (error) {
      console.log(error);
    }
  };
  const renderTable = async () => {
    const res = await getClients();
    React.Children.toArray(
      clients.map((client) => {
        return rows.push(
          createData(
            client.id,
            client.identificacion,
            client.nombre,
            client.apellidos
          )
        );
      })
    );
  };
  useEffect(() => {
    renderTable();
  }, []);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ID</StyledTableCell>
            <StyledTableCell align="center">IDENTIFICACION</StyledTableCell>
            <StyledTableCell align="center">NOMBRE</StyledTableCell>
            <StyledTableCell align="center">APELLIDO</StyledTableCell>
            <StyledTableCell align="center">ACCIONES</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="right">
                {row.identificacion}
              </StyledTableCell>
              <StyledTableCell align="right">{row.nombre}</StyledTableCell>
              <StyledTableCell align="right">{row.apellidos}</StyledTableCell>
              <StyledTableCell align="center">
                <EditIcon onClick={console.log('hola')} />
                <DeleteIcon onClick={() => onDelete(row.acciones)} />
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
