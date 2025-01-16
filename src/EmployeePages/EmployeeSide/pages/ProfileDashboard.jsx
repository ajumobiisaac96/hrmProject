import React from 'react'
import Sidebar from '../components/Sidebar'
import EmployeeNavbar from '../components/EmployeeNavbar.jsx'
import './EmployeeDashboard.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Test from '../assets/test.png' 

const ProfileDashboard = () => {
  return (
      <div>
        <div>
        <div className="main-dashboard">
          <Sidebar/>
          <div className="dashboard">
          
          <EmployeeNavbar/>

            <hr className="horizontal" />

            <div className="employee-dashboard-info" style={{display:'flex', justifyContent:'space-between', width: '1000px'}}>
              
              <div className="profile-info" style={{display:'flex', }}>
                <div className="profile-image">
                  <img src={Test} alt="" style={{ width: '100px' , height: '100px' }} />
                </div>
                <div className="dashboard-details" style={{flexDirection:'column', alignItems:'flex-start', height:'40px'}}>
                  <h5>David Kim</h5>
                  <h6>HRMS Admnistrator</h6>
                  <h6>davidkim@proxima.com</h6>
                </div>
              </div>
              
              <div className="employee-dashboard-info" style={{display:'flex', flexDirection:'column', marginLeft:'-200px'}}>
                <h1>Working Hours</h1>
                <div className="clock" style={{display:'flex', alignItems:'center', marginTop:'-20px'}} >
                  <div className="timer" 
                  style={{
                    width: '100px',
                      height: '38px',
                      padding: '8px',
                      marginTop:'10px',
                      borderRadius: '4px',
                      border: '1px solid #F8F8F8',
                      background:'#D9D9D9'
                  }}>00:00:00</div>
                  <button style={{width:'100px'}}> <FontAwesomeIcon icon="fa-solid fa-right-from-bracket" />Clock Out</button>
                </div>
              </div>

            </div>
            
            <div className="dashboard-details-1">
              <div className="first-grid">
              <FontAwesomeIcon icon="fa-solid fa-clock" className="dashboard-icon"/>
                <div>
                  <h6>Attendance</h6>
                  <h5>90%</h5>
                </div>
              </div>
  
              <div className="first-grid">
              <FontAwesomeIcon icon="fa-solid fa-calendar" className="dashboard-icon" />
                <div>
                  <h6>Leave Balance</h6>
                  <h5>0 Days</h5>
                </div>
              </div>
  
              <div className="first-grid">
              <FontAwesomeIcon icon="fa-solid fa-calendar" className="dashboard-icon" />
                <div>
                  <h6>Net Pay</h6>
                  <h5>Salary :Dec 25</h5>
                </div>
              </div>
  
              <div className="first-grid">
              <FontAwesomeIcon icon="fa-solid fa-users" className="dashboard-icon" />
                <div>
                  <h6>Overtime Hours</h6>
                  <h5>15 Hours</h5>
                </div>
              </div>
            </div>

          </div>
        </div>
        </div>
    </div>
  )
}

export default ProfileDashboard
