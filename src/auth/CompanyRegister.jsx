import React, { useState } from 'react';
import axios from 'axios';
import '../auth/custom.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { far } from '@fortawesome/free-regular-svg-icons';
import { fab } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import hrmLogo from '../assets/hrm logo.JPG';
import { Link } from 'react-router-dom';

library.add(fas, far, fab);

const CompanyRegister = () => {
  const [isPopupVisible, setPopupVisible] = useState(false);
  const [formData, setFormData] = useState({
    companyName: '',
    companyId: '',
    industry: '',
    country: '',
    state: '',
    town: '',
    email: '',
  });
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleRegisterClick = async () => {
    try {
      const response = await axios.post(
        'https://proximahr.onrender.com/company/register_company',
        formData,
        { headers: { 'Content-Type': 'application/json' } }
      );
  
      if (response.status === 200 || response.status === 201) {
        setPopupVisible(true); // Show the success popup only if registration is successful
        setMessage('Company registration successful!');
      } else {
        setMessage('Unexpected response from server. Please try again.');
      }
    } catch (error) {
      console.error('Registration failed:', error);
      setMessage('Error registering company. Please try again.');
    }
  };
  

  return (
    <div>
      <div className="logo">
        <img src={hrmLogo} alt="" />
        <h1>Proxima HR</h1>
      </div>

      <div className={`container ${isPopupVisible ? 'blur' : ''}`}>
        <div className="text">Register Company</div>
        <div className="inputs">
          <div className="input-1">
            <div className="left-input">
              <label htmlFor="text">Company Name</label>
              <input
                type="text"
                name="companyName"
                placeholder="Enter company Name"
                value={formData.companyName}
                onChange={handleChange}
              />
            </div>
            <div className="right-input">
              <label htmlFor="text">Company ID</label>
              <input
                type="text"
                name="companyId"
                placeholder="Enter company ID"
                value={formData.companyId}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-1">
            <div className="left-input">
              <label htmlFor="text">Industry</label>
              <input
                type="text"
                name="industry"
                placeholder="Enter Industry Name"
                value={formData.industry}
                onChange={handleChange}
              />
            </div>
            <div className="right-input">
              <label htmlFor="text">Country</label>
              <input
                type="text"
                name="country"
                placeholder="Enter country Name"
                value={formData.country}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-1">
            <div className="left-input">
              <label htmlFor="text">State</label>
              <input
                type="text"
                name="state"
                placeholder="Enter state Name"
                value={formData.state}
                onChange={handleChange}
              />
            </div>
            <div className="right-input">
              <label htmlFor="text">Town</label>
              <input
                type="text"
                name="town"
                placeholder="Enter Town Name"
                value={formData.town}
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="input-2">
            <label htmlFor="text">Company Email</label>
            <input
              type="email"
              name="email"
              placeholder="Enter Company Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
        </div>
        <button onClick={handleRegisterClick}>Register Company</button>
        {message && <p>{message}</p>}
      </div>

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
