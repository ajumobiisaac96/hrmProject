import React from 'react'
import Logo from '../assets/hrm logo.JPG'
import '../pages/LandingPage.css'
import HeroImage from '../assets/HeroImg.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import EmployeeIcon from '../assets/employee-icon.jpg'
import DollarIcon from '../assets/dollar-icon.jpg'
import TaskIcon from '../assets/leave-manangment-icon.jpg'
import LandingPageNavbar from '../components/LandingPageNavbar';
import ImageOne from '../assets/why we choose.jpg'
import ImageTwo from '../assets/why we choose-2.jpg'
import CardOne from '../components/CardOne'
import CardTwo from '../components/CardTwo'
import CardThree from '../components/CardThree'
import FAQ from '../components/FAQ'
import LastSlide from '../assets/LastSIDE.png'
import Footer from '../components/Footer';


const LandingPage = () => {

  return (
    <div>
      <div className="LandingPage">
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

   <div>
    <LandingPageNavbar/>
   </div>

    <div className="why-we-choose">
      <h1>Why Choose Our HRMS</h1>
      <p>Manage your workforce with ease, precision, and clarity.</p>
    </div>

    <div className='why-we-choose-dev'>
      <img src={ImageOne} alt="" />
      <img src={ImageTwo} alt="" />
    </div>

    <div className="why-we-choose">
      <h1>Get started in Three steps</h1>
      <p>Set up your HRMS and simplify team management.</p>
    </div>

    <div className="cards">
      <CardOne/>
      <CardTwo/>
      <CardThree/>
    </div>

    <div className="FAQ">
      <h1>Frequently Asked Questions</h1>
      <FAQ/>
    </div>

    <div className="Last-side">
      <div className="left-col">
        <h1>Streamline Your HR Operations with Proxima Hr </h1>
        <p>Proxima Hr is a cutting-edge Human Resource Management System that revolutionizes workforce management. It empowers HR professionals to handle complex tasks effortlessly, from payroll to attendance tracking. By centralizing data , it saves time and reduces errors, allowing focus on building a productive workforce.</p>
        <button class="demo-button">
            Request Demo
            <span class="arrow-icon">➔</span>
        </button>
      </div>
      <div className="right-col">
        <img src={LastSlide} alt="" />
      </div>
    </div>

      <div className="requestdemo">
        <h1>Request a Demo <FontAwesomeIcon icon="fa-solid fa-arrow-right" /></h1>
      </div>
    </div>

    <div className="footer">
      <Footer/>
    </div>
    

  </div>
      
  )
}

export default LandingPage
