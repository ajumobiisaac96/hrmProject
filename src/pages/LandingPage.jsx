import React from 'react'
import Logo from '../assets/hrm logo.JPG'
import '../pages/LandingPage.css'
import HeroImage from '../assets/HeroImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmployeeIcon from '../assets/employee-icon.jpg'
import DollarIcon from '../assets/dollar-icon.jpg'
import TaskIcon from '../assets/leave-manangment-icon.jpg'

const LandingPage = () => {
  return (
    <div>
      <nav class="navbar">
        <div class="logo">
            <img src={Logo} alt="Logo" class="logo-img"/>
            <span class="logo-text">Proxima HR</span>
        </div>
        <ul class="nav-links">
            <li><a href="#hero-section">Features</a></li>
            <li><a href="#">How It Works</a></li>
            <li><a href="#">Benefits</a></li>
            <li><a href="#">FAQ</a></li>
        </ul>
        <button class="demo-button">
            Request Demo
            <span class="arrow-icon">➔</span>
        </button>
    </nav>

    {/* hero section */}

    <div className="hero-section">
        <h1>Stop Wasting Time on Manual HR Tasks <br />
        <span>Simplify</span> Management</h1>
        <p>Streamline attendance, payroll, leave tracking, and reporting to save time and boost productivity</p>
        <button>Request Demo <FontAwesomeIcon icon="fa-solid fa-arrow-right" /> </button>
        <img src={HeroImage} alt="" />
    </div>


      <div className='sub-info-h1'>
        <h1>Everything You Need to Manage Your Workforce</h1>
      </div>

    <div className="sub-info">

      <div className="sub-info-div">
        <img src={EmployeeIcon} alt="" />
        <h1>Efficient Employee Management</h1>
        <p>Keep all employee details in one place.</p>
      </div>

      <div className="sub-info-div">
        <img src={DollarIcon} alt="" />
        <h1>Accurate Payroll Processing</h1>
        <p>Effortlessly calculate salaries, deductions, <br /> and taxes in one go.</p>
      </div>

      <div className="sub-info-div">
        <img src={TaskIcon} alt="" />
        <h1>Simple Leave Tracking</h1>
        <p>Track employee leave balances with no hassle.</p>
      </div>

    </div>

    <div className='sub-info-h1'>
        <h1>Your Complete Workforce <br /> Management Solution</h1>
    </div>

    <div className='sub-info-p'>
        <h1>Streamline your HR processes with a <br /> platform designed to manage every aspect of your workforce</h1>
    </div>
    

    </div>
  )
}

export default LandingPage
