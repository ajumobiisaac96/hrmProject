
import React, { useState } from 'react';
import hrmLogo from '../assets/hrm logo.JPG';
import '../components/sidebar.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

library.add(fas);

const Sidebar = () => {
  // State to track the active item
  const [activeItem, setActiveItem] = useState("Dashboard");

  // List of menu items
  const menuItems = [
    { name: "Dashboard", icon: "fa-house" },
    { name: "Department", icon: "fa-building" },
    { name: "Employee Management", icon: "fa-users" },
    { name: "Attendance & Tracking", icon: "fa-clipboard-user" },
    { name: "Leave Management", icon: "fa-calendar" },
    { name: "Payroll Management", icon: "fa-money-bill-1" },
    { name: "Report & Analysis", icon: "fa-chart-line" },
    { name: "Task Management", icon: "fa-list-check" },
    { name: "Notification", icon: "fa-bell" },
    { name: "Profile", icon: "fa-user" },
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
            <p
              key={item.name}
              className={activeItem === item.name ? "active" : ""}
              onClick={() => setActiveItem(item.name)} // Set active item on click
            >
              <FontAwesomeIcon icon={item.icon} className="icon" />
              {item.name}
            </p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
