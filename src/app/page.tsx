"use client";

import React from 'react';
import Header from '@/components/Header';
import HeroSection from '@/components/HeroSection';
import FeaturesSection from '@/components/FeaturesSection';
import PricingSection from '@/components/PricingSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import HelpSection from '@/components/HelpSection';
import FAQSection from '@/components/FAQSection';
import Footer from '@/components/Footer';
import { useIsMobile } from '@/hooks/use-mobile';
import './globals.css';
import '@/components/ui/App.css'
const Home = () => {
  const isMobile = useIsMobile();

  return (
    <div className="min-h-screen">
      <Header />
      <main className={isMobile ? 'pt-16 space-y-8' : 'pt-20 space-y-16'}>
        <HeroSection />
        <FeaturesSection />
        <TestimonialsSection />
        <PricingSection />
        <HelpSection />
        <FAQSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
