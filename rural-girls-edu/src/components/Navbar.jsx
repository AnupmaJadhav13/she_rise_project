import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

const Navbar = ({ isDarkMode, toggleDarkMode, isAuthenticated, onLogout }) => {
  return (
    <nav className="navbar">
      <div className="nav-content">
        <Link to="/" className="nav-brand">
          Rural Girls Edu
        </Link>
        
        <div className="nav-links">
          <Link to="/" className="nav-link">
            Home
          </Link>
          
        </div>
        
        <div className="nav-actions">
          
          {isAuthenticated ? (
            <div className="auth-buttons">
              <button className="btn btn-secondary" onClick={onLogout}>
                Logout
              </button>
            </div>
          ) : (
            <div className="auth-buttons">
              <Link to="/login" className="btn btn-primary">
                Login
              </Link>
              <Link to="/signup" className="btn btn-secondary">
                Signup
              </Link>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 