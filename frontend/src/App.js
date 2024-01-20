import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import Login from './components/login.js';
import Main from './main.js';

function App() {
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/login.js" element={<Login />} />
          <Route path="/main.js" element={<Main />} />
          {/* Add more routes as needed */}
          <Route path="/" element={<Navigate to="/login" />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;