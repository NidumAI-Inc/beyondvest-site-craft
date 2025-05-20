
import React, { useEffect } from 'react';

const ServicesSection = () => {
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
    <section id="services" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-center text-finance-dark mb-16 reveal">Our Services</h2>
        
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <div className="service-card bg-white p-8 rounded-lg shadow-md border border-gray-100 reveal" data-delay="1">
            <div className="mb-6">
              {/* Hedge Fund Management SVG icon */}
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect x="15" y="25" width="70" height="50" rx="4" fill="#F0F4F8" stroke="#1A4B8C" strokeWidth="3"/>
                <path d="M30,45 L40,35 L50,45 L60,30 L70,40" stroke="#38B6FF" strokeWidth="3" fill="none"/>
                <path d="M30,65 L45,50 L55,60 L70,45" stroke="#00D1B2" strokeWidth="3" fill="none"/>
                <circle cx="40" cy="35" r="3" fill="#0F2D52"/>
                <circle cx="50" cy="45" r="3" fill="#0F2D52"/>
                <circle cx="60" cy="30" r="3" fill="#0F2D52"/>
                <circle cx="45" cy="50" r="3" fill="#1A4B8C"/>
                <circle cx="55" cy="60" r="3" fill="#1A4B8C"/>
              </svg>
            </div>
            <h3 className="text-finance-medium text-center mb-4">Hedge Fund Management</h3>
            <p className="text-finance-text mb-4">
              BeyondVest offers bespoke hedge fund management services tailored to the unique needs and goals of our clients. From strategy development to portfolio management, we handle every aspect with precision and care.
            </p>
            <ul className="text-finance-text space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-finance-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Diversified Investment Strategies</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-finance-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Active Portfolio Management</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-finance-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Risk-Adjusted Return Optimization</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-finance-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Institutional-Grade Infrastructure</span>
              </li>
            </ul>
          </div>
          
          <div className="service-card bg-white p-8 rounded-lg shadow-md border border-gray-100 reveal" data-delay="2">
            <div className="mb-6">
              {/* Wealth Management SVG icon */}
              <svg className="w-16 h-16 mx-auto" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="50" cy="50" r="35" fill="#F0F4F8" stroke="#1A4B8C" strokeWidth="3"/>
                <path d="M50,25 L50,75" stroke="#1A4B8C" strokeWidth="2" strokeDasharray="4 2"/>
                <path d="M25,50 L75,50" stroke="#1A4B8C" strokeWidth="2" strokeDasharray="4 2"/>
                <path d="M33,33 L67,67" stroke="#1A4B8C" strokeWidth="2" strokeDasharray="4 2"/>
                <path d="M33,67 L67,33" stroke="#1A4B8C" strokeWidth="2" strokeDasharray="4 2"/>
                <circle cx="50" cy="50" r="15" fill="#38B6FF" fillOpacity="0.2" stroke="#38B6FF" strokeWidth="3"/>
                <path d="M50,42 L50,58" stroke="#0F2D52" strokeWidth="3" strokeLinecap="round"/>
                <path d="M42,50 L58,50" stroke="#0F2D52" strokeWidth="3" strokeLinecap="round"/>
              </svg>
            </div>
            <h3 className="text-finance-medium text-center mb-4">Wealth Management Solutions</h3>
            <p className="text-finance-text mb-4">
              For individuals and institutions seeking comprehensive wealth management solutions, we provide expert advice on investment planning, asset allocation, and more.
            </p>
            <ul className="text-finance-text space-y-2">
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-finance-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Personalized Investment Planning</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-finance-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Strategic Asset Allocation</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-finance-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Tax-Efficient Investment Strategies</span>
              </li>
              <li className="flex items-center">
                <svg className="w-5 h-5 mr-2 text-finance-highlight" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Retirement & Estate Planning</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="bg-finance-muted p-8 rounded-lg border border-gray-200 reveal" data-delay="3">
          <h3 className="text-finance-medium text-center mb-4">Why Choose BeyondVest?</h3>
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h4 className="text-finance-dark text-xl mb-3 font-semibold">Personalized Service</h4>
              <p className="text-finance-text">
                We understand that every client is unique. Our approach is highly personalized, ensuring that each client receives the attention and tailored advice they deserve.
              </p>
            </div>
            <div>
              <h4 className="text-finance-dark text-xl mb-3 font-semibold">Innovative Edge</h4>
              <p className="text-finance-text">
                By embracing innovation and technology, we stay ahead of the curve, identifying opportunities that others may overlook.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
