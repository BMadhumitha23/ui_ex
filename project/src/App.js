// src/App.js

import React from 'react';
import Header from './Header';
import HeroSection from './HeroSection';
import HowToPlay from './HowToPlay';
import Features from './Features';
import Footer from './Footer';
import './App.css';

function App() {
  return (
    <div className="App">
      <Header />
      <HeroSection />
      <HowToPlay />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
