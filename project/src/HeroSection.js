import React from 'react';
// Remove import for react-router-dom if present
// import { Link } from 'react-router-dom';
import './HeroSection.css'; // Keep or adjust as needed

const HeroSection = () => {
  return (
    <section className="hero-section">
      <h1>Welcome to Website Puzzle Game</h1>
      <p>Arrange the Pieces, Build the Website!</p>
      <a href="/start" className="start-button">Start Game</a>
    </section>
  );
};

export default HeroSection;
