import * as React from 'react';
import Box from '@mui/material/Box';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';

export default function HomePage() {
  return (
    <Box
      sx={{
        display: 'flex',
      }}
    >
      <Box>
        <Alert severity='warning' sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          この app は the Next.js App Router と Material UI v5.
        </Alert>
        <Alert severity='error' sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          この app は the Next.js App Router と Material UI v5.
        </Alert>
        <Alert severity='info' sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          この app は the Next.js App Router と Material UI v5.
        </Alert>
        <Alert severity='success' sx={{ mt: 2, mb: 5 }}>
          <AlertTitle>Hello 👋</AlertTitle>
          この app は the Next.js App Router と Material UI v5.
        </Alert>
      </Box>
    </Box>
  );
}
