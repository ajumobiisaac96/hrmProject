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
                <div>
                  <h6>3 High Priority</h6>
                  <h4>2 Medium Priority</h4>
                </div>
              </div>

              <div className="TaskProgress">
                <h5>Task Progress</h5>
                <p>50% compeleted</p>
                <p></p>
              </div>

              <div className="last-div">
                <div className="lastdiv-1">
                    <div><FontAwesomeIcon icon="fa-calendar" /></div>
                    <div>
                      <h6>Next Payroll Date</h6>
                      <h5>oct 31, 2024</h5>
                    </div>
                </div>
                <button>Manage Task</button>
              </div>
            </div>

            <div className="grid">
              <h1>Leave Requests</h1>
              <hr />
              <h5>Number of pending tasks</h5>
              <h6>2 pending Tasks</h6>

              <div className = "priority">
              <h5>Leave Type</h5>
                <div>
                  <h6>1 Urgent</h6>
                  <h4>1 schelduded</h4>
                  <h3>1 Approved</h3>
                </div>
              </div>

              <div className="TaskProgress">
                <h5>Approval status</h5>
                <p>10% Approved</p>
                <p></p>
              </div>

              <div className="last-div">
                <div className="lastdiv-1">
                    <div><FontAwesomeIcon icon="fa-calendar" /></div>
                    <div>
                      <h6>Upcoming Leave Dates</h6>
                      <h5>oct 20, 2024</h5>
                    </div>
                </div>
                <button>Manage Task</button>
              </div>
            </div>

          </div>
          <div className="dashboard-details-2">
            <div className="grid-3">
              <h1>Payroll Status</h1>
              <hr />
              <h5>The current payroll status</h5>
              <h6>5 pending Tasks</h6>

              <div className = "priority-3">
                <div>
                  <h4>processing</h4>
                </div>
              </div>

              <div className="TaskProgress-3">
                <h5>Total Payroll</h5>
                <p>$200,000</p>
                <p></p>
              </div>

              <div className="TaskProgress-3">
                <h5>Employees Paid</h5>
                <p>96% compeleted</p>
                <h2>120 of 125 Employees Paid</h2>
              </div>

              <div className="last-div-3">
                <div className="lastdiv-1-3">
                    <div><FontAwesomeIcon icon="fa-calendar" /></div>
                    <div>
                      <h6>Next Payroll Date</h6>
                      <h5>oct 31, 2024</h5>
                    </div>
                </div>
                <button>Manage Task</button>
              </div>
            </div>

            <div className="grid">
              <h1>Birthdays & Anniversaries</h1>
              <hr />
              <h5>Total count of birthdays and annivasaries</h5>
              <h6>4 upcoming</h6>

              <div className = "priority">
              <h5>Events</h5>
                <div>
                  <h6>2 Birthdays</h6>
                  <h4>2 Annivasaries</h4>
                </div>
              </div>

              <div className="last-div">
                <div className="lastdiv-1">
                    <div><FontAwesomeIcon icon="fa-calendar" /></div>
                    <div>
                      <h6>Birthday</h6>
                      <h5>John Doe</h5>
                    </div>
                </div>
                <div className="lastdiv-1">
                    <div><FontAwesomeIcon icon="fa-calendar" /></div>
                    <div>
                      <h6>One Year Anniversary</h6>
                      <h5>Emma Clark</h5>
                    </div>
                </div>

                {/* <button>Manage Task</button> */}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  )
}

export default dashboard
