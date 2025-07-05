// src/components/PricingSection.tsx
"use client";

import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import AuthDialog from './AuthDialog';
import CheckoutDialog from './CheckoutDialog';
import TrustBadges from './pricing/TrustBadges';
import BillingToggle from './pricing/BillingToggle';
import { useIsMobile } from '@/hooks/use-mobile';

// Complete custom plan interface
interface PlanData {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
  buttonColor: string;
  cardBg: string;
  tabColor: string;
  comingSoon?: boolean;
}

// Custom PricingCard component inline
const CustomPricingCard = ({ 
  planData, 
  billingCycle, 
  onActivate 
}: { 
  planData: PlanData; 
  billingCycle: 'monthly' | 'yearly';
  onActivate: (plan: PlanData) => void;
}) => {
  const price = billingCycle === 'yearly' ? planData.yearlyPrice : planData.monthlyPrice;
  const isComingSoon = planData.comingSoon;
  
  return (
    <div className={`relative p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 ${planData.cardBg} ${planData.popular ? 'ring-2 ring-pink-500 scale-105' : ''}`}>
      {planData.popular && (
        <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
          <span className="bg-gradient-to-r from-pink-500 to-violet-500 text-white px-4 py-1 rounded-full text-sm font-medium">
            Most Popular
          </span>
        </div>
      )}
      
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold mb-2">{planData.name}</h3>
        <p className="text-muted-foreground text-sm mb-4">{planData.description}</p>

       <div className="mb-2">
  <span className="text-3xl font-bold">{price}</span>
  {planData.name !== 'Free' && (
    <span className="text-muted-foreground ml-1">
      /{billingCycle === 'yearly' ? 'year' : 'month'}
    </span>
  )}
</div>

{/* Display logic based on plan and billing cycle */}
<div className="h-5 mb-4 mt-5 text-sm font-medium">
  {planData.name === 'Free' && (
    <span className="text-green-600 dark:text-green-400">Free forever</span>
  )}

  {planData.name !== 'Free' && billingCycle === 'yearly' && (
    <span className="text-green-600 dark:text-green-400">Save 50% annually</span>
  )}

  {planData.name !== 'Free' && billingCycle === 'monthly' && (
    <span className="text-muted-foreground">
      or {planData.yearlyPrice}/year
    </span>
  )}
</div>

        
      </div>
 <Button
        className={`w-full ${planData.buttonColor} ${isComingSoon ? 'opacity-50 cursor-not-allowed mb-8' : 'cursor-pointer mb-8'}`}
        onClick={() => !isComingSoon && onActivate(planData)}
        disabled={isComingSoon}
        size="lg"
      >
        {planData.cta}
      </Button>
      <ul className="space-y-3 mb-8">
        {planData.features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <svg className="w-5 h-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
            </svg>
            <span className="text-sm">{feature}</span>
          </li>
        ))}
      </ul>

     
    </div>
  );
};

