import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import { useState } from 'react';
import '../NavBar/NavBar.css'


export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }


  return (
    <>
      <nav style={{marginLeft:'50%',width:'50%', display:'grid', justifyContent: 'space-around', gridTemplateColumns: '1fr 1fr 1fr'}}>
        <button className='mk'>
        <Link style={{ textDecoration: 'none', color:'black', textAlign:'center' }} to="/news/chat"> Chat Room</Link>
        </button >
        <button>
        <span>Welcome, {user.name}</span>
        </button>
        <button>
        <Link to="" onClick={handleLogOut}  style={{ textDecoration: 'none', color:'black', textAlign:'center' }}>Log Out</Link>
        </button>
      </nav>
    </>
  );
}