'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight } from 'lucide-react';

interface AffiliateHeroSectionProps {
  onStartEarningClick: () => void;
}

const AffiliateHeroSection = ({ onStartEarningClick }: AffiliateHeroSectionProps) => {
  return (
    <section className="py-20 bg-gradient-to-br from-violet-50 to-pink-50 dark:from-violet-950/20 dark:to-pink-950/20">
      <div className="container mx-auto px-4 text-center">
        <Badge className="mb-6 cursor-pointer bg-gradient-to-r from-pink-500 to-violet-500 text-white text-lg px-6 py-2">
          25% Commission Forever
        </Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent leading-tight" style={{ lineHeight: '1.5' }}>
          Earn Big as a Polly Bot Affiliate
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
          Earn 25% recurring commission on every customer you refer. Turn your network into a revenue stream that grows month after month.
        </p>
        <div className="flex justify-center">
          <Button size="lg" className=" cursor-pointer  bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600" onClick={onStartEarningClick}>
            Start Earning Today <ArrowRight className="w-4 h-4 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default AffiliateHeroSection;
