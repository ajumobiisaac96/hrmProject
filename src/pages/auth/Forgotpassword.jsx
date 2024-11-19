import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../../styles/custom.css';
import hrmLogo from '../../assets/hrm logo.JPG';

const Forgotpassword = () => {
  const [email, setEmail] = useState('');  // State for email input
  const [error, setError] = useState('');  // State for error message
  const navigate = useNavigate();

  // Function to validate email format
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };


// Inside Forgotpassword component
const handleSendCode = (e) => {
  e.preventDefault();

  if (!validateEmail(email)) {
    setError('Please enter a valid email address.');
  } else {
    setError('');  // Clear error if email is valid
    navigate('/verifyemail', { state: { email } });  // Pass email to the next route
  }
};


  return (
    <div>
      <div className="logo">
        <img src={hrmLogo} alt=""/>
        <h1>Proxima HR</h1>
      </div>
      <div className="container">
        <div className="text">Forgot Your Password?</div>
        <div className="info">
          <p>Enter your email address below and we'll send you a code to log in and reset your password.</p>
        </div>
        <form>
          <div className="inputs"></div>
          <div className="input-2">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Enter Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}  // Update email state on input change
              required
            />
            {error && <p style={{ color: 'red' }}>{error}</p>}  {/* Show error message if invalid */}
          </div>

          <button onClick={handleSendCode}>Send Code</button>
        </form>

        <div className="login">
          <h1>
            Remember your Password?
            <Link to="/login"><span>Login</span></Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Forgotpassword;
