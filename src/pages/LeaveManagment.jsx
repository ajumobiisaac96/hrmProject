import React from 'react';
import CircularChart from '../components/CircularChart';
import HorizontalBarChart from '../components/HorizontalBarChart';
import leaveData from '../data/leaveData';
import pendingLeaveRequests from '../data/pendingLeaveRequests';

const LeaveManagment = () => {
  return (
    <div>
      <h1>Leave Management</h1>
      <CircularChart data={leaveData} />
      <HorizontalBarChart data={leaveData} />
      <h2>Pending Leave Requests</h2>
      <table style={{ width: '100%', borderCollapse: 'collapse' }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Employee</th>
            <th style={tableHeaderStyle}>Department</th>
            <th style={tableHeaderStyle}>Leave Type</th>
            <th style={tableHeaderStyle}>Duration</th>
            <th style={tableHeaderStyle}>Start Date</th>
            <th style={tableHeaderStyle}>End Date</th>
            <th style={tableHeaderStyle}>Actions</th>
          </tr>
        </thead>
        <tbody>
          {pendingLeaveRequests.map((request, index) => (
            <tr key={index} style={tableRowStyle}>
              <td style={tableCellStyle}>{request.employee}</td>
              <td style={tableCellStyle}>{request.department}</td>
              <td style={tableCellStyle}>{request.leaveType}</td>
              <td style={tableCellStyle}>{request.duration}</td>
              <td style={tableCellStyle}>{request.startDate}</td>
              <td style={tableCellStyle}>{request.endDate}</td>
              <td style={tableCellStyle}>
                <button style={acceptButtonStyle}>Accept</button>
                <button style={rejectButtonStyle}>Reject</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
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

const buttonStyle = {
  display: 'inline-block',
  padding: '8px 12px',
  textDecoration: 'none',
  borderRadius: '4px',
  cursor: 'pointer',
  textAlign: 'center',
  fontWeight: 'bold',
  border: '1px solid #ddd',
  marginRight: '8px',
};

const acceptButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#4CAF50',
  color: '#fff',
};

const rejectButtonStyle = {
  ...buttonStyle,
  backgroundColor: '#f44336',
  color: '#fff',
};

export default LeaveManagment;