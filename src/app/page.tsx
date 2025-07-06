'use client';

import React from 'react';
import dynamic from 'next/dynamic';
import { useIsMobile } from '@/hooks/use-mobile';
import './globals.css';
import '@/components/ui/App.css';

// Dynamically import components with optional loading state
const Header = dynamic(() => import('@/components/Header'), {
  loading: () => <div>Loading Header...</div>, // Optional: Custom loading message for Header
});

const HeroSection = dynamic(() => import('@/components/HeroSection'), {
  loading: () => <div>Loading Hero Section...</div>,
});

const FeaturesSection = dynamic(() => import('@/components/FeaturesSection'), {
  loading: () => <div>Loading Features Section...</div>,
});

const PricingSection = dynamic(() => import('@/components/PricingSection'), {
  loading: () => <div>Loading Pricing Section...</div>,
});

const TestimonialsSection = dynamic(() => import('@/components/TestimonialsSection'), {
  loading: () => <div>Loading Testimonials Section...</div>,
});

const HelpSection = dynamic(() => import('@/components/HelpSection'), {
  loading: () => <div>Loading Help Section...</div>,
});

const FAQSection = dynamic(() => import('@/components/FAQSection'), {
  loading: () => <div>Loading FAQ Section...</div>,
});

const Footer = dynamic(() => import('@/components/Footer'), {
  loading: () => <div>Loading Footer...</div>,
});

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
