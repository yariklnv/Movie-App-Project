import React from 'react'
import './LoginScreen.css'

function LoginScreen() {
  return (
  <div className='loginScreen'>
      <div className='loginScreen_background'>
        <img
        className='loginScreen_logo'
          src='https://loodibee.com/wp-content/uploads/Netflix-logo.png'
          alt=""
        />
        <button className='loginScreen_button'>Sign In</button>

        <div className='loginScreen_gradient' />
      </div>

      <div className='loginScreen_body'>
        <>
          <h1>Unlimited films, TV programmes and more.</h1>
          <h2>Watch anywhere. Cancel at any time.</h2>
          <h3>Ready to watch? Enter your email to create or restart your membership</h3>

          <div className='loginScreen_input'>

          </div>
        </>
      </div>
  </div>
  );
}

export default LoginScreen