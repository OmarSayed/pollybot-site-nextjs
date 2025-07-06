"use client"
import React from 'react';
import { Shield, DollarSign, Star } from 'lucide-react';

const TrustBadges = () => {
  const trustFeatures = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "SSL encrypted checkout"
    },
    {
      icon: DollarSign,
      title: "Money-Back Guarantee",
      description: "30 days, no questions asked"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Trusted by 10,000+ users"
    }
  ];

  return (
    <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto mt-16">
      {trustFeatures.map((feature, index) => {
        const Icon = feature.icon;
        return (
          <div key={index} className="flex flex-col items-center text-center">
            <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mb-3">
              <Icon className="h-6 w-6 text-white" />
            </div>
            <h3 className="font-semibold text-lg mb-1">{feature.title}</h3>
            <p className="text-muted-foreground text-base">{feature.description}</p>
          </div>
        );
      })}
    </div>
  );
};

export default TrustBadges;
