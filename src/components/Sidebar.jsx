import React from 'react';
import hrmLogo from '../assets/hrm logo.JPG';
import '../components/sidebar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link, useLocation } from 'react-router-dom';

library.add(fas);

const Sidebar = () => {
  const location = useLocation(); // Get the current path

  const menuItems = [
    { name: "Dashboard", icon: "fa-house", to: "/Dashboard" },
    { name: "Department", icon: "fa-building", to: "/Department" },
    { name: "Employee Management", icon: "fa-users", to: "/employee-managment" },
    { name: "Attendance & Tracking", icon: "fa-clipboard-user", to: "/AttendanceTracking" },
    { name: "Leave Management", icon: "fa-calendar", to: "/LeaveManagement" },
    { name: "Payroll Management", icon: "fa-money-bill-1", to: "/PayrollManagement" },
    { name: "Report & Analysis", icon: "fa-chart-line", to: "/ReportAnalysis" },
    { name: "Task Management", icon: "fa-list-check", to: "/TaskManagement" },
    { name: "Notification", icon: "fa-bell", to: "/Notification" },
    { name: "Profile", icon: "fa-user", to: "/Profile" },
  ];

  return (
    <div>
      <div className="sidebar">
        <div className="side-logo">
          <img src={hrmLogo} alt="HRM Logo" />
          <h1>Proxima HR</h1>
        </div>
        <hr />
        <div className="sidebar-icons">
          {menuItems.map((item) => (
            <Link
              to={item.to}
              key={item.name}
              className={`side-bar ${location.pathname === item.to ? "active" : ""}`}
            >
              <FontAwesomeIcon icon={item.icon} className="icon" /> {item.name}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
