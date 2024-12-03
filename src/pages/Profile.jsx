import React, {useState} from 'react';
import Sidebar from '../components/Sidebar'
import test from '../assets/test.png'
import '../pages/Dashboard.css'
import '../pages/EmployeeManagment.css'
import '../pages/profile.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from 'react-router-dom'

library.add(fas);

const EmployeeManagament = () => {

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
            <h5>Employee Profile</h5>
            <h6>24 Thursday October 2024</h6>
          </div>

          <div className="dashboard-details-1">
              <div className="number-of-employee">
                <div className="div-1">
                  <div className="div1-1">
                    <img src={test} alt="My profile" className ="My-profile" />
                  </div>
                  <div className="div1-2">
                    <h1>Michael Chen</h1>
                    <h2>Product Designer</h2>
                  </div>
                  <div className="div1-3">
                    <div className="btn-4">
                      <button>Active</button>
                    </div>
                  </div>
                </div>
                <div className="div-2">
                  <div className="btn">
                      <button>Edit Profile</button>
                  </div>
                </div>
              </div>
          </div>

          <div className="employee-info">
                <h2>michaelchen@rotech.com</h2>
                <h2>08052567231</h2>
                <h2>New York office, Floor 5v</h2>
              </div>

              <div className="employee-profile-info">
                <div><button>Personal Information</button></div>
                <div><button>Compensation</button></div>
                <div><button>Task Overview</button></div>
                <div><button>Performance Metrics</button></div>
                <div><button>Attendance & Leave</button></div>
              </div>

          <div className="dashboard-details-2">
              <div className="header">
                <h1>Personal Information</h1>
              </div> 
            <div className="dashboard-details-2-1">       
              <div className="row-1">
                <div>
                  <h2>Full Name</h2>
                  <h3>Michael Chen</h3>
                </div>
                <div>
                  <h2>Date of Birth</h2>
                  <h3>Tue Nov 12 1998</h3>
                </div>
                <div>
                  <h2>Gender</h2>
                  <h3>Male</h3>
                </div>
                <div>
                  <h2>Phone</h2>
                  <h3>08034521176</h3>
                </div>
              </div>


              <div className="row-1">
                <div>
                  <h2>Email</h2>
                  <h3>michaelchen@rotech.com</h3>
                </div>
                <div>
                  <h2>Address</h2>
                  <h3>123 Tech Lance,
                  San Francisco, CA, USA</h3>
                </div>
                <div>
                  <h2>Emergency Contact Name</h2>
                  <h3>Mrs Sarah Chen</h3>
                </div>
                <div>
                  <h2>Relationship to Employee</h2>
                  <h3>spouse</h3>
                </div>
              </div>

              <div className="row-1">
                <div>
                  <h2>Spouse Number</h2>
                  <h3>09064377589</h3>
                </div>
                <div>
                  <h2>Employee ID</h2>
                  <h3>00172</h3>
                </div>
                <div>
                  <h2>Employee Date</h2>
                  <h3>March 15,2021</h3>
                </div>
                <div>
                  <h2>Department</h2>
                  <h3>Design</h3>
                </div>
              </div>

              <div className="row-1">
                <div>
                  <h2>Head of Department</h2>
                  <h3>David Wilson</h3>
                </div>
                <div>
                  <h2>work mode</h2>
                  <h3>onsite</h3>
                </div>
                <div>
                  <h2>Work location</h2>
                  <h3>New York Offfice, Floor 5V</h3>
                </div>
                <div>
                  <h2>Role</h2>
                  <h3>Full Time</h3>
                </div>
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default EmployeeManagament