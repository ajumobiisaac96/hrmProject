import React from 'react';
import Sidebar from '../components/Sidebar'
import test from '../assets/test.png'
import '../pages/Dashboard.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const dashboard = () => {
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
              <FontAwesomeIcon icon="fa-solid fa-users" className="dashboard-icon"/>
              <div>
                <h6>Total employees</h6>
                <h5>40</h5>
              </div>
            </div>

            <div className="first-grid">
            <FontAwesomeIcon icon="fa-solid fa-calendar" className="dashboard-icon" />
              <div>
                <h6>Leave requests</h6>
                <h5>2</h5>
              </div>
            </div>

            <div className="first-grid">
            <FontAwesomeIcon icon="fa-solid fa-calendar-xmark" className="dashboard-icon" />
              <div>
                <h6>Pending Tasks</h6>
                <h5>5</h5>
              </div>
            </div>

            <div className="first-grid">
            <FontAwesomeIcon icon="fa-solid fa-users" className="dashboard-icon" />
              <div>
                <h6>Attendance Overview</h6>
                <h5>92%</h5>
              </div>
            </div>
          </div>

          <div className="dashboard-details-2">
            <div className="grid">
              <h1>Task Overview</h1>
              <hr />
              <h5>Number of pending tasks</h5>
              <h6>5 pending Tasks</h6>

              <div className = "priority">
              <h5>Priority</h5>
              <h6>3 High Priority</h6>
              <h6>2 Medium Priority</h6>
              </div>

              <div className="TaskProgress">
                
              </div>

            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default dashboard
