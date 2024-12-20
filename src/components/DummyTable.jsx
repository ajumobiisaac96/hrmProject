import React, { useState } from "react";
import DepartmentDetails from "./DepartmentDetails";

const DummyTable = () => {
  const [selectedDepartment, setSelectedDepartment] = useState(null);
  const [selectedEmployees, setSelectedEmployees] = useState([]);

  // Dummy department data with more rows
  const data = [
    {
      department: "Human Resources",
      attendance: "95%",
      overtime: 30,
      undertime: 10,
      absences: 12,
      totalLogged: 160,
      employees: [
        { name: "John Doe", overtime: 30, undertime: 10, absences: 12, attendance: "95%", totalLogged: 160 },
        { name: "Jane Smith", overtime: 25, undertime: 5, absences: 12, attendance: "98%", totalLogged: 165 },
        { name: "Mark Johnson", overtime: 20, undertime: 8, absences: 12, attendance: "92%", totalLogged: 150 },
        { name: "Emily Davis", overtime: 15, undertime: 10, absences: 12, attendance: "90%", totalLogged: 140 },
        { name: "Michael Brown", overtime: 12, undertime: 6, absences: 12, attendance: "93%", totalLogged: 145 },
      ],
    },
    {
      department: "Finance",
      overtime: 40,
      undertime: 5,
      location: "London",
      attendance: "92%",
      totalLogged: 170,
      absences: 20,
      employees: [
        { name: "Alice Brown", overtime: 40, undertime: 5, absences: 12, attendance: "92%", totalLogged: 170 },
        { name: "Bob White", overtime: 35, undertime: 10, absences: 12, attendance: "88%", totalLogged: 160 },
        { name: "Sophia Green", overtime: 25, undertime: 2, absences: 12, attendance: "97%", totalLogged: 175 },
        { name: "David Black", overtime: 28, undertime: 6, absences: 12, attendance: "94%", totalLogged: 168 },
        { name: "Olivia Harris", overtime: 33, undertime: 7, absences: 12, attendance: "91%", totalLogged: 162 },
      ],
    },
    {
      department: "IT",
      overtime: 50,
      undertime: 15,
      absences: 8,
      attendance: "97%",
      totalLogged: 180,
      employees: [
        { name: "Chris Allen", overtime: 50, undertime: 15, absences: 12, attendance: "97%", totalLogged: 180 },
        { name: "Sarah Wilson", overtime: 45, undertime: 10, absences: 12, attendance: "93%", totalLogged: 175 },
        { name: "James Scott", overtime: 40, undertime: 5, absences: 12, attendance: "95%", totalLogged: 170 },
        { name: "Megan Moore", overtime: 38, undertime: 8, absences: 12, attendance: "96%", totalLogged: 168 },
        { name: "William Lee", overtime: 42, undertime: 4, absences: 12, attendance: "94%", totalLogged: 172 },
      ],
    },
    {
      department: "Marketing",
      overtime: 20,
      undertime: 5,
      absences: 24,
      attendance: "98%",
      totalLogged: 160,
      employees: [
        { name: "Zoe Martin", overtime: 20, undertime: 5, absences: 12, attendance: "98%", totalLogged: 160 },
        { name: "Liam Lee", overtime: 18, undertime: 3, absences: 12, attendance: "99%", totalLogged: 162 },
        { name: "Ella Hall", overtime: 22, undertime: 6, absences: 12, attendance: "97%", totalLogged: 155 },
        { name: "Jack Clark", overtime: 19, undertime: 4, absences: 12, attendance: "96%", totalLogged: 158 },
        { name: "Sophia Young", overtime: 24, undertime: 7, absences: 12, attendance: "95%", totalLogged: 150 },
      ],
    },
    // More departments can be added in the same pattern.
  ];

  // Handle clicking on 'View' to show department details
  const handleViewDetails = (department, employees) => {
    setSelectedDepartment(department);
    setSelectedEmployees(employees);
  };

  return (
    <div>
      {!selectedDepartment ? (
        <div>
          <h2>Departments</h2>
          <table style={{ borderCollapse: "collapse", width: "100%" }}>
            <thead>
              <tr>
                <th style={tableHeaderStyle}>Department</th>
                <th style={tableHeaderStyle}>Attendance</th>
                <th style={tableHeaderStyle}>Overtime Hours</th>
                <th style={tableHeaderStyle}>Undertime Hours</th>
                <th style={tableHeaderStyle}>Absences</th>
                <th style={tableHeaderStyle}>Total Logged Hours</th>
                <th style={tableHeaderStyle}>Action</th>
              </tr>
            </thead>
            <tbody>
              {data.map((row, index) => (
                <tr key={index} style={tableRowStyle}>
                  <td style={tableCellStyle}>{row.department}</td>
                  <td style={tableCellStyle}>{row.attendance}</td>
                  <td style={tableCellStyle}>{row.overtime}</td>
                  <td style={tableCellStyle}>{row.undertime}</td>
                  <td style={tableCellStyle}>{row.absences}</td>
                  <td style={tableCellStyle}>{row.totalLogged}</td>
                  <td style={tableCellStyle}>
                    <a
                      href="#"
                      onClick={() => handleViewDetails(row.department, row.employees)}
                      style={viewButtonStyle}
                    >
                      View
                    </a>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <DepartmentDetails department={selectedDepartment} employees={selectedEmployees} />
      )}
    </div>
  );
};

// Styling
const tableHeaderStyle = {
  border: "1px solid #ddd",
  padding: "12px",
  margin : "10px",
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

export default DummyTable;
