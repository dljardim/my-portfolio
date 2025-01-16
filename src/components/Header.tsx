import React from 'react';

const Header: React.FC = () => {
  return (
    <nav className="header">
      <h1 className="logo">My Portfolio</h1>
      <ul className="nav-links">
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Header;
