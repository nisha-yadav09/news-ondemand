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
import TravelExploreIcon from '@mui/icons-material/TravelExplore';


export default function Drawers() {
  const drawerWidth = 150;
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

  return (
<>
<Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ width: `calc(100% - ${drawerWidth}px)`, ml: `${drawerWidth}px`}}
      >
      </AppBar>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
             height: '98%',
            margin: '5px',
            
            boxSizing: 'border-box',
            borderRadius : '5px',
            bgcolor: '#71a0a5',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <TravelExploreIcon style={{ color: "black" , alignSelf:'center', marginTop:'20px' }} />
        <List style={{marginTop:'100px'}}>
        {['General', 'Science', 'Technology', 'Business', 'Sports', 'Health', 'Entertainment'].map((text, index) => (
         <ListItem button key={text} >
            <Link style={{ textDecoration: 'none', color:'black', textAlign:'center', fontWeight:'bold' }} to={`/news/${text}`}> {text}</Link>
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