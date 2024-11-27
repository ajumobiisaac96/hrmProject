import React from 'react'
import hrmLogo from '../assets/hrm logo.JPG';
import '../components/sidebar.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas, faCircleCheck } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const sidebar = () => {
  return (
    <div>
    <div className="sidebar">
      <div className="logo">
          <img src={hrmLogo} alt="HRM Logo" />
          <h1>Proxima HR</h1>
        </div>
        <hr />
        <div className="sidebar-icons">
          <p>Dashboard</p>
          <p>Department</p>
          <p>Employee Managment</p>
          <p>Attendance & Tracking</p>
          <p>Leave Managment</p>
          <p>Payroll Managment</p>
          <p>Report & Analysis</p>
          <p>Task Managment</p>
          <p>Notification</p>
          <p>Profile</p>
        </div>
      </div>
    </div>
  )
}

export default sidebar
