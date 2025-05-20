
import React, { useEffect } from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const PerformanceSection = () => {
  const performanceData = [
    { year: '2018', beyondvest: 12.3, market: 9.1 },
    { year: '2019', beyondvest: 18.9, market: 15.2 },
    { year: '2020', beyondvest: 22.1, market: 10.7 },
    { year: '2021', beyondvest: 19.4, market: 17.8 },
    { year: '2022', beyondvest: -4.2, market: -10.5 },
    { year: '2023', beyondvest: 21.3, market: 16.2 },
    { year: '2024', beyondvest: 14.7, market: 11.1 },
  ];

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
    <section id="performance" className="section-padding bg-finance-muted">
      <div className="container">
        <h2 className="text-center text-finance-dark mb-16 reveal">Performance</h2>
        
        <div className="bg-white p-8 rounded-lg shadow-md mb-12 reveal" data-delay="1">
          <h3 className="text-finance-medium text-center mb-8">Our Track Record</h3>
          <div className="h-80">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={performanceData}
                margin={{ top: 5, right: 30, left: 20, bottom: 5 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis tickFormatter={(value) => `${value}%`} />
                <Tooltip formatter={(value) => `${value.toFixed(1)}%`} />
                <Legend />
                <Line 
                  type="monotone" 
                  dataKey="beyondvest" 
                  name="BeyondVest Fund" 
                  stroke="#1A4B8C" 
                  activeDot={{ r: 8 }} 
                  strokeWidth={3}
                />
                <Line 
                  type="monotone" 
                  dataKey="market" 
                  name="Market Index" 
                  stroke="#38B6FF" 
                  strokeDasharray="5 5"
                  strokeWidth={2}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
          <p className="text-sm text-gray-500 text-center mt-4">
            Past performance is not indicative of future results. The above chart is for illustrative purposes only.
          </p>
        </div>
        
        <div className="bg-white p-8 rounded-lg shadow-md reveal" data-delay="2">
          <h3 className="text-finance-medium text-center mb-6">Key Performance Highlights</h3>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="text-4xl font-bold text-finance-dark mb-2">15.7%</div>
              <p className="text-finance-text">Average Annual Return</p>
              <p className="text-sm text-gray-500">(Last 7 years)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-finance-dark mb-2">3.7%</div>
              <p className="text-finance-text">Outperformed Market</p>
              <p className="text-sm text-gray-500">(Annual average)</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-finance-dark mb-2">13.1%</div>
              <p className="text-finance-text">Lower Volatility</p>
              <p className="text-sm text-gray-500">(Compared to market index)</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PerformanceSection;
