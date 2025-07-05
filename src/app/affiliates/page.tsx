
'use client'
import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import AffiliateHeroSection from '@/components/affiliates/AffiliateHeroSection';
import EarningExamplesSection from '@/components/affiliates/EarningExamplesSection';
import GettingStartedSection from '@/components/affiliates/GettingStartedSection';
import AffiliateCodeGenerator from '@/components/affiliates/AffiliateCodeGenerator';
import BenefitsSection from '@/components/affiliates/BenefitsSection';

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
