
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import TwitterIcon from '@mui/icons-material/Twitter';
import GitHubIcon from '@mui/icons-material/GitHub';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function AuthPage({ setUser }) {
  return (
    <>
      <main className='Auth-main'>
        <div>
          <LinkedInIcon style={{ color: "#77628c" , marginRight : "50px" }} />
          <TwitterIcon style={{ color: "#77628c" , marginRight : "50px" }} />
          <InstagramIcon style={{ color: "#77628c" , marginRight : "50px"}} />
          <GitHubIcon style={{ color: "#77628c" }} />
        </div>
        <h1 style={{ color: "#71a0a5" }}> World <TravelExploreIcon style={{ color: "#71a0a5" }} /> News </h1>
        <div className='Auth-div'>
          <SignUpForm setUser={setUser} />
          <div class="vl">

          </div>
          <LoginForm setUser={setUser} />
        </div>
        <div>

        </div>
      </main>
    </>
  );
}