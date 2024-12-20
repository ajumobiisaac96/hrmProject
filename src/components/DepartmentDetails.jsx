import React from "react";

const DepartmentDetails = ({ department, employees }) => {
  if (!employees || employees.length === 0) {
    return <div>No employees available for this department.</div>;
  }

  return (
    <div>
      <h2>{department} Department Details</h2>
      <table style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th style={tableHeaderStyle}>Employee Name</th>
            <th style={tableHeaderStyle}>Attendance</th>
            <th style={tableHeaderStyle}>Overtime Hours</th>
            <th style={tableHeaderStyle}>Undertime Hours</th>
            <th style={tableHeaderStyle}>Abscences</th>
            <th style={tableHeaderStyle}>Total Hours Logged</th>
            <th style={tableHeaderStyle}>Action</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((employee, index) => (
            <tr key={index} style={tableRowStyle}>
              <td style={tableCellStyle}>{employee.name}</td>
              <td style={tableCellStyle}>{employee.attendance}</td>
              <td style={tableCellStyle}>{employee.overtime}</td>
              <td style={tableCellStyle}>{employee.undertime}</td>
              <td style={tableCellStyle}>{employee.absences}</td>
              <td style={tableCellStyle}>{employee.totalLogged}</td>
              <td style={tableCellStyle}>
                <a
                  href="#"
                  onClick={() => alert(`Viewing details for ${employee.name}`)} // Replace with actual logic
                  style={viewButtonStyle}
                >
                  View
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <a
        href="#"
        onClick={() => window.location.reload()} // This simulates the back functionality
        style={backButtonStyle}
      >
        Back to Departments
      </a>
    </div>
  );
};

// Styling
const tableHeaderStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  textAlign: "left",
  backgroundColor: "#f4f4f4",
  fontWeight: "bold",
};

const tableRowStyle = {
  borderBottom: "1px solid #ddd",
};

const tableCellStyle = {
  padding: "12px",
  border: "1px solid #ddd",
};

const viewButtonStyle = {
  display: "inline-block",
  padding: "8px 12px",
  backgroundColor: "#F8F8F8",
  color: "#007BFF",
  textDecoration: "none",
  borderRadius: "4px",
  cursor: "pointer",
  textAlign: "center",
  fontWeight: "bold",
  border: "1px solid #ddd",
};

const backButtonStyle = {
  display: "inline-block",
  padding: "8px 12px",
  backgroundColor: "#F8F8F8",
  color: "#007BFF",
  textDecoration: "none",
  borderRadius: "4px",
  cursor: "pointer",
  textAlign: "center",
  fontWeight: "bold",
  border: "1px solid #ddd",
  marginTop: "20px",
};

export default DepartmentDetails;
