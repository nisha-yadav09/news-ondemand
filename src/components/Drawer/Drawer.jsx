import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';


export default function Drawers() {
  const drawerWidth = 240;
  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const toggleDrawer = (anchor, open) => (event) => {
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250, bgcolor: '#71a0a5'}}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {['General', 'Science', 'Technology', 'Business', 'Sports', 'Health', 'Entertainment'].map((text, index) => (
         <ListItem button key={text}>
            <Link style={{ marginRight: '50px' }} to={`/news/${text}`}> {text}</Link>
          </ListItem>
        ))}
      </List>
    </Box>
  )

  return (
<>
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px` }}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <Toolbar />
        <Divider />
        <List>
        {['General', 'Science', 'Technology', 'Business', 'Sports', 'Health', 'Entertainment'].map((text, index) => (
         <ListItem button key={text}>
            <Link style={{ marginRight: '50px' }} to={`/news/${text}`}> {text}</Link>
          </ListItem>
        ))}
      </List>
      </Drawer>
      <Box
        component="main"
        sx={{ flexGrow: 1, bgcolor: 'background.default', p: 3 }}
      >
        <Toolbar />
      </Box>
    </Box>
    </>
  );
}