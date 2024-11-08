import React, { useState } from 'react';
// import axios from 'axios';
import '../auth/custom.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hrmLogo from '../assets/hrm logo.JPG';
import { Link } from 'react-router-dom';

// Adding FontAwesome icons
library.add(fas, far, fab);

const CompanyRegister = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    registration_number: '',
    name: '',
    email: '',
    industry: '',
    country: '',
    state: '',
    town: '',
  });
  const [message, setMessage] = useState('');

  // Helper to check if the form is valid
  const isFormValid = Object.values(formData).every((value) => value.trim() !== '');

  // Handle input field changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterClick = async () => {
    if (!isFormValid) {
      setMessage('Please fill out all fields');
      return;
    }
  
    // Mock the API response (simulate a successful registration)
    setTimeout(() => {
      setPopupVisible(true);
      setMessage(''); // Clear any error message
    }, 1000); // Simulates a 1-second delay as if you're waiting for the server's response
  };
  
  

  return (
    <div>
      {/* Logo Section */}
      <div className="logo">
        <img src={hrmLogo} alt="HRM Logo" />
        <h1>Proxima HR</h1>
      </div>

      {/* Form Container with conditional blur effect */}
      <div className={`container ${isPopupVisible ? 'blur' : ''}`}>
        <div className="text">Register Company</div>
        <div className="inputs">
          {/* Company Name and ID */}
          <div className="input-1">
            <div className="left-input">
              <label htmlFor="name">Company Name</label>
              <input
                type="text"
                name="name"
                placeholder="Enter company Name"
                value={formData.name}
                onChange={handleChange}
              />
            </div>
            <div className="right-input">
              <label htmlFor="registration_number">Company ID</label>
              <input
                type="text"
                name="registration_number"
                placeholder="Enter company ID"
                value={formData.registration_number}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Industry and Country */}
          <div className="input-1">
            <div className="left-input">
              <label htmlFor="industry">Industry</label>
              <input
                type="text"
                name="industry"
                placeholder="Enter Industry Name"
                value={formData.industry}
                onChange={handleChange}
              />
            </div>
            <div className="right-input">
              <label htmlFor="country">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter country Name"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* State and Town */}
          <div className="input-1">
            <div className="left-input">
              <label htmlFor="state">State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state Name"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="right-input">
              <label htmlFor="town">Town</label>
              <input
                type="text"
                name="town"
                placeholder="Enter Town Name"
                value={formData.town}
                onChange={handleChange}
              />
            </div>
          </div>

          {/* Email Input */}
          <div className="input-2">
            <label htmlFor="email">Company Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Company Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>

        {/* Registration Button */}
        <button onClick={handleRegisterClick}>Register Company</button>
        {message && <p>{message}</p>}
      </div>

      {/* Success Popup */}
      {isPopupVisible && (
        <div className="container-2">
          <FontAwesomeIcon icon={faCircleCheck} className="check-icon" />
          <div className="pop-up-txt">
            <h1>Company Registration Successful</h1>
            <p>Your company's six-digit verification code was sent to your email</p>
            <Link to="/register">
              <h3>Create a Proxima HR account</h3>
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompanyRegister;
