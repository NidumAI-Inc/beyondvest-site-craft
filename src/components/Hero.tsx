
import React from 'react';

const Hero = () => {
  return (
    <section className="relative h-screen flex items-center">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 bg-finance-gradient">
        {/* Abstract background pattern */}
        <svg
          className="absolute inset-0 w-full h-full opacity-10"
          viewBox="0 0 1000 1000"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
          <path
            d="M300,500 Q450,350 600,500 T900,500"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.5"
          />
          <path
            d="M200,600 Q350,450 500,600 T800,600"
            fill="none"
            stroke="white"
            strokeWidth="2"
            opacity="0.3"
          />
          <circle cx="400" cy="400" r="50" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
          <circle cx="600" cy="600" r="100" fill="none" stroke="white" strokeWidth="1" opacity="0.2" />
        </svg>
      </div>

      {/* Content */}
      <div className="container relative z-10">
        <div className="max-w-2xl text-white">
          <h1 className="mb-6 animate-fade-in">
            BeyondVest: Expert Navigation Through Market Evolution
          </h1>
          <p className="text-xl mb-8 opacity-90 animate-fade-in">
            At BeyondVest, we harness our profound understanding of market dynamics and a keen insight into economic trends to craft investment strategies that not only withstand the test of time but also capitalize on emerging opportunities.
          </p>
          <div className="animate-fade-in">
            <a href="#about" className="btn-primary text-lg">
              Learn More
            </a>
            <a href="#contact" className="ml-4 text-lg border-2 border-white hover:bg-white hover:text-finance-dark px-6 py-3 rounded-md transition-colors duration-300">
              Contact Us
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce">
        <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M10 15L3 8L4.4 6.55L10 12.15L15.6 6.55L17 8L10 15Z" fill="white"/>
        </svg>
      </div>
    </section>
  );
};

export default Hero;
