'use client'
import React from 'react';
import dynamic from 'next/dynamic';

const Header = dynamic(() => import('@/components/Header'));
const Footer = dynamic(() => import('@/components/Footer'));
const AffiliateHeroSection = dynamic(() => import('@/components/affiliates/AffiliateHeroSection'));
const EarningExamplesSection = dynamic(() => import('@/components/affiliates/EarningExamplesSection'));
const GettingStartedSection = dynamic(() => import('@/components/affiliates/GettingStartedSection'));
const AffiliateCodeGenerator = dynamic(() => import('@/components/affiliates/AffiliateCodeGenerator'));
const BenefitsSection = dynamic(() => import('@/components/affiliates/BenefitsSection'));

const Affiliates = () => {
  const scrollToGettingStarted = () => {
    const element = document.querySelector('#getting-started');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Generate a simple user ID for the affiliate code (in a real app, this would come from authentication)
  const userId = 'affiliate-user';

  return (
    <div className="min-h-screen">
      <Header />
      <main className="pt-20">
        <AffiliateHeroSection onStartEarningClick={scrollToGettingStarted} />
        <EarningExamplesSection />
        <GettingStartedSection />
        <AffiliateCodeGenerator userId={userId} />
        <BenefitsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Affiliates;
