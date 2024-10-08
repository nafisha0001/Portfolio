import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css'; 

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Nafisha Begum</div>
      <nav className="header__nav">
        <Link to="/aboutme">About Me</Link>
        <Link to="/education">Education</Link> 
        <Link to="/skills">Skills</Link>
        <Link to="/certification">Certifications</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/responsibility">Responsibility</Link>
      </nav>
      <div className="header__right">
        <a href="https://www.linkedin.com/in/nafisha-begum" target="_blank" rel="noopener noreferrer" className="header__icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/nafisha0001" target="_blank" rel="noopener noreferrer" className="header__icon">
          <i className="fab fa-github"></i>
        </a>
        <button className="header__resume">
          <a id='resume-link' href='https://drive.google.com/file/d/1Xj-EBxmdTH7v4OpBs5D0P10UVptGNrhZ/view?usp=drive_link' target="_blank" rel="noopener noreferrer">Resume</a>
        </button>
      </div>
    </header>
  );
}

export default Header;
