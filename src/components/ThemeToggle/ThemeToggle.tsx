'use client';

import { useContext } from 'react';
import { useTheme } from '@mui/material/styles';
import { ThemeToggleContext } from './ThemeToggleProvider';
import { Button } from '@mui/material';

export function ThemeToggle() {
  // check theme is dark or light
  const theme = useTheme();

  // useContect Hook get value https://react.dev/reference/react/useContext
  const themeToggle = useContext(ThemeToggleContext);

  return (
    <Button
      sx={{ ml: 1 }}
      onClick={themeToggle.toggleColorMode}
      color='primary'
    >
      {theme.palette.mode === 'dark' ? (
        <p>どうしても明くしたい</p>
      ) : (
        <p>どうしても暗くしたい</p>
      )}
    </Button>
  );
}
