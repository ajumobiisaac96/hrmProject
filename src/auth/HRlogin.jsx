import React from 'react'
import '../auth/custom.css'
import hrmLogo from '../assets/hrm logo.JPG'
import { Link } from 'react-router-dom';

const HRlogin = () => {
  return (
    <div>
        <div className="logo">
            <img src={hrmLogo} alt=""/>
            <h1>Proxima HR</h1>
        </div>

        <div className="container">
        <div className="text">Login to Your Dashboard </div>
        <div className="inputs">
          </div>
          <div className="input-2">
            <label htmlFor="text">Email</label>
            <input type="email" placeholder='Enter Email' />
          </div>

          <div className="input-2">
            <div className="forgotpassword">
            <label htmlFor="text">password</label>
            <Link to="/forgotpassword"><p>Forgot Password?</p></Link>
            </div>
            <input type="password" placeholder='Enter password' />
          </div>
        <button>Login</button>
        <div className="login">
          <h1>Don't have an account?<Link to="/register"><span>Signup</span></Link></h1>
          </div>
        </div>
      </div>
  )
}

export default HRlogin
