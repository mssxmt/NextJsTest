'use client';
import Link from 'next/link';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { KeyboardEvent, MouseEvent, ReactNode, useState } from 'react';
import { Box, Button } from '@mui/material';

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

//stateでドロワーの開閉を行うのでclient component
export default function SideDrawer({ children }: { children: ReactNode }) {
  const [state, setState] = useState(false);

  const toggleDrawer =
    (open: boolean) => (event: KeyboardEvent | MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as KeyboardEvent).key === 'Tab' ||
          (event as KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      console.log(open);
      setState(open);
    };

  return (
    <>
      <Button
        onClick={toggleDrawer(!state)}
        //アニメーションではないけど単にドロワーの貨幣に合わせてマージン左を操作
        sx={{
          margin: `100px 0 0 ${state ? DRAWER_WIDTH : 0}px`,
          flexShrink: 0,
        }}
      >
        {'三'}
      </Button>

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
        variant='persistent'
        anchor='left'
        open={state}
        onClose={toggleDrawer(false)}
      >
        <Divider />
        <Box onClick={toggleDrawer(false)} onKeyDown={toggleDrawer(false)}>
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
        </Box>
      </Drawer>
      <Box
        component='main'
        sx={{
          flexGrow: 1,
          bgcolor: 'background.default',
          ml: `${state ? DRAWER_WIDTH : 0}px`,
          mt: ['48px', '56px', '64px'],
          p: 3,
        }}
      >
        {children}
      </Box>
    </>
  );
}
