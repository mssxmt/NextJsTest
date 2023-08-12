import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
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

      <Drawer
        sx={{
          width: 320,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: 320,
            boxSizing: 'border-box',
            top: ['48px', '56px', '64px'],
            height: 'auto',
            bottom: 0,
          },
        }}
        variant='permanent'
        anchor='right'
      >
        <List sx={{ px: 2 }}>
          <ListItem disablePadding>
            <Typography variant='overline' sx={{ fontWeight: 500 }}>
              ここによくあるリストとか？
            </Typography>
          </ListItem>
        </List>
      </Drawer>
    </Box>
  );
}
