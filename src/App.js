import './auth/custom.css';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import HRregister from './auth/HRregister.jsx';
import HRlogin from './auth/HRlogin.jsx';
import Forgotpassword from './auth/Forgotpassword.jsx';
import Verifyemail from './auth/Verifyemail.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<Navigate to="/register" />}/>
          <Route path="/register" element={<HRregister />} />
          <Route path="/login" element={<HRlogin />} />
          <Route path="/forgotpassword" element={<Forgotpassword />} />
          <Route path="/verifyemail" element={<Verifyemail/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
