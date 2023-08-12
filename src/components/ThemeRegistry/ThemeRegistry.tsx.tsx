'use client';

import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import NextAppDirEmotionCacheProvider from './EmotionCache';
import { ThemeToggleContext } from '../ThemeToggle/ThemeToggleProvider';
import { ReactNode, useMemo, useState } from 'react';

export default function ThemeRegistry({ children }: { children: ReactNode }) {
  const [mode, setMode] = useState<'light' | 'dark'>('light');

  const colorMode = useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    []
  );

  //テーマをここで定義
  const theme = useMemo(
    () =>
      createTheme({
        palette: {
          mode,
        },
      }),
    [mode]
  );

  return (
    <NextAppDirEmotionCacheProvider options={{ key: 'mui' }}>
      <ThemeToggleContext.Provider value={colorMode}>
        <ThemeProvider theme={theme}>
          {/* CssBaseline は、構築するためのエレガントで一貫性のあるシンプルなベースラインを開始します。 */}
          <CssBaseline />
          {children}
        </ThemeProvider>
      </ThemeToggleContext.Provider>
    </NextAppDirEmotionCacheProvider>
  );
}
