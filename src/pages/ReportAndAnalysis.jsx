import React, { useState } from 'react';
import Sidebar from '../components/Sidebar';
import './PayrollManagement.css';
import ReportAndAnalysisChart from '../components/ReportAndAnalysisChart';
import test from '../assets/test.png';
import PayrollCircularChart from '../components/PayrollCircularChart';
import LineChart from '../components/LineChart';
import AllowanceAndContribution from './AllowanceAndContribution';
import payrollData from '../data/payrollData';
import payrollSummary from '../data/payrollSummary';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';


const PayrollManagement = () => {
  const [isDepartmentOpen, setIsDepartmentOpen] = useState(false);
  const [filter, setFilter] = useState('all'); // State to keep track of the filter criteria
  const [selectedMonth, setSelectedMonth] = useState('January'); // State to keep track of the selected month
  const [selectedDepartment, setSelectedDepartment] = useState('All'); // State to keep track of the selected department
  const [isAllowanceView, setIsAllowanceView] = useState(false);

  const toggleDepartmentDropdown = () => {
    setIsDepartmentOpen(!isDepartmentOpen);
  };

  const handleFilterChange = (status) => {
    setFilter(status);
    setIsDepartmentOpen(false); // Close the dropdown after selecting a filter
  };

  const handleMonthChange = (event) => {
    setSelectedMonth(event.target.value);
  };

  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  const handleViewAllowance = () => {
    setIsAllowanceView(true);
  };

  const handleBackToPayroll = () => {
    setIsAllowanceView(false);
  };

  const filteredPayrolls = payrollData.filter((payroll) => {
    if (filter === 'all') return true;
    return payroll.status === filter;
  }).slice(0, 7); // Display only the first 7 filtered payrolls

  const getHeading = () => {
    switch (filter) {
      case 'all':
        return 'All Payroll Records';
      case 'processed':
        return 'Processed Payroll Records';
      case 'pending':
        return 'Pending Payroll Records';
      default:
        return 'Filtered Payroll Records';
    }
  };

  const getStatusStyle = (status) => {
    return {
      color: status === 'processed' ? 'green' : status === 'pending' ? 'orange' : 'black',
    };
  };

  const downloadPDF = () => {
    const input = document.getElementById('charts');
    html2canvas(input).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jsPDF();
      pdf.addImage(imgData, 'PNG', 0, 0);
      pdf.save('payroll-charts.pdf');
    });
  };

  return (
    <div>
      <div className="main-dashboard">
        <Sidebar />
        <div className="dashboard">
          {isAllowanceView ? (
            <AllowanceAndContribution payrollData={payrollData} onBack={handleBackToPayroll} />
          ) : (
            <>
              <div className="slide-one">
                <div className="slide-one-1">
                  <div className="name">
                    <h5>Joseph Dooley</h5>
                    <h6>Good Morning</h6>
                  </div>
                </div>
                <div className="slide-one-2">
                  <div className="search">
                    <FontAwesomeIcon icon="fa-solid fa-magnifying-glass" className="glass-icon" />
                    <input type="text" placeholder="Search" />
                  </div>
                  <div className="notification">
                    <FontAwesomeIcon icon="fa-solid fa-bell" />
                    <h6>6</h6>
                  </div>
                  <div className="user-profile">
                    <img src={test} alt="My profile" className="My-profile" />
                  </div>
                </div>
              </div>
              <hr className="horizontal" />
              <div className="dashboard-details">
                <h5>Payroll Management</h5>
                <h6>24 Thursday October 2024</h6>
              </div>
              <div className="dashboard-details-1">
                <div className="first-grid">
                  <FontAwesomeIcon icon="fa-circle-check" className="dashboard-icon-1" style={{ color: '#22C55E' }} />
                  <div>
                    <h6>Total Payroll Cost</h6>
                    <h5>₦{payrollSummary.totalCost}</h5>
                  </div>
                </div>
                <div className="first-grid">
                  <FontAwesomeIcon icon="fa-solid fa-calendar" className="dashboard-icon-2" style={{ color: '#007BFF' }} />
                  <div>
                    <h6>Pending Payment</h6>
                    <h5>₦{payrollSummary.pendingPayment}</h5>
                  </div>
                </div>
                <div className="first-grid">
                  <FontAwesomeIcon icon="fa-clock" className="dashboard-icon-3" style={{ color: '#6F42C1' }} />
                  <div>
                    <h6>Approved Payment</h6>
                    <h5>₦{payrollSummary.approvedPayment}</h5>
                  </div>
                </div>
                <div className="first-grid">
                  <FontAwesomeIcon icon="fa-solid fa-triangle-exclamation" className="dashboard-icon-4" style={{ color: '#FF6464' }} />
                  <div>
                    <h6>Upcoming Salary</h6>
                    <h5>Last day of the month</h5>
                  </div>
                </div>
              </div>
              <ReportAndAnalysisChart/>

            </>
          )}
        </div>
      </div>
    </div>
  );
};

// Styling
const tableHeaderStyle = {
  border: '1px solid #ddd',
  padding: '12px',
  textAlign: 'left',
  backgroundColor: '#f4f4f4',
  fontWeight: 'bold',
};

const tableRowStyle = {
  borderBottom: '1px solid #ddd',
};

const tableCellStyle = {
  padding: '12px',
  border: '1px solid #ddd',
};

export default PayrollManagement;