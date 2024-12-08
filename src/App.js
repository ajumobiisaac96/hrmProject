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
            <Route path="/department/add-new-department" element={<AddDepartment/>} />
            <Route path="/department/add-employee-department" element={<AddEmployeeDepartment/>} />
            <Route path="/employee-managment" element={<EmployeeManagment/>} />
            <Route path="/employee-managment/view-profile" element={<Profile/>} />
            <Route path="/employee-managment/add-employee" element={<AddEmployee/>} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
