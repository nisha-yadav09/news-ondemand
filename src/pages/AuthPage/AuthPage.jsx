import { useState } from 'react';
import './AuthPage.css';
import SignUpForm from '../../components/SignUpForm/SignUpForm';
import LoginForm from '../../components/LoginForm/LoginForm';

export default function AuthPage({ setUser }) {
  const [showSignUp, setShowSignUp] = useState(false);
  return (
    <div className='Auth-div'>
      {/* <button onClick={() => setShowSignUp(!showSignUp)}>{showSignUp ? 'Log In' : 'Sign Up'}</button> */}
      {/* { showSignUp ? */}
          <SignUpForm setUser={setUser} />
          {/* : */}
          <div class="vl"></div>
          <LoginForm setUser={setUser} />
      {/* } */}
    </div>
  );
}