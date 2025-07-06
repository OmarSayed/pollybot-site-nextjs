"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import { ArrowRight } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import type { CarouselApi } from '@/components/ui/carousel';

const HowItWorksSteps = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  const steps = [
    {
      step: "1",
      title: "Install Bot",
      description: "Invite PollyBot to your Discord server with one click",
      gradient: "from-blue-500 to-purple-500",
      bgGradient: "from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20",
      hasAction: true,
      actionUrl: "https://discord.com/oauth2/authorize?client_id=1236026467213639821"
    },
    {
      step: "2", 
      title: "Train AI",
      description: "Configure your AI assistant with custom instructions and knowledge",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20"
    },
    {
      step: "3",
      title: "Start Chatting",
      description: "Let your AI handle support, sales, and community engagement",
      gradient: "from-pink-500 to-rose-500",
      bgGradient: "from-pink-50 to-rose-50 dark:from-pink-900/20 dark:to-rose-900/20"
    }
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

  const handleIndicatorClick = (index: number) => {
    api?.scrollTo(index);
  };

  const handleStepAction = (url: string) => {
    window.open(url, '_blank');
  };

  return (
    <div className="mb-20">
      <div className="relative max-w-4xl mx-auto">
        <Carousel
          setApi={setApi}
          className="w-full"
          opts={{
            align: "start",
            loop: true,
          }}
        >
          <CarouselContent className={isMobile ? "-ml-2" : "-ml-4"}>
            {steps.map((step, index) => (
              <CarouselItem key={index} className={`${isMobile ? 'pl-2 basis-full' : 'pl-4 md:basis-1/2 lg:basis-1/3'}`}>
                <div className="relative group h-full">
                  <Card className={`bg-gradient-to-br ${step.bgGradient} border-0 hover:shadow-xl transition-all duration-300 hover:-translate-y-2 backdrop-blur-sm h-full`}>
                    <CardHeader>
                      <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        {step.step}
                      </div>
                      <CardTitle className="text-2xl md:text-3xl font-semibold leading-tight flex items-center justify-center gap-2">
                        {step.title}
                        {step.hasAction && (
                          <button
                            onClick={() => handleStepAction(step.actionUrl!)}
                            className="inline-flex items-center justify-center w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 hover:from-blue-600 hover:to-purple-600 rounded-full text-white transition-all duration-300 hover:scale-110 shadow-lg"
                          >
                            <ArrowRight className="w-4 h-4" />
                          </button>
                        )}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-muted-foreground leading-relaxed">{step.description}</CardDescription>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>

          {/* Navigation arrows positioned at the bottom */}
          <div className="flex justify-center items-center gap-4 mt-6">
            <CarouselPrevious className="relative left-0 top-0 translate-y-0 h-8 w-8 bg-background/80 hover:bg-background border border-border/50" />
            
            {/* Navigation indicators */}
            <div className="flex justify-center gap-2">
              {Array.from({ length: count }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleIndicatorClick(index)}
                  className={`w-8 h-8 rounded-full transition-all duration-300 border-2 border-white/30 flex items-center justify-center text-sm font-bold ${
                    current === index 
                      ? `scale-125 shadow-lg opacity-100 ${steps[index]?.gradient ? `bg-gradient-to-r ${steps[index].gradient} text-white` : 'bg-primary text-primary-foreground'}` 
                      : "scale-100 opacity-60 hover:opacity-80 bg-muted text-muted-foreground"
                  }`}
                  aria-label={`Go to step ${index + 1}`}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            
            <CarouselNext className="relative right-0 top-0 translate-y-0 h-8 w-8 bg-background/80 hover:bg-background border border-border/50" />
          </div>
        </Carousel>
      </div>
    </div>
  );
};

export default HowItWorksSteps;
