"use client"
import React from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Check } from 'lucide-react';

interface Plan {
  name: string;
  monthlyPrice: string;
  yearlyPrice: string;
  description: string;
  features: string[];
  popular: boolean;
  cta: string;
  buttonColor: string;
  cardBg: string;
  comingSoon?: boolean;
}

interface PricingCardProps {
  plan: Plan;
  billingCycle: string;
  onPlanActivation: (plan: Plan) => void;
}

const PricingCard = ({ plan, billingCycle, onPlanActivation }: PricingCardProps) => {
  const formatPrice = (price: string) => {
    if (price === "$0") {
      return { main: "$0", decimal: "" };
    }
    
    const match = price.match(/\$(\d+)\.(\d+)/);
    if (match) {
      return {
        main: `$${match[1]}`,
        decimal: `.${match[2]}`
      };
    }
    
    return { main: price, decimal: "" };
  };

  const currentPrice = billingCycle === 'monthly' ? plan.monthlyPrice : plan.yearlyPrice;
  const priceFormat = formatPrice(currentPrice);

  return (
    <Card className={`relative hover:shadow-xl transition-all duration-300 ${plan.popular ? 'shadow-lg scale-105' : 'hover:-translate-y-1'} ${plan.cardBg} w-full max-w-sm mx-auto`}>
      {plan.popular && (
        <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-pink-500 to-violet-500 text-white">
          Most Popular
        </Badge>
      )}
      
      <CardHeader className="text-center pb-8">
        <CardTitle className="text-2xl font-bold h-8 flex items-center justify-center">{plan.name}</CardTitle>
        <CardDescription className="text-base text-muted-foreground h-12 flex items-center justify-center">{plan.description}</CardDescription>
        <div className="mt-4">
          <div className="flex flex-col items-center">
            <div className="flex items-baseline h-12 justify-center">
              <span className="text-4xl font-bold">
                {priceFormat.main}
              </span>
              {priceFormat.decimal && (
                <span className="text-base">
                  {priceFormat.decimal}
                </span>
              )}
            </div>
          </div>
          
        </div>
      </CardHeader>

      <CardContent className="space-y-4">
        <Button 
          className={`w-full ${plan.buttonColor} ${plan.comingSoon ? 'opacity-70 cursor-not-allowed' : ''}`}
          onClick={() => onPlanActivation(plan)}
          disabled={plan.comingSoon}
        >
          {plan.cta}
        </Button>

        <ul className="space-y-3 mt-6">
          {plan.features.map((feature, featureIndex) => (
            <li key={featureIndex} className="flex items-center">
              <Check className="w-4 h-4 text-green-500 mr-3 flex-shrink-0" />
              <span className="text-base">{feature}</span>
            </li>
          ))}
        </ul>
      </CardContent>
    </Card>
  );
};

export default PricingCard;



