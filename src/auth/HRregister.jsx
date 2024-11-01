import React from 'react'
import '../auth/custom.css'
import hrmLogo from '../assets/hrm logo.JPG'
import { Link } from 'react-router-dom';

const HRregister = () => {
  return (
    <div>
        <div className="logo">
            <img src={hrmLogo} alt=""/>
            <h1>Proxima HR</h1>
        </div>

        <div className="container">
        <div className="text">Build Your Team with Ease </div>
        <div className="inputs">
          <div className="input-1">
          <div className="left-input">
                <label htmlFor="text">First Name</label>
                <input type="text" placeholder='Enter Your First Name'/>
            </div>
            <div className="right-input">
                <label htmlFor="text">Last Name</label>
                <input type="text" placeholder='Enter your Last Name'/>
            </div>
          </div>
          <div className="input-2">
            <label htmlFor="text">Role</label>
            <input type="text" placeholder='Enter Role'/>
          </div>

          <div className="input-2">
            <label htmlFor="text">Email</label>
            <input type="email" placeholder='Enter Email'/>
          </div>

          <div className="input-2">
            <label htmlFor="text">password</label>
            <input type="password" placeholder='Enter password'/>
          </div>

          <div className="input-2">
            <label htmlFor="text">Company Verification code</label>
            <input type="text" placeholder='Enter Company Email' />
          </div>
        </div>
        <button>Create an account</button>
        <div className="login">
          <h1>Already have an account?<Link to="/login"><span>Log in</span></Link></h1>
          </div>
      </div>
    </div>
  )
}

export default HRregister
