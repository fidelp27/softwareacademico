import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {
  useGetDataClient,
  useRenderClients,
  useRenderList,
} from '../../../context/customerContext';

import DeleteIcon from '@mui/icons-material/Delete';
import EditIcon from '@mui/icons-material/Edit';
import { deleteClient } from '../../../helpers';
import { ToastContainer, toast } from 'react-toastify';
import Alert from '../../alert/alert';
import { useState } from 'react';

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

export default function TableClients() {
  const renderList = useRenderList();
  const renderClients = useRenderClients();
  const [isOpen, setIsOpen] = useState(false);
  const getDataClient = useGetDataClient();

  const closeAlert = () => {
    setIsOpen(false);
  };
  const openAlert = () => {
    setIsOpen(true);
  };

  const onDelete = async (id) => {
    try {
      const res = await deleteClient(id);
      if (res.status === 200) {
        renderClients();
        toast.success('Cliente eliminado exitosamente', {
          position: 'top-center',
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
      }
      setIsOpen(false);
    } catch (error) {
      error &&
        toast.error('Hubo un error, ya estamos trabajando en la solución', {
          position: 'top-center',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
    }
  };

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
          {renderList?.map((row) => (
            <StyledTableRow key={row.id}>
              <StyledTableCell component="th" scope="row">
                {row.id}
              </StyledTableCell>
              <StyledTableCell align="center">
                {row.identificacion}
              </StyledTableCell>
              <StyledTableCell align="center">{row.nombre}</StyledTableCell>
              <StyledTableCell align="center">{row.apellidos}</StyledTableCell>
              <StyledTableCell align="center">
                <EditIcon onClick={() => getDataClient(row.id)} />
                <DeleteIcon onClick={() => openAlert()} />
                {isOpen && (
                  <Alert
                    nombre={row.nombre}
                    fnOpen={() => onDelete(row.id)}
                    fnClose={() => closeAlert()}
                  />
                )}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
      <ToastContainer
        position="top-center"
        autoClose={4000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />{' '}
    </TableContainer>
  );
}
