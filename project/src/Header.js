import React from 'react';
// Remove import for react-router-dom if present
// import { Link } from 'react-router-dom';
import './Header.css'; // Keep or adjust as needed

const Header = () => {
  return (
    <header className="header">
      <div className="logo">Website Puzzle Game</div>
      <nav className="nav-menu">
        {/* Replace Link with regular <a> tags if needed */}
        <a href="/start">Start Game</a>
        <a href="/instructions">Instructions</a>
        <a href="/about">About</a>
        <a href="/contact">Contact</a>
      </nav>
    </header>
  );
};

export default Header;
