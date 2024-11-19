// import React from 'react'
// import '../../styles/custom.css';
// import hrmLogo from '../../assets/hrm logo.JPG';
// import { Link } from 'react-router-dom';

// const HRregister = () => {
//   return (
//     <div>
//         <div className="logo">
//             <img src={hrmLogo} alt=""/>
//             <h1>Proxima HR</h1>
//         </div>

//         <div className="container">
//         <div className="text">Build Your Team with Ease </div>
//         <div className="inputs">
//           <div className="input-1">
//           <div className="left-input">
//                 <label htmlFor="text">First Name</label>
//                 <input type="text" placeholder='Enter First Name'/>
//             </div>
//             <div className="right-input">
//                 <label htmlFor="text">Last Name</label>
//                 <input type="text" placeholder='Enter Last Name'/>
//             </div>
//           </div>
//           <div className="input-2">
//             <label htmlFor="text">Role</label>
//             <input type="text" placeholder='Enter Role'/>
//           </div>

//           <div className="input-2">
//             <label htmlFor="text">Email</label>
//             <input type="email" placeholder='Enter Email'/>
//           </div>

//           <div className="input-2">
//             <label htmlFor="text">password</label>
//             <input type="password" placeholder='Enter password'/>
//           </div>

//           <div className="input-2">
//             <label htmlFor="text">Company Verification code</label>
//             <input type="text" placeholder='Enter Company Verification code' name = "admin_code" /> 
//           </div>
//         </div>
//         <button>Create an account</button>
//         <div className="login">
//           <h1>Already have an account?<Link to="/login"><span>Log in</span></Link></h1>
//           </div>
//       </div>
//     </div>
//   )
// }

// export default HRregister


import React, { useState } from 'react';
import axios from 'axios';
import '../../styles/custom.css';
import hrmLogo from '../../assets/hrm logo.JPG';
import { Link, useNavigate } from 'react-router-dom';

const HRregister = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    role: '',
    email: '',
    password: '',
    admin_code: '', // Company Verification Code
  });

  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');
  const navigate = useNavigate(); // Hook for navigation

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrorMessage('');
    setSuccessMessage('');
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();

    // Basic validation
    const { first_name, last_name, role, email, password, admin_code } = formData;
    if (!first_name || !last_name || !role || !email || !password || !admin_code) {
      setErrorMessage('All fields are required.');
      return;
    }

    // Submit form data
    axios
      .post('https://proximahr.onrender.com/admin/create-admin', formData)
      .then((response) => {
        console.log('Response:', response.data);
        setSuccessMessage('Team created successfully! You will be redirected to the login page.');

        // Redirect to the login page after 2 seconds
        setTimeout(() => {
          navigate('/login');
        }, 2000);

        setFormData({
          first_name: '',
          last_name: '',
          role: '',
          email: '',
          password: '',
          admin_code: '',
        });
      })
      .catch((error) => {
        console.error('Error:', error);
        setErrorMessage('Failed to create the team. Please check your details and try again.');
      });
  };

  return (
    <div>
      <div className="logo">
        <img src={hrmLogo} alt="" />
        <h1>Proxima HR</h1>
      </div>

      <div className="container">
        <div className="text">Build Your Team with Ease</div>
        <form onSubmit={handleSubmit}>
          <div className="inputs">
            <div className="input-1">
              <div className="left-input">
                <label htmlFor="first_name">First Name</label>
                <input
                  type="text"
                  name="first_name"
                  value={formData.first_name}
                  onChange={handleInputChange}
                  placeholder="Enter First Name"
                />
              </div>
              <div className="right-input">
                <label htmlFor="last_name">Last Name</label>
                <input
                  type="text"
                  name="last_name"
                  value={formData.last_name}
                  onChange={handleInputChange}
                  placeholder="Enter Last Name"
                />
              </div>
            </div>
            <div className="input-2">
              <label htmlFor="role">Role</label>
              <input
                type="text"
                name="role"
                value={formData.role}
                onChange={handleInputChange}
                placeholder="Enter Role"
              />
            </div>
            <div className="input-2">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                placeholder="Enter Email"
              />
            </div>
            <div className="input-2">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                placeholder="Enter Password"
              />
            </div>
            <div className="input-2">
              <label htmlFor="admin_code">Company Verification Code</label>
              <input
                type="text"
                name="admin_code"
                value={formData.admin_code}
                onChange={handleInputChange}
                placeholder="Enter Company Verification Code"
              />
            </div>
          </div>
          <button type="submit">Create an Account</button>
        </form>

        {errorMessage && <p className="error-message">{errorMessage}</p>}
        {successMessage && <p className="success-message">{successMessage}</p>}

        <div className="login">
          <h1>
            Already have an account? <Link to="/login"><span>Log in</span></Link>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default HRregister;
