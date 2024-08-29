import React from 'react';
import './MainContent.css'; // Import the CSS file for MainContent component
import List from './List'; // Import the List component

const MainContent = () => {
    return (
        <main className="main-content">
            <section className="hero-section">
                <div className="hero-content">
                    <h1>Discover Amazing Things</h1>
                    <p>Explore our curated collection of images and articles. Find inspiration and information on topics you love.</p>
                    <a href="#explore" className="cta-button">Explore Now</a>
                </div>
            </section>

            <section className="features-section">
                <div className="feature">
                    <h2>Unique Experiences</h2>
                    <p>Immerse yourself in one-of-a-kind experiences tailored to your interests.</p>
                </div>
                <div className="feature">
                    <h2>Expert Insights</h2>
                    <p>Gain knowledge and tips from experts in various fields to stay ahead.</p>
                </div>
                <div className="feature">
                    <h2>Community Stories</h2>
                    <p>Read and share stories from our vibrant community. Connect and engage with others.</p>
                </div>
            </section>

            <section className="gallery-section">
                <h2>Our Gallery</h2>
                <List /> {/* Include the List component here */}
            </section>
        </main>
    );
};

export default MainContent;
