
import React, { useEffect, useRef } from 'react';

const AboutSection = () => {
  const sectionRef = useRef<HTMLDivElement>(null);
  
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
    <section id="about" className="section-padding bg-white" ref={sectionRef}>
      <div className="container">
        <h2 className="text-center text-finance-dark mb-16 reveal">About Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="reveal" data-delay="1">
            <h3 className="text-finance-medium mb-4">Our Philosophy</h3>
            <p className="text-finance-text text-lg mb-6">
              Rooted in a rigorous analytical framework and fortified by a disciplined risk management approach, our investment philosophy is designed to achieve sustainable growth and protect capital.
            </p>
            <p className="text-finance-text">
              We believe that consistent returns come from a balanced approach that combines data-driven analysis with experienced judgment, always keeping an eye on long-term trends while capitalizing on short-term opportunities.
            </p>
          </div>
          
          <div className="relative h-64 md:h-auto reveal" data-delay="2">
            {/* Decorative SVG illustration */}
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="50" y="50" width="300" height="200" rx="10" fill="#F0F4F8" stroke="#3A6EA5" strokeWidth="2"/>
              <path d="M100,180 L150,120 L200,150 L250,100 L300,130" stroke="#38B6FF" strokeWidth="3" fill="none"/>
              <path d="M100,200 L150,170 L200,190 L250,160 L300,180" stroke="#0F2D52" strokeWidth="3" fill="none"/>
              <circle cx="150" cy="120" r="5" fill="#1A4B8C"/>
              <circle cx="200" cy="150" r="5" fill="#1A4B8C"/>
              <circle cx="250" cy="100" r="5" fill="#1A4B8C"/>
              <circle cx="150" cy="170" r="5" fill="#00D1B2"/>
              <circle cx="200" cy="190" r="5" fill="#00D1B2"/>
              <circle cx="250" cy="160" r="5" fill="#00D1B2"/>
            </svg>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="order-2 md:order-1 relative h-64 md:h-auto reveal" data-delay="1">
            {/* Team SVG illustration */}
            <svg className="w-full h-full" viewBox="0 0 400 300" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="200" cy="150" r="100" fill="#F0F4F8" stroke="#3A6EA5" strokeWidth="2"/>
              <circle cx="160" cy="120" r="30" fill="#1A4B8C"/>
              <circle cx="240" cy="120" r="30" fill="#38B6FF"/>
              <circle cx="160" cy="180" r="30" fill="#00D1B2"/>
              <circle cx="240" cy="180" r="30" fill="#0F2D52"/>
              <path d="M200,100 L200,200" stroke="#3A6EA5" strokeWidth="2" strokeDasharray="4 2"/>
              <path d="M140,150 L260,150" stroke="#3A6EA5" strokeWidth="2" strokeDasharray="4 2"/>
            </svg>
          </div>
          
          <div className="order-1 md:order-2 reveal" data-delay="2">
            <h3 className="text-finance-medium mb-4">Our Team</h3>
            <p className="text-finance-text text-lg mb-6">
              Meet the faces behind BeyondVest. Our team comprises seasoned financial experts with a proven track record in hedge fund management, each bringing a unique perspective and skillset to the table.
            </p>
            <p className="text-finance-text">
              With decades of combined experience across various market cycles, our professionals work collaboratively to develop strategies that deliver consistent returns while managing risk effectively.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
