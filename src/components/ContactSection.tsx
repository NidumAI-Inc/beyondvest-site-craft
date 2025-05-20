
import React, { useEffect } from 'react';
import { Mail, Phone, Linkedin, Globe } from 'lucide-react';
import { useToast } from "@/hooks/use-toast"

const ContactSection = () => {
  const { toast } = useToast();

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

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real implementation, this would send the form data to a server
    toast({
      title: "Message Sent",
      description: "Thank you for your inquiry. We'll be in touch shortly.",
    });
  };
  
  return (
    <section id="contact" className="section-padding bg-finance-muted">
      <div className="container">
        <h2 className="text-center text-finance-dark mb-16 reveal">Contact Us</h2>
        
        <div className="grid md:grid-cols-2 gap-12 items-start">
          <div className="reveal" data-delay="1">
            <h3 className="text-finance-medium mb-6">Get in Touch</h3>
            <p className="text-finance-text mb-8">
              Ready to learn more about BeyondVest or interested in our services? We're here to help. Contact us today to start a conversation about your future.
            </p>
            
            <div className="space-y-6">
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-finance-medium flex items-center justify-center mr-4">
                  <Mail className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-finance-dark">Email</h4>
                  <a href="mailto:info@beyondvest.com" className="text-finance-medium hover:text-finance-dark transition-colors">
                    info@beyondvest.com
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-finance-medium flex items-center justify-center mr-4">
                  <Phone className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-finance-dark">Phone</h4>
                  <a href="tel:+12125551234" className="text-finance-medium hover:text-finance-dark transition-colors">
                    +1 (212) 555-1234
                  </a>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-finance-medium flex items-center justify-center mr-4">
                  <Globe className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-finance-dark">Location</h4>
                  <address className="text-finance-medium not-italic">
                    1234 Wall Street, <br />
                    New York, NY 10005
                  </address>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className="w-12 h-12 rounded-full bg-finance-medium flex items-center justify-center mr-4">
                  <Linkedin className="text-white" />
                </div>
                <div>
                  <h4 className="text-lg font-medium text-finance-dark">Connect</h4>
                  <a href="#" className="text-finance-medium hover:text-finance-dark transition-colors">
                    LinkedIn Profile
                  </a>
                </div>
              </div>
            </div>
          </div>
          
          <div className="bg-white p-8 rounded-lg shadow-md reveal" data-delay="2">
            <h3 className="text-finance-medium mb-6">Send Us a Message</h3>
            <form onSubmit={handleSubmit}>
              <div className="mb-4">
                <label htmlFor="name" className="block text-finance-text mb-2">Full Name</label>
                <input 
                  type="text" 
                  id="name" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finance-accent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="email" className="block text-finance-text mb-2">Email Address</label>
                <input 
                  type="email" 
                  id="email" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finance-accent"
                  required
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="phone" className="block text-finance-text mb-2">Phone Number</label>
                <input 
                  type="tel" 
                  id="phone" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finance-accent"
                />
              </div>
              
              <div className="mb-4">
                <label htmlFor="subject" className="block text-finance-text mb-2">Subject</label>
                <select 
                  id="subject" 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finance-accent"
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="investment">Investment Inquiry</option>
                  <option value="services">Services Information</option>
                  <option value="career">Career Opportunities</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className="mb-6">
                <label htmlFor="message" className="block text-finance-text mb-2">Message</label>
                <textarea 
                  id="message" 
                  rows={4} 
                  className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-finance-accent resize-none"
                  required
                ></textarea>
              </div>
              
              <button 
                type="submit" 
                className="btn-primary w-full"
              >
                Send Message
              </button>
              
              <p className="text-sm text-gray-500 mt-4 text-center">
                We respect your privacy and will never share your information.
              </p>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
