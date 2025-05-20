
import React from 'react';
import { Linkedin, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-finance-dark text-white pt-16 pb-8">
      <div className="container">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          <div>
            <div className="flex items-center mb-4">
              {/* Logo SVG */}
              <svg className="h-8 w-auto" viewBox="0 0 200 60" fill="none">
                <path d="M20 10L40 30L20 50" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M50 10H70C75.523 10 80 14.477 80 20V40C80 45.523 75.523 50 70 50H50" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
                <circle cx="140" cy="30" r="20" stroke="white" strokeWidth="4" />
                <path d="M130 30L140 40L150 30" stroke="white" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
              <span className="ml-2 text-xl font-semibold">BeyondVest</span>
            </div>
            <p className="text-gray-400 mb-4">
              Elevating Investment Outcomes
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-gray-400 hover:text-finance-accent transition-colors">
                <Linkedin />
              </a>
              <a href="#" className="text-gray-400 hover:text-finance-accent transition-colors">
                <Twitter />
              </a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
              <li><a href="#strategy" className="text-gray-400 hover:text-white transition-colors">Investment Strategy</a></li>
              <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Services</a></li>
              <li><a href="#performance" className="text-gray-400 hover:text-white transition-colors">Performance</a></li>
              <li><a href="#insights" className="text-gray-400 hover:text-white transition-colors">Insights</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Terms of Service</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Disclaimer</a></li>
              <li><a href="#" className="text-gray-400 hover:text-white transition-colors">Regulatory Information</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <address className="text-gray-400 not-italic space-y-2">
              <p>1234 Wall Street</p>
              <p>New York, NY 10005</p>
              <p>info@beyondvest.com</p>
              <p>+1 (212) 555-1234</p>
            </address>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-6">
          <div className="text-gray-500 text-sm">
            <p className="mb-4">
              <strong>Disclaimer:</strong> The information provided on this website is for informational purposes only and does not constitute investment advice. Past performance is not indicative of future results. Investment involves risk, and the value of investments may fluctuate. Please consult with a qualified financial advisor before making investment decisions.
            </p>
            <p>
              &copy; {new Date().getFullYear()} BeyondVest. All rights reserved.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
