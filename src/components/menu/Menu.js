import React, { useState } from 'react';
import './menu.css'; // Import the CSS file

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="menu-bar">
      <button className="hamburger" onClick={toggleMenu}>
        ☰
      </button>
      <nav className={`menu-items ${isOpen ? 'open' : ''}`}>
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#contact">Contact</a></li>
          <li><a href="#services">Services</a></li>
        </ul>
      </nav>
    </div>
  );
};

export default Menu;
