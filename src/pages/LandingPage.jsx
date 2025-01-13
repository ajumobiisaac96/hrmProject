import React from 'react'
import Logo from '../assets/hrm logo.JPG'
import '../pages/LandingPage.css'
import HeroImage from '../assets/HeroImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmployeeIcon from '../assets/employee-icon.jpg'
import DollarIcon from '../assets/dollar-icon.jpg'
import TaskIcon from '../assets/leave-manangment-icon.jpg'
import Attendance from '../assets/Attendance-LandingPage.jpg'
import Department from '../assets/Department-LandingPage.jpg'
import Report from '../assets/Report-LandingPage.jpg'
import Employee from '../assets/EmployeeManagment.jpg'
import Payroll from '../assets/PayrollManagment.jpg'
import Leave from '../assets/LeaveManagment.jpg'

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

    <nav className='LandingPage-Navbar' >
      <ul>
        <li>Attendance and Tracking</li>
        <li>Department</li>
        <li>Report and Analysis</li>
        <li>Employee Management</li>
        <li>Payroll Management</li>
        <li>Leave Management</li>
      </ul>
    </nav>

    <div className="display-nav-image">
        <div className="attendance">
          <div className="left">
            <h1>Attendance and Tracking</h1>
            <p>Monitor and record employee attendance seamlessly with precision. Clock-ins, track hours worked, and reduce manual errors, ensuring accurate and up-to-date attendance records. Perfect for managing in-office, remote, and hybrid employees with ease.</p>
          </div>
          <div className="right">
            <img src={Attendance} alt="" />
          </div>
        </div>
        <div className="department">
          <div className="left">
            <h1>Department</h1>
            <p>organize and structure your workforce into manageable departments. Assign roles and track departmental attendance. A better -organized workforce leads to increased productivity and accountability</p>
          </div>
          <div className="right">
            <img src={Department} alt="" />
          </div>
        </div>
        <div className="ReportAnalysis">
          <div className="left">
            <h1>Report and Analysis</h1>
            <p>Make data-driven decisions with robust reporting tools. Get detailed insights intoo workforce attendance patterns, payroll summaries, and eave trends. Tailor reports to your needs and export them with ease for further analysis</p>
          </div>
          <div className="right">
            <img src={Report} alt="" />
          </div>
        </div>
        <div className="EmployeeManagment">
          <div className="left">
            <h1>Employee Managment</h1>
            <p>Centralize all employee information in one secure platform. From personal details and employment data history to attendance records, access everything you need in just a few clicks. keep your data organized,secure and always up-to-date.</p>
          </div>
          <div className="right">
            <img src={Employee} alt="" />
          </div>
        </div>
        <div className="PayrollManagment">
          <div className="left">
            <h1>Payroll Managment</h1>
            <p>Simplify the complexities of payroll with automated salary calculations. Handle taxes, deductions, and allownaces efortlessly, while ensuring comliance with local regulations. save time, minimize errors, and deliver accurate paychecks everytime.</p>
          </div>
          <div className="right">
            <img src={Payroll} alt="" />
          </div>
        </div>
        <div className="LeaveManagment">
          <div className="left">
            <h1>Leave Managment</h1>
            <p>Empower your wworkforce witha smooth leave manangment system. Enable employees to submit leave request, view balances, and check approvals instantly. streamline leave schelduling to prevent conflicts and maintain productivity.</p>
          </div>
          <div className="right">
            <img src={Leave} alt="" />
          </div>
        </div>
    </div>
    

    </div>
  )
}

export default LandingPage
