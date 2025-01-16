import React, { useState } from "react";

const ProfileDashboard = () => {
  const [activeTab, setActiveTab] = useState("accountSetting");

  const data = {
    accountSetting: {
      email: "Michael Chen@robotec.com",
      emergencyContactName: "Sarah Owen",
      relationship: "Spouse",
      emergencyContactPhone: "(+234) 903-406-8577",
      password: "*********",
    },
    personalInfo: {
      name: "David Kim",
      jobTitle: "Software Engineer",
      email: "davidkim@proxima.com",
      department: "Engineering",
      address: "No 34 Adamu Michaels Street",
    },
    employmentDetails: {
      jobTitle: "Software Engineer",
      employeeID: "8768",
      employmentDate: "March 17, 2020",
      department: "Engineering",
      headOfDepartment: "Dave Willock",
      workMode: "On-Site",
      workLocation: "Kaduna Office Floor 5v",
      workingHours: "8 Hours",
      vacationDays: "30 Days",
    },
    compensation: {
      basicSalary: "₦750,000/month",
      overtimeAllowance: "₦15,000/hour",
      deductions: "PAYE: ₦45,000",
      allowances: {
        housing: "₦60,000",
        medical: "₦40,000",
        transport: "₦30,000",
      },
      pensionPlan: {
        employeeContribution: "5% (₦37,500)",
        companyMatch: "8% (₦60,000)",
      },
      insurance: "Leadway Health Insurance",
      netPay: "₦822,500/month",
      nextSalaryDate: "31, December 2024",
    },
  };

  const renderContent = () => {
    switch (activeTab) {
      case "accountSetting":
        return (
          <div>
            <h3>Account Setting</h3>
            <div style={styles.row}>
              <div>Email: {data.accountSetting.email}</div>
              <button style={styles.editButton}>Edit</button>
            </div>
            <div style={styles.row}>
              <div>Emergency Contact Name: {data.accountSetting.emergencyContactName}</div>
              <button style={styles.editButton}>Edit</button>
            </div>
            <div style={styles.row}>
              <div>Relationship to Employee: {data.accountSetting.relationship}</div>
              <button style={styles.editButton}>Edit</button>
            </div>
            <div style={styles.row}>
              <div>Emergency Contact Phone: {data.accountSetting.emergencyContactPhone}</div>
              <button style={styles.editButton}>Edit</button>
            </div>
            <div style={styles.row}>
              <div>Password: {data.accountSetting.password}</div>
              <button style={styles.editButton}>Edit</button>
            </div>
          </div>
        );
      case "personalInfo":
        return (
          <div>
            <h3>Personal Information</h3>
            <div style={styles.row}>
              <div>Name: {data.personalInfo.name}</div>
            </div>
            <div style={styles.row}>
              <div>Job Title: {data.personalInfo.jobTitle}</div>
            </div>
            <div style={styles.row}>
              <div>Email: {data.personalInfo.email}</div>
            </div>
            <div style={styles.row}>
              <div>Department: {data.personalInfo.department}</div>
            </div>
            <div style={styles.row}>
              <div>Address: {data.personalInfo.address}</div>
            </div>
          </div>
        );
      case "employmentDetails":
        return (
          <div>
            <h3>Employment Details</h3>
            <div style={styles.row}>
              <div>Job Title: {data.employmentDetails.jobTitle}</div>
            </div>
            <div style={styles.row}>
              <div>Employee ID: {data.employmentDetails.employeeID}</div>
            </div>
            <div style={styles.row}>
              <div>Employment Date: {data.employmentDetails.employmentDate}</div>
            </div>
            <div style={styles.row}>
              <div>Department: {data.employmentDetails.department}</div>
            </div>
            <div style={styles.row}>
              <div>Head of Department: {data.employmentDetails.headOfDepartment}</div>
            </div>
            <div style={styles.row}>
              <div>Work Mode: {data.employmentDetails.workMode}</div>
            </div>
            <div style={styles.row}>
              <div>Work Location: {data.employmentDetails.workLocation}</div>
            </div>
            <div style={styles.row}>
              <div>Working Hours: {data.employmentDetails.workingHours}</div>
            </div>
            <div style={styles.row}>
              <div>Vacation Days: {data.employmentDetails.vacationDays}</div>
            </div>
          </div>
        );
      case "compensation":
        return (
          <div>
            <h3>Compensation</h3>
            <div style={styles.row}>
              <div>Basic Salary: {data.compensation.basicSalary}</div>
            </div>
            <div style={styles.row}>
              <div>Overtime Allowance: {data.compensation.overtimeAllowance}</div>
            </div>
            <div style={styles.row}>
              <div>Deductions: {data.compensation.deductions}</div>
            </div>
            <div style={styles.row}>
              <div>Allowances: Housing: {data.compensation.allowances.housing}, Medical: {data.compensation.allowances.medical}, Transport: {data.compensation.allowances.transport}</div>
            </div>
            <div style={styles.row}>
              <div>Pension Plan: Employee Contribution: {data.compensation.pensionPlan.employeeContribution}, Company Match: {data.compensation.pensionPlan.companyMatch}</div>
            </div>
            <div style={styles.row}>
              <div>Insurance: {data.compensation.insurance}</div>
            </div>
            <div style={styles.row}>
              <div>Net Pay: {data.compensation.netPay}</div>
            </div>
            <div style={styles.row}>
              <div>Next Salary Date: {data.compensation.nextSalaryDate}</div>
            </div>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div style={styles.container}>
      {/* Tab Navigation */}
      <div style={styles.tabContainer}>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "accountSetting" ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab("accountSetting")}
        >
          Account Setting
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "personalInfo" ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab("personalInfo")}
        >
          Personal Information
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "employmentDetails" ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab("employmentDetails")}
        >
          Employment Details
        </button>
        <button
          style={{
            ...styles.tabButton,
            ...(activeTab === "compensation" ? styles.activeTab : {}),
          }}
          onClick={() => setActiveTab("compensation")}
        >
          Compensation
        </button>
      </div>

      {/* Dynamic Content */}
      <div style={styles.contentContainer}>{renderContent()}</div>
    </div>
  );
};

const styles = {
  container: {
    width: "90%",
    margin: "auto",
    fontFamily: "Arial, sans-serif",
    marginTop: "20px",
  },
  tabContainer: {
    display: "flex",
    justifyContent: "space-around",
    borderBottom: "1px solid #ddd",
    marginBottom: "20px",
  },
  tabButton: {
    background: "none",
    border: "none",
    fontSize: "16px",
    padding: "10px 20px",
    cursor: "pointer",
    outline: "none",
    color: "#555",
  },
  activeTab: {
    color: "#007bff",
    borderBottom: "3px solid #007bff",
  },
  contentContainer: {
    padding: "20px",
    border: "1px solid #ddd",
    borderRadius: "8px",
    backgroundColor: "#fff",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
  },
  row: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: "10px",
  },
  editButton: {
    background: "none",
    border: "none",
    color: "#007bff",
    cursor: "pointer",
  },
};

export default ProfileDashboard;
