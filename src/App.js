import './auth/custom.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HRregister from './auth/HRregister.jsx';
import HRsignup from './auth/HRsignup.jsx';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/register" element={<HRregister />} />
          <Route path="/signup" element={<HRsignup />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
