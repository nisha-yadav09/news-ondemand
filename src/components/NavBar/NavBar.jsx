import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="" >General</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="" >Science</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="" >Technology</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="" >Business</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="" >Sports</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="" >Health</Link>
      <Link style={{ textDecoration: 'none' , marginRight: '50px' }} to="" >Entertainment</Link>
      <span>Welcome, {user.name}</span>
      &nbsp; | &nbsp;
      <Link to="" onClick={handleLogOut}>Log Out</Link>
    </nav>
  );
}