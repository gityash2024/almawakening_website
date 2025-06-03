import React, { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.scss';
import { ReactComponent as AlmaLogo } from '../../assets/images/almalogo.svg';

const Navbar: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768);
      if (window.innerWidth > 768) {
        setIsMenuOpen(false);
      }
    };

    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    return () => window.removeEventListener('resize', checkIfMobile);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const menuVariants = {
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    },
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.3,
        ease: 'easeInOut'
      }
    }
  };

  const linkVariants = {
    closed: {
      opacity: 0,
      y: -10
    },
    open: {
      opacity: 1,
      y: 0
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" className="navbar-logo">
          <AlmaLogo />
        </Link>
        
        {/* Desktop Menu */}
        <ul className={`nav-menu ${isMenuOpen ? 'nav-menu-open' : ''}`}>
          <li className="nav-item">
            <NavLink 
              to="/" 
              className="nav-link"
              onClick={closeMenu}
              end
            >
              Home
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/about" 
              className="nav-link"
              onClick={closeMenu}
            >
              About
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/events" 
              className="nav-link"
              onClick={closeMenu}
            >
              Events
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/donate" 
              className="nav-link"
              onClick={closeMenu}
            >
              Donate
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/resources" 
              className="nav-link"
              onClick={closeMenu}
            >
              Resources
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/gallery" 
              className="nav-link"
              onClick={closeMenu}
            >
              Gallery
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/get-involved" 
              className="nav-link"
              onClick={closeMenu}
            >
              Get Involved
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink 
              to="/contact" 
              className="nav-link"
              onClick={closeMenu}
            >
              Contact Us
            </NavLink>
          </li>
        </ul>

        {/* Mobile Menu Toggle */}
        {isMobile && (
          <div 
            className={`menu-icon ${isMenuOpen ? 'menu-icon-open' : ''}`}
            onClick={toggleMenu}
          >
            <span></span>
            <span></span>
            <span></span>
          </div>
        )}

        {/* Mobile Menu Overlay */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div
              className="mobile-menu-overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              onClick={closeMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMenuOpen && isMobile && (
            <motion.div
              className="mobile-menu"
              variants={menuVariants}
              initial="closed"
              animate="open"
              exit="closed"
            >
              <motion.ul className="mobile-nav-menu">
                {[
                  { to: '/', text: 'Home', end: true },
                  { to: '/about', text: 'About' },
                  { to: '/events', text: 'Events' },
                  { to: '/donate', text: 'Donate' },
                  { to: '/resources', text: 'Resources' },
                  { to: '/gallery', text: 'Gallery' },
                  { to: '/get-involved', text: 'Get Involved' },
                  { to: '/contact', text: 'Contact Us' }
                ].map((link, index) => (
                  <motion.li
                    key={link.to}
                    className="mobile-nav-item"
                    variants={linkVariants}
                    transition={{ delay: index * 0.05 }}
                  >
                    <NavLink 
                      to={link.to}
                      className="mobile-nav-link"
                      onClick={closeMenu}
                      end={link.end}
                    >
                      {link.text}
                    </NavLink>
                  </motion.li>
                ))}
              </motion.ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;