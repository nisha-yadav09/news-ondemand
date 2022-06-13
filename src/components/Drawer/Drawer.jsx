import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useState } from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import CssBaseline from '@mui/material/CssBaseline';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import SportsFootballRoundedIcon from '@mui/icons-material/SportsFootballRounded';
import WorkHistoryRoundedIcon from '@mui/icons-material/WorkHistoryRounded';
import CellWifiRoundedIcon from '@mui/icons-material/CellWifiRounded';
import ScienceRoundedIcon from '@mui/icons-material/ScienceRounded';
import MedicalInformationRoundedIcon from '@mui/icons-material/MedicalInformationRounded';
import LiveTvRoundedIcon from '@mui/icons-material/LiveTvRounded';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';


export default function Drawers() {
  const drawerWidth = 200;
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
          
            <Link style={{ textDecoration: 'none', color:'black', textAlign:'center', fontWeight:'bold'}} to={`/news/${text}`}> 
            {text === 'Sports' && <SportsFootballRoundedIcon />}
            {text === 'Business' && <WorkHistoryRoundedIcon />}
            {text === 'Technology' && <CellWifiRoundedIcon />}
            {text === 'Science' && <ScienceRoundedIcon />}
            {text === 'Health' && <MedicalInformationRoundedIcon />}
            {text === 'Entertainment' && <LiveTvRoundedIcon />}
            {text === 'General' && <CalendarMonthRoundedIcon />}       
            <span style={{marginLeft: '15px'}}>{text}</span>
            </Link>
          </ListItem>
        ))}
      </List>
     
      </Drawer>
    
    </Box>
    </>
  );
}