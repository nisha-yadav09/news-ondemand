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


export default function NavBar({ user, setUser }) {
  const drawerWidth = 240;
  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }


  return (
<>
        <nav className="blah">
      {/* <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="/news/general" > 💭 General</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="/news/science"> 🧠 Science</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="/news/technology"> 💾 Technology</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="/news/business"> 💵 Business</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="/news/sports"> 🤸‍♀️ Sports</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="/news/health" > 🌡️ Health</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="/news/entertainment"> 🎵 Entertainment</Link> */}
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="/news/chat"> Chat Room</Link>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
    </>
  );
}