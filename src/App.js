import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import CrashForm from './pages/CrashForm';
import MapViewer from './pages/MapViewer';
import Login from './pages/Login';

function App() {
  return (
    <div>
      <nav style={{ backgroundColor: '#333', padding: '1rem' }}>
        <Link to="/" style={{ color: '#fff', marginRight: '1rem' }}>Dashboard</Link>
        <Link to="/form" style={{ color: '#fff', marginRight: '1rem' }}>Crash Form</Link>
        <Link to="/map" style={{ color: '#fff', marginRight: '1rem' }}>Map Viewer</Link>
        <Link to="/login" style={{ color: '#fff' }}>Login</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/form" element={<CrashForm />} />
        <Route path="/map" element={<MapViewer />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;