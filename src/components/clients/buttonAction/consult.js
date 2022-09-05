import * as React from 'react';
import Button from '@mui/material/Button';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';
import ArrowCircleLeftIcon from '@mui/icons-material/ArrowCircleLeft';
import Stack from '@mui/material/Stack';
import { useNavigate } from 'react-router-dom';

export default function ButtonActions({ btn1, btn2 }) {
  const navigate = useNavigate();

  return (
    <Stack direction="row" spacing={2}>
      <Button variant="outlined" startIcon={<AddCircleOutlineIcon />}>
        {btn1}
      </Button>
      <Button
        variant="outlined"
        startIcon={<ArrowCircleLeftIcon />}
        onClick={() => navigate('/')}
      >
        {btn2}
      </Button>
    </Stack>
  );
}
