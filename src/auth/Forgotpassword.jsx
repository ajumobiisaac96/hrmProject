import React from 'react';
import { Link, useNavigate } from 'react-router-dom';  
import '../auth/custom.css';
import hrmLogo from '../assets/hrm logo.JPG';

const Forgotpassword = () => {
  const navigate = useNavigate();  

  
  const handleSendCode = (e) => {
    e.preventDefault();  
    navigate('/verifyemail');  
  };

  return (
    <div>
      <div className="logo">
        <img src={hrmLogo} alt=""/>
        <h1>Proxima HR</h1>
      </div>
      <div className="container">
        <div className="text">Forgot Your Password ?</div>
        <div className="info">
          <p>Enter your email address below and we'll send you a
            code to log in and reset your password.</p>
        </div>
        <form>
          <div className="inputs"></div>
          <div className="input-2">
            <label htmlFor="text">Email</label>
            <input type="email" placeholder='Enter Email' required />
          </div>

 
          <button onClick={handleSendCode}>Send Code</button>
        </form>

        <div className="login">
          <h1>Remember your Password?
            <Link to="/login"><span>Login</span></Link>
          </h1>
        </div>
      </div>
    </div>
  );
}

export default Forgotpassword;
