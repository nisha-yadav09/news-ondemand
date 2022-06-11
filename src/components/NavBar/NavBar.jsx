import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import '../NavBar/NavBar.css'

export default function NavBar({ user, setUser }) {
  function handleLogOut() {
    userService.logOut();
    setUser(null);
  }

  return (
    <>
      <nav style={{ marginLeft: '50%', width: '50%', display: 'grid', justifyContent: 'space-around', gridTemplateColumns: '1fr 1fr 1fr 1fr' }}>
        <button >
          <Link style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }} to="/news"> <TravelExploreIcon style={{ color: "black" }} /> </Link>
        </button >
        <button >
          <Link style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }} to="/news/chat"> Chat Room</Link>
        </button >
        <button>
          <span>Hello, {user.name}</span>
        </button>
        <button>
          <Link to="" onClick={handleLogOut} style={{ textDecoration: 'none', color: 'black', textAlign: 'center' }}>Log Out</Link>
        </button>
      </nav>
    </>
  );
}