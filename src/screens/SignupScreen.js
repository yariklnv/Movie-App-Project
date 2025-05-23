import React, {useRef} from 'react';
import './SignupScreen.css';
import { auth } from '../firebase';

function SignupScreen() {
  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  
  // const [email, setEmail] = useState('');
  // const [password, setPassword] = useState;
  const register = (e) => {
    e.preventDefault();

    auth
    .createUserWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then(authUser => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });
    // Firebase register
  };

  const signIn = (e) => {
    e.preventDefault();

    auth
    .signInWithEmailAndPassword(
      emailRef.current.value,
      passwordRef.current.value
    )
    .then((authUser) => {
      console.log(authUser);
    })
    .catch((error) => {
      alert(error.message);
    });
    // Firebase sign in
  };



  return (
    <div className='signupScreen'>
      <form>
        <h1>Sign In</h1>
        <input ref={emailRef} placeholder='Email' type="email" />
        <input ref={passwordRef} placeholder='Password' type="password" />
        <button type='submit' onClick={signIn}>
          Sign In
          </button>

        <h4>
          <span className='signupScreen_gray'> New to Netflix? </span>
          <span className='signupScreen_link' onClick={register}>
            Sign up now.
            </span>
        </h4>
      </form>
    </div>
  )
}

export default SignupScreen;
