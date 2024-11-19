import React from 'react';
import { useLocation } from 'react-router-dom';  // Import useLocation
import '../../styles/custom.css';
import hrmLogo from '../../assets/hrm logo.JPG';

const Verifyemail = () => {
  const location = useLocation();
  const { email } = location.state || {};  // Access the passed email or set as undefined if not provided

  return (
    <div>
      <div className="logo">
        <img src={hrmLogo} alt="" />
        <h1>Proxima HR</h1>
      </div>
      <div className="container">
        <div className="text">Verify your email</div>
        <div className="info">
          <p>
            We sent you a six-digit confirmation code to 
            <span>{email || 'your email'}</span>. Please enter it below to
            confirm your email address.
          </p>
        </div>
        <div className="inputs"></div>
        <div className="input-2">
          <input type="number" placeholder="Enter 6 digit code" required />
        </div>

        <div className="login">
          <h1>
            Didn't receive a code? <span>Resend code</span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Verifyemail;
