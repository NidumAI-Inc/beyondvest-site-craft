
import React, { useEffect } from 'react';

const InsightsSection = () => {
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
  
  const insights = [
    {
      title: "The Future of Sustainable Investing",
      excerpt: "How ESG factors are reshaping investment strategies and creating new opportunities for growth.",
      date: "May 15, 2025",
      category: "Market Trends"
    },
    {
      title: "Navigating Market Volatility",
      excerpt: "Key strategies to protect and grow your investments during uncertain economic times.",
      date: "April 28, 2025",
      category: "Risk Management"
    },
    {
      title: "Alternative Data in Investment Decisions",
      excerpt: "How non-traditional data sources are revolutionizing the way we analyze markets.",
      date: "April 10, 2025",
      category: "Technology"
    }
  ];
  
  return (
    <section id="insights" className="section-padding bg-white">
      <div className="container">
        <h2 className="text-center text-finance-dark mb-16 reveal">Insights & Research</h2>
        
        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {insights.map((insight, index) => (
            <div 
              key={index} 
              className="bg-finance-muted p-6 rounded-lg shadow-sm transition-all duration-300 hover:shadow-md reveal" 
              data-delay={index + 1}
            >
              <span className="text-sm font-semibold text-finance-accent mb-2 block">{insight.category}</span>
              <h3 className="text-xl font-semibold text-finance-dark mb-3">{insight.title}</h3>
              <p className="text-finance-text mb-4">{insight.excerpt}</p>
              <div className="flex justify-between items-center">
                <span className="text-sm text-finance-light">{insight.date}</span>
                <a href="#" className="text-finance-medium hover:text-finance-dark font-medium transition-colors">Read More</a>
              </div>
            </div>
          ))}
        </div>
        
        <div className="bg-finance-gradient text-white p-8 md:p-12 rounded-lg shadow-md reveal" data-delay="4">
          <div className="md:flex items-center justify-between">
            <div className="mb-6 md:mb-0">
              <h3 className="text-2xl font-semibold mb-2">Stay Informed with BeyondVest</h3>
              <p className="opacity-90">Subscribe to receive our latest market insights and research reports.</p>
            </div>
            <div className="flex">
              <input 
                type="email" 
                placeholder="Your email address" 
                className="bg-white bg-opacity-20 text-white placeholder-white placeholder-opacity-70 px-4 py-3 rounded-l-md focus:outline-none border border-white border-opacity-30 w-full md:w-64"
              />
              <button className="bg-white text-finance-dark px-6 py-3 rounded-r-md font-medium hover:bg-opacity-90 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InsightsSection;
