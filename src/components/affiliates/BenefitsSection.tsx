'use client'
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Users, DollarSign, Shield } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const benefits = [
  {
    icon: Users,
    iconColor: "text-pink-500",
    title: "Growing Market",
    description: "Discord communities are exploding in growth. Every server needs better moderation and engagement tools."
  },
  {
    icon: DollarSign,
    iconColor: "text-green-500",
    title: "Recurring Revenue",
    description: "Earn 25% commission every month for as long as your referrals remain customers. Build a true passive income stream."
  },
  {
    icon: Shield,
    iconColor: "text-blue-500",
    title: "Proven Product",
    description: "Polly Bot is trusted by thousands of Discord communities. Easy to sell, high conversion rates."
  }
];

const BenefitsSection = () => {
  const isMobile = useIsMobile();

  const BenefitCard = ({ benefit}: { benefit: typeof benefits[0], index: number }) => (
    <Card>
      <CardHeader>
        <benefit.icon className={`w-12 h-12 ${benefit.iconColor} mb-4`} />
        <CardTitle>{benefit.title}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{benefit.description}</p>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Why Partner With Polly Bot?
        </h2>
        
        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {benefits.map((benefit, index) => (
                <CarouselItem key={index}>
                  <BenefitCard benefit={benefit} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {benefits.map((benefit, index) => (
              <BenefitCard key={index} benefit={benefit} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default BenefitsSection;
