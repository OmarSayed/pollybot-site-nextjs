'use client'
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { useIsMobile } from '@/hooks/use-mobile';

const earningExamples = [
  {
    plan: "Falcon",
    customers: 20,
    monthlyEarnings: "$5,000",
    annualEarnings: "$60,000"
  },
  {
    plan: "Flock", 
    customers: 40,
    monthlyEarnings: "$3,000",
    annualEarnings: "$36,000"
  },
  {
    plan: "Feather",
    customers: 100,
    monthlyEarnings: "$2,250",
    annualEarnings: "$27,000"
  }
];

const EarningExamplesSection = () => {
  const isMobile = useIsMobile();

  const EarningCard = ({ example }: { example: typeof earningExamples[0], index: number }) => (
    <Card className="text-center hover:shadow-lg transition-shadow">
      <CardHeader>
        <CardTitle className="text-2xl">{example.customers} {example.plan} Plan Customers</CardTitle>
        <CardDescription>Yearly plans per month</CardDescription>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="bg-gradient-to-r from-pink-50 to-violet-50 dark:from-pink-950/20 dark:to-violet-950/20 p-4 rounded-lg">
          <div className="text-4xl font-bold bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent">
            {example.monthlyEarnings}
          </div>
          <div className="text-sm font-medium">Monthly Earnings</div>
        </div>
        <div>
          <div className="text-xl font-semibold text-green-600">
            {example.annualEarnings}/year
          </div>
          <div className="text-sm text-muted-foreground">Annual earning potential</div>
        </div>
      </CardContent>
    </Card>
  );

  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
          Your Unlimited Earning Potential
        </h2>
        <p className="text-lg text-muted-foreground text-center mb-12 max-w-2xl mx-auto">
          Here are some real examples based on our current pricing. See how much you could earn with just a few referrals.
        </p>
        
        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {earningExamples.map((example, index) => (
                <CarouselItem key={index}>
                  <EarningCard example={example} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {earningExamples.map((example, index) => (
              <EarningCard key={index} example={example} index={index} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default EarningExamplesSection;