const PricingSection = () => {
  const [billingCycle, setBillingCycle] = useState<'monthly' | 'yearly'>('yearly');
  const [authDialogOpen, setAuthDialogOpen] = useState(false);
  const [checkoutDialogOpen, setCheckoutDialogOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState<PlanData | null>(null);
  const [activePlan, setActivePlan] = useState('Flock');
  const isMobile = useIsMobile();

  const plansData: PlanData[] = [
    {
      name: "Free",
      monthlyPrice: "$0",
      yearlyPrice: "$0",
      description: "Perfect for getting started",
      features: [
        "50 chats per month",
        "1 team member",
        "1 Agent",
        "20 pages / links limit to train on",
        "Discord integration",
        "Basic AI responses"
      ],
      popular: false,
      cta: "Get Started Free",
      buttonColor: "bg-gray-500 hover:bg-gray-600 text-white",
      cardBg: "bg-gray-50/80 dark:bg-gray-800/50 border-gray-200 dark:border-gray-700",
      tabColor: "data-[state=active]:bg-gray-500 data-[state=active]:text-white"
    },
    {
      name: "Feather",
      monthlyPrice: "$15",
      yearlyPrice: "$89",
      description: "Perfect for small communities",
      features: [
        "250 chats per month",
        "1 team member", 
        "1 Agent",
        "Unlimited links to train on",
        "Discord integration",
        "Basic AI responses",
        "Thread management",
        "7-day free trial"
      ],
      popular: false,
      cta: "Activate Feather Plan",
      buttonColor: "bg-blue-500 hover:bg-blue-600 text-white",
      cardBg: "bg-blue-50/80 dark:bg-blue-950/30 border-blue-200 dark:border-blue-800",
      tabColor: "data-[state=active]:bg-blue-500 data-[state=active]:text-white"
    },
    {
      name: "Flock", 
      monthlyPrice: "$50",
      yearlyPrice: "$299",
      description: "Ideal for growing businesses",
      features: [
        "1,000 chats per month",
        "2 team members",
        "1 Agent",
        "Unlimited links to train on",
        "Discord integration",
        "Advanced AI capabilities",
        "Thread management",
        "Multi-format file training",
        "Custom instructions",
        "SaaS integrations"
      ],
      popular: true,
      cta: "Activate Flock Plan",
      buttonColor: "bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white",
      cardBg: "bg-gradient-to-br from-pink-50/80 to-violet-50/80 dark:from-pink-950/20 dark:to-violet-950/20 border-pink-200 dark:border-pink-800",
      tabColor: "data-[state=active]:bg-gradient-to-r data-[state=active]:from-pink-500 data-[state=active]:to-violet-500 data-[state=active]:text-white"
    },
    {
      name: "Falcon",
      monthlyPrice: "$250", 
      yearlyPrice: "$1499",
      description: "For large organizations",
      features: [
        "Unlimited chats",
        "5 team members",
        "5 Agents",
        "Unlimited links to train on",
        "Discord integration",
        "Advanced AI capabilities",
        "Thread management",
        "Multi-Channel support",
        "Advanced analytics",
        "Custom integrations",
        "Priority support",
        "API access"
      ],
      popular: false,
      cta: "Coming Soon",
      buttonColor: "bg-orange-500 hover:bg-orange-600 text-white",
      cardBg: "bg-orange-50/80 dark:bg-orange-950/30 border-orange-200 dark:border-orange-800",
      comingSoon: true,
      tabColor: "data-[state=active]:bg-orange-500 data-[state=active]:text-white"
    }
  ];

  const handlePlanActivation = (plan: PlanData) => {
    if (plan.name === "Free") {
      window.open('https://discord.com/oauth2/authorize?client_id=1236026467213639821', '_blank');
    } else if (plan.comingSoon) {
      return;
    } else {
      setSelectedPlan(plan);
      setAuthDialogOpen(true);
    }
  };

  const handleAuthComplete = () => {
    setAuthDialogOpen(false);
    setCheckoutDialogOpen(true);
  };

  const currentPlan = plansData.find(plan => plan.name === activePlan) || plansData[2];

  const handleBillingCycleChange = (value: string) => {
    setBillingCycle(value as 'monthly' | 'yearly');
  };

  return (
    <section id="pricing" className="py-20 bg-gradient-to-br from-gray-50 to-white dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-10 bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent leading-relaxed pb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8">
            Choose the perfect plan for your community. Start with our 7-day free trial.
          </p>
          
          <BillingToggle 
            billingCycle={billingCycle} 
            setBillingCycle={handleBillingCycleChange}
          />

          {isMobile && (
            <Tabs value={activePlan} onValueChange={setActivePlan} className="mt-8">
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                {plansData.map((plan) => (
                  <TabsTrigger 
                    key={plan.name} 
                    value={plan.name}
                    className={`text-xs cursor-pointer font-medium ${plan.tabColor}`}
                  >
                    {plan.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          )}
        </div>

        {isMobile ? (
          <div className="flex justify-center max-w-md mx-auto mb-8">
            <CustomPricingCard
              planData={currentPlan}
              billingCycle={billingCycle}
              onActivate={handlePlanActivation}
            />
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-7xl mx-auto mb-8">
            {plansData.map((plan) => (
              <CustomPricingCard
                key={plan.name}
                planData={plan}
                billingCycle={billingCycle}
                onActivate={handlePlanActivation}
              />
            ))}
          </div>
        )}

        {isMobile && (
          <div className="flex justify-center mb-8">
            <Tabs value={activePlan} onValueChange={setActivePlan}>
              <TabsList className="grid w-full max-w-md mx-auto grid-cols-4">
                {plansData.map((plan) => (
                  <TabsTrigger 
                    key={`bottom-${plan.name}`} 
                    value={plan.name}
                    className={`text-xs font-medium ${plan.tabColor}`}
                  >
                    {plan.name}
                  </TabsTrigger>
                ))}
              </TabsList>
            </Tabs>
          </div>
        )}

        <TrustBadges />

        <div className="text-center mt-12">
          <p className="text-base text-muted-foreground mb-4">
            All plans include a 7-day free trial. After trial, use your own OpenAI API key.
          </p>
          <Button 
            className="cursor-pointer"
            variant="outline" 
            size="lg"
            onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1236026467213639821', '_blank')}
          >
            Start Free Trial
          </Button>
        </div>
      </div>

      <AuthDialog
        isOpen={authDialogOpen}
        onClose={() => setAuthDialogOpen(false)}
        onAuthComplete={handleAuthComplete}
        planName={selectedPlan?.name || ''}
      />

      <CheckoutDialog
        isOpen={checkoutDialogOpen}
        onClose={() => setCheckoutDialogOpen(false)}
        planName={selectedPlan?.name || ''}
        monthlyPrice={selectedPlan?.monthlyPrice || ''}
        yearlyPrice={selectedPlan?.yearlyPrice || ''}
      />
    </section>
  );
};

export default PricingSection;

