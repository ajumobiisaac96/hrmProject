import React from 'react';
import Sidebar from './Sidebar';
import { Bar, Line } from 'react-chartjs-2';
import './ReportAndAnalysisChart.css';

const ReportAndAnalysis = () => {
  // Placeholder data for the graphs
  const overtimeData = {
    labels: ['HR', 'Finance', 'IT', 'Marketing', 'Sales'],
    datasets: [
      {
        label: 'Overtime Hours',
        data: [120, 150, 180, 100, 90],
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const attendanceData = {
    labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
    datasets: [
      {
        label: 'Attendance',
        data: [95, 90, 85, 80, 75, 70, 65, 60, 55, 50, 45, 40],
        backgroundColor: 'rgba(153, 102, 255, 0.6)',
      },
    ],
  };

  const topAttendanceAchievers = ['Employee 1', 'Employee 2', 'Employee 3', 'Employee 4', 'Employee 5'];

  return (
    <div className="main-dashboard">
      <div className="dashboard centered-content">
        <div className="slide-one">
          <div className="slide-one-1">
            <div className="graph-container">
              <h3>Top Overtime Hours by Department</h3>
              <Bar data={overtimeData} />
            </div>
            <div className="top-attendance">
              <h3>Top Attendance Achievers</h3>
              <ul>
                {topAttendanceAchievers.map((employee, index) => (
                  <li key={index}>{employee}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <button className="view-button">View Department Overtime Hours</button>
        <div className="attendance-trends">
          <h3>Monthly Attendance Trends</h3>
          <Line data={attendanceData} />
          <h3>Top Monthly Attendance by Department</h3>
          <div className="progress-bars">
            {overtimeData.labels.map((department, index) => (
              <div key={index} className="progress-bar-container">
                <span>{department}</span>
                <div className="progress-bar">
                  <div className="progress" style={{ width: `${attendanceData.datasets[0].data[index]}%` }}>
                    {attendanceData.datasets[0].data[index]}%
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
        <button className="view-button">View Attendance Performance</button>
      </div>
    </div>
  );
};

export default ReportAndAnalysis;