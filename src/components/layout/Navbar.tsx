import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.scss';
import almalogo from '../src/assets/images/almalogo.svg';
const Navbar: React.FC = () => {
  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <img src="{almalogo}" alt="Almawakening Logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item"><Link to="/" className="nav-link">Home</Link></li>
          <li className="nav-item"><Link to="/about" className="nav-link">About</Link></li>
          <li className="nav-item"><Link to="/events" className="nav-link">Events</Link></li>
          <li className="nav-item"><Link to="/donate" className="nav-link">Donate</Link></li>
          <li className="nav-item"><Link to="/resources" className="nav-link">Resources</Link></li>
          <li className="nav-item"><Link to="/gallery" className="nav-link">Gallery</Link></li>
          <li className="nav-item"><Link to="/get-involved" className="nav-link">Get Involved</Link></li>
          <li className="nav-item"><Link to="/contact" className="nav-link">Contact Us</Link></li>
        </ul>
        <div className="menu-icon">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;