import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-light">
      <div className="container">
        <ul className="nav justify-content-center border-bottom pb-3 mb-3">
          <li className="nav-item"><Link to="/" className="nav-link px-2 text-muted">Home</Link></li>
          <li className="nav-item"><Link to="/background-story" className="nav-link px-2 text-muted">Story</Link></li>
          <li className="nav-item"><Link to="/gilt-edged-mini" className="nav-link px-2 text-muted">GEM</Link></li>
          <li className="nav-item"><Link to="/reading" className="nav-link px-2 text-muted">Reading</Link></li>
        </ul>
        <p className="text-center text-muted">© {new Date().getFullYear()} Gilt-Edged. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;