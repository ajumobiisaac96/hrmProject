  import './styles/custom.css';
  import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
  import HRregister from './pages/auth/HRregister.jsx';
  import CompanyRegister from './pages/auth/CompanyRegister.jsx';
  import HRlogin from './pages/auth/HRlogin.jsx';
  import Forgotpassword from './pages/auth/Forgotpassword.jsx';
  import Verifyemail from './pages/auth/Verifyemail.jsx';
  import ConfirmPassword from './pages/auth/ConfirmPassword.jsx';
  import Dashboard from './pages/Dashboard.jsx';
  import EmployeeManagment from './pages/EmployeeManagment.jsx';
  import Profile from './pages/Profile.jsx';
  import AddEmployee from './pages/AddEmployee.jsx';
  import Department from './pages/Department.jsx'
  import AddDepartment from './pages/AddDepartment.jsx';
  import AddEmployeeDepartment from './pages/AddEmployeeDepartment.jsx'
  import EditDepartment from './pages/EditDepartment.jsx'
  import SearchEmployee from './pages/SearchEmployee.jsx';
  import AddEmployeeToDepartment from './pages/AddEmployeeToDepartment.jsx'
  import EditProfile from './pages/EditProfile.jsx'
  import SuspendEmployee from './pages/SuspendEmployee.jsx'
  import DeactivateEmployee from './pages/DeactivateEmployee.jsx'
  import AttendanceAndTracking from './pages/AttendanceAndTracking.jsx'
  import LeaveManagment from './pages/LeaveManagment.jsx'
  import PayrollManagement from './pages/PayrollManagement.jsx'
  import AllowanceAndContribution from './pages/AllowanceAndContribution.jsx';
  import ReportAndAnalysis from './pages/ReportAndAnalysis.jsx';
  import AdminProfile from './pages/AdminProfile.jsx';
  import OvertimeHoursTable from './pages/OvertimeHoursTable.jsx'
  import Notification from './pages/Notification.jsx';
  import AttendancePerformanceTable from './pages/AttendancePerformanceTable.jsx'

  function App() {
    return (
      <Router>
        <div className="App">
          <Routes>
            <Route path="/" element={<Navigate to="/companyregister" />}/>
            <Route path="/companyregister" element={<CompanyRegister />} />
            <Route path="/register" element={<HRregister />} />
            <Route path="/login" element={<HRlogin />} />
            <Route path="/forgotpassword" element={<Forgotpassword />} />
            <Route path="/verifyemail" element={<Verifyemail/>} />
            <Route path="/confirmPassword" element={<ConfirmPassword/>} />
            <Route path="/dashboard" element={<Dashboard/>} />
            <Route path="/department" element={<Department/>} />
            <Route path="/department/edit-department" element={<EditDepartment/>} />
            <Route path="/department/add-new-department" element={<AddDepartment/>} />
            <Route path="/department/add-employee-department" element={<AddEmployeeDepartment/>} />
            <Route path="/employee-managment" element={<EmployeeManagment/>} />
            <Route path="/employee-managment/view-profile" element={<Profile/>} />
            <Route path="/employee-managment/add-employee" element={<AddEmployee/>} />
            <Route path="/search-employee" element={<SearchEmployee/>} />
            <Route path="/add-employee-to-department" element={<AddEmployeeToDepartment/>} />
            <Route path="/edit-profile" element={<EditProfile/>} />
            <Route path="/employee-managment/suspend-employee" element={<SuspendEmployee/>} />
            <Route path="/employee-managment/Deactivate-employee" element={<DeactivateEmployee/>} />
            <Route path="/attendance-and-tracking" element={<AttendanceAndTracking/>} />
            <Route path="/LeaveManagment" element={<LeaveManagment/>} />
            <Route path="/PayrollManagement" element={<PayrollManagement/>} />
            <Route path="/AllowanceAndContribution" element={<AllowanceAndContribution/>} />
            <Route path="/notification" element={<Notification/>} />
            <Route path="/ReportAndAnalysis" element={<ReportAndAnalysis/>} />
            <Route path="/Profile" element={<AdminProfile/>} />
            <Route path="/ReportAndAnalysis/OvertimeHours" element={<OvertimeHoursTable/>} />
            <Route path="/ReportAndAnalysis/AttendancePerformanceTable" element={<AttendancePerformanceTable/>} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
