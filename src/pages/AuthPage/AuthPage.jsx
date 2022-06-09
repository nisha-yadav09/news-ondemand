
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  return (
    <>
    <h2> <h1>🗺</h1> News OnDemand </h2>
    <div className='Auth-div'>
          <SignUpForm setUser={setUser} />
          <div class="vl"></div>
          <LoginForm setUser={setUser} />
    </div>
    </>
  );
}