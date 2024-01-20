import React from 'react'
import './css/loginsignup.css'

const LoginSignup = () => {
  return (
    <div className='login-signup'>
      <div className="login-signup-container">
        <h1>Sign Up</h1>
        <div className="login-signup-fields">
          <input type="text" placeholder='Username' />
          <input type="email" placeholder='Enter your E-mail' />
          <input type="password" placeholder='Enter your password' />
        </div>
        <button>Continue</button>
        <p className='login-signup-login'>Already have an account? <span>Login Here</span></p>
        <div className="login-signup-agree">
          <input type="checkbox" name='' id=''/>
          <p>by continue i agree terms and conditions</p>
        </div>
      </div>
    </div>
  )
}

export default LoginSignup