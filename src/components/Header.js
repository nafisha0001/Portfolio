import React from 'react';
import './Header.css'; // Make sure to import the CSS file

function Header() {
  return (
    <header className="header">
      <div className="header__logo">Nafisha Begum</div>
      <nav className="header__nav">
        <a href="#about">About Me</a>
        <a href="#education">Education</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#projects">Projects</a>
      </nav>
      <div className="header__right">
        <a href="https://www.linkedin.com/in/nafisha-begum" target="_blank" rel="noopener noreferrer" className="header__icon">
          <i className="fab fa-linkedin"></i>
        </a>
        <a href="https://github.com/nafisha0001" target="_blank" rel="noopener noreferrer" className="header__icon">
          <i className="fab fa-github"></i>
        </a>
        <button className="header__resume">Resume</button>
      </div>
    </header>
  );
}

export default Header;
