
import React, { useEffect } from 'react';

const StrategySection = () => {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1 }
    );
    
    const elements = document.querySelectorAll('.reveal');
    elements.forEach(el => observer.observe(el));
    
    return () => {
      elements.forEach(el => observer.unobserve(el));
    };
  }, []);
  
  return (
    <section id="strategy" className="section-padding bg-finance-muted">
      <div className="container">
        <h2 className="text-center text-finance-dark mb-16 reveal">Investment Strategy</h2>
        
        <div className="grid md:grid-cols-2 gap-16">
          <div className="bg-white p-8 rounded-lg shadow-md reveal" data-delay="1">
            <div className="mb-6">
              {/* Strategy SVG icon */}
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="10" y="30" width="80" height="50" rx="4" fill="#F0F4F8" stroke="#1A4B8C" strokeWidth="3"/>
                <path d="M25,60 L35,45 L50,65 L65,35 L75,50" stroke="#38B6FF" strokeWidth="3" fill="none"/>
                <circle cx="35" cy="45" r="4" fill="#0F2D52"/>
                <circle cx="50" cy="65" r="4" fill="#0F2D52"/>
                <circle cx="65" cy="35" r="4" fill="#0F2D52"/>
                <path d="M15,20 L85,20" stroke="#1A4B8C" strokeWidth="3" strokeLinecap="round"/>
                <path d="M25,10 L75,10" stroke="#1A4B8C" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-finance-medium text-center mb-4">Adaptive and Innovative</h3>
            <p className="text-finance-text text-center mb-4">
              Our strategies are continuously refined to adapt to the ever-changing market landscape.
            </p>
            <p className="text-finance-text">
              By integrating traditional financial analysis with cutting-edge technology and alternative data, we uncover unique investment opportunities that others might miss. Our adaptive approach allows us to pivot quickly as market conditions evolve, ensuring we're always positioned to capitalize on emerging trends.
            </p>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md reveal" data-delay="2">
            <div className="mb-6">
              {/* Risk Management SVG icon */}
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M50,10 L85,30 L85,70 L50,90 L15,70 L15,30 L50,10Z" fill="#F0F4F8" stroke="#1A4B8C" strokeWidth="3"/>
                <path d="M50,10 L50,90" stroke="#1A4B8C" strokeWidth="2" strokeDasharray="4 2"/>
                <path d="M15,30 L85,30" stroke="#1A4B8C" strokeWidth="2" strokeDasharray="4 2"/>
                <path d="M15,70 L85,70" stroke="#1A4B8C" strokeWidth="2" strokeDasharray="4 2"/>
                <circle cx="50" cy="50" r="20" fill="#38B6FF" fillOpacity="0.2" stroke="#38B6FF" strokeWidth="3"/>
                <path d="M40,50 L46,56 L60,42" stroke="#0F2D52" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3 className="text-finance-medium text-center mb-4">Risk Management</h3>
            <p className="text-finance-text text-center mb-4">
              Understanding that risk is inherent in all investments, we employ a multi-layered risk management framework.
            </p>
            <p className="text-finance-text">
              Our approach to risk combines sophisticated quantitative models with experienced qualitative oversight, allowing us to identify potential issues before they materialize. By stress-testing our portfolios against various scenarios and maintaining strict diversification principles, we protect our investments and ensure long-term sustainability.
            </p>
          </div>
        </div>
        
        <div className="text-center mt-12 reveal" data-delay="3">
          <a href="#services" className="btn-primary">
            Explore Our Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default StrategySection;
