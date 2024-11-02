import React from 'react';
import '../auth/custom.css'
import hrmLogo from '../assets/hrm logo.JPG'

const CompanyRegister = () => {
  return (
    <div>
    <div className="logo">
      <img src={hrmLogo} alt=""/>
      <h1>Proxima HR</h1>
    </div>
  
      <div className="container">
        <div className="text">Register Company</div>
        <div className="inputs">
          <div className="input-1">
          <div className="left-input">
                <label htmlFor="text">Company Name</label>
                <input type="text" placeholder='Enter company Name'/>
            </div>
            <div className="right-input">
                <label htmlFor="text">Company ID</label>
                <input type="text" placeholder='Enter company ID'/>
            </div>
          </div>
          <div className="input-1">
          <div className="left-input">
                <label htmlFor="text">Industry</label>
                <input type="text" placeholder='Enter Industry Name'/>
            </div>
            <div className="right-input">
                <label htmlFor="text">Country</label>
                <input type="text" placeholder='Enter country Name'/>
            </div>
          </div>
          <div className="input-1">
          <div className="left-input">
                <label htmlFor="text">State</label>
                <input type="text" placeholder='Enter state Name'/>
            </div>
            <div className="right-input">
                <label htmlFor="text">Town</label>
                <input type="text" placeholder='Enter Town Name'/>
            </div>
          </div>
          <div className="input-2">
            <label htmlFor="text">Company Email</label>
            <input type="text" placeholder='Enter Company Email' />
          </div>
        </div>
        <button>Register Company</button>
      </div>
    </div>
  )
}

export default CompanyRegister
