// HomePage.js
import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HowToPlay from './HowToPlay';
import Features from './Features';
import Footer from './Footer';
import './HomePage.css';

const HomePage = () => {
  return (
    <div className="home-page">
      <Header />
      <HeroSection />
      <HowToPlay />
      <Features />
      <Footer />
    </div>
  );
};

export default HomePage;
