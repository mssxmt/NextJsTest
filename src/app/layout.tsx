import Link from 'next/link';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ThemeRegistry from '@/components/ThemeRegistry/ThemeRegistry.tsx';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import { ReactNode } from 'react';

export const metadata = {
  title: 'Next.js App Router + Material UI v5',
  description: 'Next.js App Router + Material UI v5',
};

const DRAWER_WIDTH = 240;

const LINKS = [
  { text: 'ホ〜ム', href: '/', icon: 'HomeIcon' },
  { text: 'リンク無し１', href: '/', icon: 'StarIcon' },
  { text: 'リンク無し２', href: '/', icon: 'ChecklistIcon' },
];

const PLACEHOLDER_LINKS = [
  { text: '設定ング', icon: 'SettingsIcon' },
  { text: 'ノーサポート', icon: 'SupportIcon' },
  { text: 'ノーログアウト', icon: 'LogoutIcon' },
];

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang='en'>
      <body>
        <ThemeRegistry>
          <Box sx={{ flexGrow: 1 }}>
            <AppBar position='fixed' sx={{ zIndex: 2000 }}>
              <Toolbar
                sx={{
                  backgroundColor: 'background.paper',
                  justifyContent: 'space-between',
                }}
              >
                <Typography variant='h6' noWrap component='div' color='primary'>
                  Next.js App Router
                </Typography>

                <ThemeToggle />
              </Toolbar>
            </AppBar>
          </Box>
          <Drawer
            sx={{
              width: DRAWER_WIDTH,
              flexShrink: 0,
              '& .MuiDrawer-paper': {
                width: DRAWER_WIDTH,
                boxSizing: 'border-box',
                top: ['48px', '56px', '64px'],
                height: 'auto',
                bottom: 0,
              },
            }}
            variant='permanent'
            anchor='left'
          >
            <Divider />
            <List>
              {LINKS.map(({ text, href, icon: Icon }) => (
                <ListItem key={href} disablePadding>
                  <ListItemButton component={Link} href={href}>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
            <Divider sx={{ mt: 'auto' }} />
            <List>
              {PLACEHOLDER_LINKS.map(({ text, icon: Icon }) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton>
                    <ListItemIcon>
                      <Icon />
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Drawer>
          <Box
            component='main'
            sx={{
              flexGrow: 1,
              bgcolor: 'background.default',
              ml: `${DRAWER_WIDTH}px`,
              mt: ['48px', '56px', '64px'],
              p: 3,
            }}
          >
            {children}
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}
