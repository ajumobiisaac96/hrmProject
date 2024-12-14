import React, {useState} from 'react';
import Sidebar from '../components/Sidebar'
import test from '../assets/test.png'
import '../pages/AddEmployee.css'
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {Link } from 'react-router-dom'

library.add(fas);

const AddEmployee = () => {
  return (
    <div>
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
          <Link to={"/employee-managment"} ><h1 className="employee-profile"><FontAwesomeIcon icon="fa-solid fa-arrow-left" className = "left-arrow" />Add New Employee</h1></Link>
            <h6>24 Thursday October 2024</h6>
          </div>

          <div className="dashboard-details-1">
            <p>Basic Information</p>
            <p>Employment Details</p>
            <p>Compensation Details</p>
          </div>

          <div className="dashboard-details-2">
            <div className = "form-2">
                <div className="input-3">
                    <div className="left-input-1">
                        <label htmlFor="">First Name</label>
                        <input type="text" placeholder='Enter First Name ' />
                    </div>
                    <div className="right-input-1">
                        <label htmlFor="">Last Name</label>
                        <input type="text" placeholder='Enter Last Name ' />
                    </div>
                </div>
                <div className="input-2-1">
                    <div className="main-input">
                        <label htmlFor="">Email</label>
                        <input type="email" placeholder='Enter Email' />
                    </div>
                </div>
                <div className="input-3">
                    <div className="left-input-1">
                        <label htmlFor="">Employee ID</label>
                        <input type="text" placeholder='Enter Employee ID ' />
                    </div>
                    <div className="right-input-1">
                        <label htmlFor="">Phone Number</label>
                        <input type="text" placeholder='Enter Phone Number ' />
                    </div>
                </div>
                <div className="input-3">
                    <div className="left-input-1">
                        <label htmlFor="">Date of Birth</label>
                        <input type="text" placeholder='DD/MM/YY ' />
                    </div>
                    <div className="right-input-1">
                        <label htmlFor="">Gender</label>
                        <input type="text" placeholder='choose Gender ' />
                    </div>
                </div>
                <div className="input-3">
                    <div className="left-input-1">
                        <label htmlFor="">Home Address</label>
                        <input type="text" placeholder='Enter Home Address ' />
                    </div>
                    <div className="right-input-1">
                        <label htmlFor="">Country</label>
                        <input type="text" placeholder='Enter Country ' />
                    </div>
                </div>
                <div className="btn-4">
                    <button>Next</button>
                </div>
            </div>
          </div>

        </div>

      </div>
    </div>
    </div>
  )
}

export default AddEmployee
