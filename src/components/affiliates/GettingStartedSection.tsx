'use client'
import React from 'react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { Zap, Clock, TrendingUp, DollarSign, ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const getStartedSteps = [
  {
    icon: Zap,
    number: 1,
    title: "Create Your Code",
    description: "Generate your unique tracking code in seconds"
  },
  {
    icon: TrendingUp,
    number: 2,
    title: "Promote the Links",
    description: "Share your custom link anywhere - social media, email, website"
  },
  {
    icon: DollarSign,
    number: 3,
    title: "Earn Commission",
    description: "Get 25% of every sale, recurring monthly"
  },
  {
    icon: Clock,
    number: 4,
    title: "Cash Out Monthly",
    description: "Receive payments every month automatically"
  }
];

const GettingStartedSection = () => {
  const isMobile = useIsMobile();

  const StepCard = ({ step }: { step: typeof getStartedSteps[0], index: number }) => (
    <div className="text-center p-4">
      <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
        <step.icon className="w-8 h-8 text-white" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{step.number}. {step.title}</h3>
      <p className="text-muted-foreground">{step.description}</p>
    </div>
  );

  return (
    <section id="getting-started" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          How Easy It Is to Get Started
        </h2>
        
        {isMobile ? (
          <Carousel className="w-full max-w-sm mx-auto" opts={{ align: "start", loop: true }}>
            <CarouselContent>
              {getStartedSteps.map((step, index) => (
                <CarouselItem key={index}>
                  <StepCard step={step} index={index} />
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        ) : (
          <div className="flex items-center justify-center max-w-6xl mx-auto">
            {getStartedSteps.map((step, index) => (
              <React.Fragment key={index}>
                <div className="text-center flex-1">
                  <div className="w-16 h-16 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{step.number}. {step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
                {index < getStartedSteps.length - 1 && (
                  <div className="flex items-center justify-center px-4">
                    <ArrowRight className="w-6 h-6 text-pink-500" />
                  </div>
                )}
              </React.Fragment>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default GettingStartedSection;
