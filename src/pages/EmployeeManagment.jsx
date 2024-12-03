import React, {useState} from 'react';
import Sidebar from '../components/Sidebar'
import test from '../assets/test.png'
import '../pages/Dashboard.css'
import '../pages/EmployeeManagment.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from 'react-router-dom'

library.add(fas);

const EmployeeManagament = () => {
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
            <h5>Employee Managment</h5>
            <h6>24 Thursday October 2024</h6>
          </div>

          <div className="dashboard-details-1">
              <div className="number-of-employee">
                <div className="div-1">
                  <p>40 Total employees</p>
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
                      <button><FontAwesomeIcon icon="fa-solid fa-plus" />Add New Employee</button>
                  </div>
                </div>
              </div>
          </div>

          <div className="dashboard-details-2">
              <div className="card">
                <div className="div-1">
                  <img src={test} alt="My profile" className ="My-profile" />
                  <p><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></p>
                </div>
                <h1>Sarah Johnson</h1>
                <h2>Software Engineer</h2>
                <hr />
                <div className="div-2">
                  <div className="department">
                    <h1>Department</h1>
                    <h2>Engineering</h2>
                  </div>
                  <div className="Id-number">
                    <h1>ID number</h1>
                    <h2>49201</h2>
                  </div>
                </div>
                <div className="div-3">
                  <div className="status">
                    <h1>status</h1>
                    <h2>Active</h2>
                  </div>
                  <div className="btn-3">
                  <Link to="/view-profile"><button>View Profile</button></Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="div-1">
                  <img src={test} alt="My profile" className ="My-profile" />
                  <p><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></p>
                </div>
                <h1>Sarah Johnson</h1>
                <h2>Software Engineer</h2>
                <hr />
                <div className="div-2">
                  <div className="department">
                    <h1>Department</h1>
                    <h2>Engineering</h2>
                  </div>
                  <div className="Id-number">
                    <h1>ID number</h1>
                    <h2>49201</h2>
                  </div>
                </div>
                <div className="div-3">
                  <div className="status">
                    <h1>status</h1>
                    <h2>Active</h2>
                  </div>
                  <div className="btn-3">
                  <Link to="/view-profile"><button>View Profile</button></Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="div-1">
                  <img src={test} alt="My profile" className ="My-profile" />
                  <p><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></p>
                </div>
                <h1>Sarah Johnson</h1>
                <h2>Software Engineer</h2>
                <hr />
                <div className="div-2">
                  <div className="department">
                    <h1>Department</h1>
                    <h2>Engineering</h2>
                  </div>
                  <div className="Id-number">
                    <h1>ID number</h1>
                    <h2>49201</h2>
                  </div>
                </div>
                <div className="div-3">
                  <div className="status">
                    <h1>status</h1>
                    <h2>Active</h2>
                  </div>
                  <div className="btn-3">
                  <Link to="/view-profile"><button>View Profile</button></Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="div-1">
                  <img src={test} alt="My profile" className ="My-profile" />
                  <p><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></p>
                </div>
                <h1>Sarah Johnson</h1>
                <h2>Software Engineer</h2>
                <hr />
                <div className="div-2">
                  <div className="department">
                    <h1>Department</h1>
                    <h2>Engineering</h2>
                  </div>
                  <div className="Id-number">
                    <h1>ID number</h1>
                    <h2>49201</h2>
                  </div>
                </div>
                <div className="div-3">
                  <div className="status">
                    <h1>status</h1>
                    <h2>Active</h2>
                  </div>
                  <div className="btn-3">
                  <Link to="/view-profile"><button>View Profile</button></Link>
                  </div>
                </div>
              </div>
          </div>

          <div className="dashboard-details-2">
              <div className="card">
                <div className="div-1">
                  <img src={test} alt="My profile" className ="My-profile" />
                  <p><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></p>
                </div>
                <h1>Sarah Johnson</h1>
                <h2>Software Engineer</h2>
                <hr />
                <div className="div-2">
                  <div className="department">
                    <h1>Department</h1>
                    <h2>Engineering</h2>
                  </div>
                  <div className="Id-number">
                    <h1>ID number</h1>
                    <h2>49201</h2>
                  </div>
                </div>
                <div className="div-3">
                  <div className="status">
                    <h1>status</h1>
                    <h2>Active</h2>
                  </div>
                  <div className="btn-3">
                  <Link to="/view-profile"><button>View Profile</button></Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="div-1">
                  <img src={test} alt="My profile" className ="My-profile" />
                  <p><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></p>
                </div>
                <h1>Sarah Johnson</h1>
                <h2>Software Engineer</h2>
                <hr />
                <div className="div-2">
                  <div className="department">
                    <h1>Department</h1>
                    <h2>Engineering</h2>
                  </div>
                  <div className="Id-number">
                    <h1>ID number</h1>
                    <h2>49201</h2>
                  </div>
                </div>
                <div className="div-3">
                  <div className="status">
                    <h1>status</h1>
                    <h2>Active</h2>
                  </div>
                  <div className="btn-3">
                  <Link to="/view-profile"><button>View Profile</button></Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="div-1">
                  <img src={test} alt="My profile" className ="My-profile" />
                  <p><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></p>
                </div>
                <h1>Sarah Johnson</h1>
                <h2>Software Engineer</h2>
                <hr />
                <div className="div-2">
                  <div className="department">
                    <h1>Department</h1>
                    <h2>Engineering</h2>
                  </div>
                  <div className="Id-number">
                    <h1>ID number</h1>
                    <h2>49201</h2>
                  </div>
                </div>
                <div className="div-3">
                  <div className="status">
                    <h1>status</h1>
                    <h2>Active</h2>
                  </div>
                  <div className="btn-3">
                  <Link to="/view-profile"><button>View Profile</button></Link>
                  </div>
                </div>
              </div>

              <div className="card">
                <div className="div-1">
                  <img src={test} alt="My profile" className ="My-profile" />
                  <p><FontAwesomeIcon icon="fa-solid fa-ellipsis-vertical" /></p>
                </div>
                <h1>Sarah Johnson</h1>
                <h2>Software Engineer</h2>
                <hr />
                <div className="div-2">
                  <div className="department">
                    <h1>Department</h1>
                    <h2>Engineering</h2>
                  </div>
                  <div className="Id-number">
                    <h1>ID number</h1>
                    <h2>49201</h2>
                  </div>
                </div>
                <div className="div-3">
                  <div className="status">
                    <h1>status</h1>
                    <h2>Active</h2>
                  </div>
                  <div className="btn-3">
                  <Link to="/view-profile"><button>View Profile</button></Link>
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