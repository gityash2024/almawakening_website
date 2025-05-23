import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.scss';

const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-logo">
          <img src="/logo.png" alt="Almawakening Logo" />
          <p>Almawakening is a non-profit organization focusing on awareness on social and political issues in society.</p>
        </div>
        
        <div className="footer-links">
          <div className="footer-column">
            <h3>Company</h3>
            <ul>
              <li><Link to="/about">About</Link></li>
              <li><Link to="/resources">Resources</Link></li>
              <li><Link to="/events">Events</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Help</h3>
            <ul>
              <li><Link to="/contact">Contact Us</Link></li>
              <li><Link to="/privacy-policy">Privacy Policy</Link></li>
              <li><Link to="/terms">Terms</Link></li>
            </ul>
          </div>
          
          <div className="footer-column">
            <h3>Resources</h3>
            <ul>
              <li><Link to="/gallery">Gallery</Link></li>
              <li><Link to="/events">Events</Link></li>
              <li><Link to="/get-involved">Get Involved</Link></li>
              <li><Link to="/donate">Donate</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-social">
          <a href="https://twitter.com/almawakening" target="_blank" rel="noopener noreferrer">
            <div className="social-icon twitter"></div>
          </a>
          <a href="https://instagram.com/almawakening" target="_blank" rel="noopener noreferrer">
            <div className="social-icon instagram"></div>
          </a>
          <a href="https://linkedin.com/company/almawakening" target="_blank" rel="noopener noreferrer">
            <div className="social-icon linkedin"></div>
          </a>
          <a href="https://youtube.com/almawakening" target="_blank" rel="noopener noreferrer">
            <div className="social-icon youtube"></div>
          </a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>© Copyright 2025, All Rights Reserved by Almawakening</p>
        <div className="footer-bottom-links">
          <Link to="/terms">Terms</Link>
          <Link to="/privacy">Privacy</Link>
          <Link to="/cookies">Cookies</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 