import React from 'react';
import Link from 'next/link';

const HeroSection = () => {
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1 className="hero-title">
          Empowering African Talent
        </h1>
        <p className="hero-description">
          Connecting skilled professionals with global opportunities
        </p>
        <div className="hero-cta">
          <Link href="/jobs" className="hero-button">
            Explore Opportunities
          </Link>
        </div>
      </div>
      
      {/* Navigation Arrows */}
      <div className="hero-navigation">
        <button className="hero-nav-arrow prev-arrow" aria-label="Previous slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M15 18l-6-6 6-6" />
          </svg>
        </button>
        
        <div className="hero-nav-dots">
          <button className="hero-nav-dot active" aria-label="Go to slide 1"></button>
          <button className="hero-nav-dot" aria-label="Go to slide 2"></button>
          <button className="hero-nav-dot" aria-label="Go to slide 3"></button>
        </div>
        
        <button className="hero-nav-arrow next-arrow" aria-label="Next slide">
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
            <path d="M9 6l6 6-6 6" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default HeroSection; 