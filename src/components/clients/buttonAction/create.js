import * as React from 'react';
import Button from '@mui/material/Button';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import SaveIcon from '@mui/icons-material/Save';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function ButtonCreate() {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2}>
      <Button type="submit" variant="outlined" startIcon={<SaveIcon />}>
        Guardar
      </Button>
      <Button
        variant="outlined"
        startIcon={<ArrowCircleLeftIcon />}
        onClick={() => navigate('/')}
      >
        Regresar
      </Button>
    </Stack>
  );
}
