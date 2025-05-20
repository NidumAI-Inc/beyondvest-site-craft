
import React, { useEffect } from 'react';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import AboutSection from '@/components/AboutSection';
import StrategySection from '@/components/StrategySection';
import ServicesSection from '@/components/ServicesSection';
import PerformanceSection from '@/components/PerformanceSection';
import InsightsSection from '@/components/InsightsSection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';
import ScrollToTop from '@/components/ScrollToTop';

const Index = () => {
  useEffect(() => {
    // Update document title
    document.title = "BeyondVest | Navigating Markets, Elevating Returns";
    
    // Add scroll reveal functionality
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('active');
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -100px 0px' }
    );
    
    document.querySelectorAll('.reveal').forEach(el => {
      observer.observe(el);
    });
    
    return () => {
      document.querySelectorAll('.reveal').forEach(el => {
        observer.unobserve(el);
      });
    };
  }, []);

  return (
    <>
      <Navbar />
      <Hero />
      <AboutSection />
      <StrategySection />
      <ServicesSection />
      <PerformanceSection />
      <InsightsSection />
      <ContactSection />
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Index;
