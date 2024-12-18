import {React, useState} from 'react';
import Sidebar from '../components/Sidebar'
import test from '../assets/test.png'
import '../pages/AttendanceAndTracking.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const AttendanceAndTracking = () => {
    const [isOpen, setIsOpen] = useState(false);
    return (
        <div>
          <div className="main-dashboard">
            <Sidebar/>
            <div className="dashboard">
              <div className="slide-one">
                <div className="slide-one-1">
                  <div className="name">
                    <h5>Joseph Dooley</h5>
                    <h6>Good Morning</h6>
                  </div> 
                </div>
                <div className="slide-one-2">
                  <div className="search">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="glass-icon" /><input type="text" placeholder='Search' />
                  </div>
    
                  <div className="notification">
                    <FontAwesomeIcon icon="fa-solid fa-bell" />
                    <h6>6</h6>
                  </div>
    
                  <div className="user-profile">
                  <img src={test} alt="My profile" className ="My-profile" />
                  </div>
                </div> 
              </div>
    
              <hr className="horizontal" />
    
              <div className="dashboard-details">
                <h5>Dashboard</h5>
                <h6>24 Thursday October 2024</h6>
              </div>
    
              <div className="dashboard-details-1">
                <div className="first-grid">
                  <FontAwesomeIcon icon=" fa-circle-check" className="dashboard-icon-1" style={{color:'#22C55E',}}/> 
                  <div>
                    <h6>Attendance Rate</h6>
                    <h5>92.5%</h5>
                  </div>
                </div>
    
                <div className="first-grid">
                <FontAwesomeIcon icon="fa-solid fa-calendar" className="dashboard-icon-2" style={{color:'#007BFF',}} />
                  <div>
                    <h6>Hours Logged</h6>
                    <h5>45,620</h5>
                  </div>
                </div>
    
                <div className="first-grid">
                <FontAwesomeIcon icon="fa-clock" className="dashboard-icon-3" style={{color:'#6F42C1',}}   />
                  <div>
                    <h6>overtime Hours</h6>
                    <h5>1,245</h5>
                  </div>
                </div>
    
                <div className="first-grid">
                <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="dashboard-icon-4" style={{color:'#FF6464',}} />
                  <div>
                    <h6>Undertime Hours</h6>
                    <h5>1,120</h5>
                  </div>
                </div>
              </div>

            <div className="number-of-employee">
                <div className="new-div-1">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="glass-icon" /><input type="text" placeholder='Search Department' />
                </div>
                <div className="div-2">
                  <div className="btn-1">
                  <button onClick={() => setIsOpen(!isOpen)}>
                    <FontAwesomeIcon icon="fa-solid fa-filter" /> filter
                  </button>
                </div>
                {isOpen && (
                  <div className = "dropdownstyle" >
                    <p>All</p>
                    <p>Engineering</p>
                    <p>Design</p>
                    <p>Marketing</p>
                    <p>sales</p>
                    <p>Data science</p>
                    <p>operations</p>
                  </div>
                )}
                  <div className="btn">
                      <Link to={"/department/add-new-department"}><button><FontAwesomeIcon icon="fa-solid fa-plus" />Add New Department</button></Link>
                  </div>
                </div>
              </div>
    
            </div>
    
          </div>
        </div>
      )
}

export default AttendanceAndTracking
