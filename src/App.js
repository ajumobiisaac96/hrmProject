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
            <Route path="/employee-managment" element={<EmployeeManagment/>} />
            <Route path="*" element={<div>Page Not Found</div>} />
          </Routes>
        </div>
      </Router>
    );
  }

  export default App;
