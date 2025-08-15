import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import './App.css';

function App() {
  
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  

  const handleLogin = (credentials) => {
    // In a real app, you would validate credentials with a backend
    console.log('Login attempt:', credentials);
    setIsAuthenticated(true);
  };

  const handleSignup = (userData) => {
    // In a real app, you would send user data to a backend
    console.log('Signup attempt:', userData);
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
  };

  return (
    <Router>
      <div className="app">
        <Navbar 
          
          isAuthenticated={isAuthenticated}
          onLogout={handleLogout}
        />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route 
              path="/login" 
              element={
                isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <Login onLogin={handleLogin} />
              } 
            />
            <Route 
              path="/signup" 
              element={
                isAuthenticated ? 
                <Navigate to="/" replace /> : 
                <Signup onSignup={handleSignup} />
              } 
            />
            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
