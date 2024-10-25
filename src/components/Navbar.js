// src/components/Navbar.js
import React from 'react';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="container navitems">
        <a href="#home" className="nav_link">HOME</a>
        <a href="#project" className="nav_link">PROJECT</a>
        <a href="#skills" className="nav_link">SKILLS</a>
        <a href="#contact" className="nav_link">CONTACT</a>
        <a
          href="https://drive.google.com/file/d/123_0AGNo7nps1fO9wVX5EqjTVHKj537J/view?usp=drivesdk"
          target="_blank"
          rel="noopener noreferrer"
          className="nav_link"
        >
          RESUME
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
