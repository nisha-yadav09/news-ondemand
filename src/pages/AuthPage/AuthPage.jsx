
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import { Link } from 'react-router-dom';

export default function AuthPage({ setUser }) {
  return (
    <>
      <main className='Auth-main'>
        <div>
        <a href={`https://www.linkedin.com/in/nisha-yadav09/`} target="_blank" > <LinkedInIcon style={{ color: "#77628c" , marginRight : "50px" }} /></a>
        <a href={`https://github.com/nisha-yadav09/`} target="_blank" ><GitHubIcon style={{ color: "#77628c", marginRight : "50px" }} /></a>
        <a href={`https://twitter.com/`} target="_blank" ><TwitterIcon style={{ color: "#77628c" , marginRight : "50px" }} /></a>
        <a href={`https://instagram.com/`} target="_blank" ><InstagramIcon style={{ color: "#77628c"}} /></a>
          
        </div>
        <h1 style={{ color: "#71a0a5" }}> World <TravelExploreIcon style={{ color: "#71a0a5" }} /> News </h1>
        <div className='Auth-div'>
          <SignUpForm setUser={setUser} />
          <div className="vl" style={{borderLeft: '4px solid #acc6aa'}}>
          </div>
          <LoginForm setUser={setUser} />
        </div>
        <div>
        </div>
      </main>
    </>
  );
}