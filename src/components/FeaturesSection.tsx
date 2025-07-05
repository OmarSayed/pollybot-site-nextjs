"use client"
import React, { useState, useEffect } from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { MessageCircle, Search, Home, Menu, ArrowDown, ChevronDown, Zap, Shield, BarChart } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";
import CarouselIndicators from './CarouselIndicators';

const FeaturesSection = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const features = [
    {
      icon: MessageCircle,
      title: "AI-Powered Chat (GPT-4)",
      description: "Leverage the latest OpenAI GPT-4 technology for intelligent, context-aware conversations that feel natural and helpful.",
      gradient: "from-blue-500 to-cyan-500",
      bgGradient: "from-blue-50 to-cyan-50 dark:from-blue-900/20 dark:to-cyan-900/20",
      iconBg: "bg-gradient-to-br from-blue-500 to-cyan-500",
      indicatorColor: "bg-blue-500"
    },
    {
      icon: Menu,
      title: "Thread-Based Support",
      description: "Organize support conversations in dedicated threads, keeping your server clean while providing personalized assistance.",
      gradient: "from-purple-500 to-pink-500",
      bgGradient: "from-purple-50 to-pink-50 dark:from-purple-900/20 dark:to-pink-900/20",
      iconBg: "bg-gradient-to-br from-purple-500 to-pink-500",
      indicatorColor: "bg-purple-500"
    },
    {
      icon: Home,
      title: "Human Handoff",
      description: "Seamlessly transfer complex issues to human moderators when AI assistance reaches its limits.",
      gradient: "from-emerald-500 to-teal-500",
      bgGradient: "from-emerald-50 to-teal-50 dark:from-emerald-900/20 dark:to-teal-900/20",
      iconBg: "bg-gradient-to-br from-emerald-500 to-teal-500",
      indicatorColor: "bg-emerald-500"
    },
    {
      icon: Search,
      title: "Custom Instructions",
      description: "Train your AI assistant with specific knowledge about your product, service, or community guidelines.",
      gradient: "from-orange-500 to-red-500",
      bgGradient: "from-orange-50 to-red-50 dark:from-orange-900/20 dark:to-red-900/20",
      iconBg: "bg-gradient-to-br from-orange-500 to-red-500",
      indicatorColor: "bg-orange-500"
    },
    {
      icon: ChevronDown,
      title: "File Training",
      description: "Upload documents, manuals, and reference materials to create a comprehensive knowledge base for your AI.",
      gradient: "from-indigo-500 to-purple-500",
      bgGradient: "from-indigo-50 to-purple-50 dark:from-indigo-900/20 dark:to-purple-900/20",
      iconBg: "bg-gradient-to-br from-indigo-500 to-purple-500",
      indicatorColor: "bg-indigo-500"
    },
    {
      icon: ArrowDown,
      title: "Multi-Channel Support",
      description: "Connect with Discord servers and integrate with your existing SaaS applications for streamlined workflows.",
      gradient: "from-teal-500 to-blue-500",
      bgGradient: "from-teal-50 to-blue-50 dark:from-teal-900/20 dark:to-blue-900/20",
      iconBg: "bg-gradient-to-br from-teal-500 to-blue-500",
      indicatorColor: "bg-teal-500"
    },
    {
      icon: Zap,
      title: "Real-time Analytics",
      description: "Track conversation metrics, user satisfaction, and bot performance with detailed analytics dashboard.",
      gradient: "from-yellow-500 to-orange-500",
      bgGradient: "from-yellow-50 to-orange-50 dark:from-yellow-900/20 dark:to-orange-900/20",
      iconBg: "bg-gradient-to-br from-yellow-500 to-orange-500",
      indicatorColor: "bg-yellow-500"
    },
    {
      icon: Shield,
      title: "Advanced Security",
      description: "Enterprise-grade security with role-based permissions, data encryption, and compliance features.",
      gradient: "from-rose-500 to-pink-500",
      bgGradient: "from-rose-50 to-pink-50 dark:from-rose-900/20 dark:to-pink-900/20",
      iconBg: "bg-gradient-to-br from-rose-500 to-pink-500",
      indicatorColor: "bg-rose-500"
    },
    {
      icon: BarChart,
      title: "Smart Escalation",
      description: "Automatically escalate complex queries to human agents based on confidence levels and conversation context.",
      gradient: "from-violet-500 to-purple-500",
      bgGradient: "from-violet-50 to-purple-50 dark:from-violet-900/20 dark:to-purple-900/20",
      iconBg: "bg-gradient-to-br from-violet-500 to-purple-500",
      indicatorColor: "bg-violet-500"
    }
  ];

  useEffect(() => {
    if (!api) {
      return
    }
 
    setCurrent(api.selectedScrollSnap())
 
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap())
    })
  }, [api])

  const handleIndicatorClick = (index: number) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  const scrollPrev = () => {
    if (api) {
      api.scrollPrev();
    }
  };

  const scrollNext = () => {
    if (api) {
      api.scrollNext();
    }
  };

  return (
    <section id="features" className={`bg-background relative ${isMobile ? 'py-8' : 'py-20'}`}>
      <div className="container mx-auto px-4">
        {/* Key Features */}
        <div className={`text-center ${isMobile ? 'mb-6' : 'mb-12'}`}>
          <h2 className={`font-bold mb-6 bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent ${
            isMobile ? 'text-2xl' : 'text-3xl md:text-5xl'
          }`} style={{ lineHeight: '1.5' }}>
            Key Features
          </h2>
          <p className={`text-muted-foreground max-w-2xl mx-auto leading-relaxed ${
            isMobile ? 'text-base' : 'text-xl'
          }`}>
            Everything you need to create an intelligent AI representative for your community
          </p>
        </div>

        {/* Mobile: Carousel, Desktop: Grid */}
        {isMobile ? (
          <div className="relative">
            <Carousel
              setApi={setApi}
              opts={{
                align: "start",
                loop: true,
              }}
              className="w-full"
            >
              <CarouselContent className="-ml-2 md:-ml-4">
                {features.map((feature, index) => {
                  const Icon = feature.icon;
                  return (
                    <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                      <Card className={`hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border-0 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm overflow-hidden relative h-full`}>
                        {/* Subtle animated background effect */}
                        <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                        
                        <CardHeader className="relative z-10">
                          <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                            <Icon className="h-7 w-7 text-white" />
                          </div>
                          <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-tight">{feature.title}</CardTitle>
                        </CardHeader>
                        <CardContent className="relative z-10">
                          <CardDescription className="text-muted-foreground leading-relaxed">
                            {feature.description}
                          </CardDescription>
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  );
                })}
              </CarouselContent>
            </Carousel>
            
            {/* Navigation Controls at Bottom */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Previous feature"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              {/* Carousel Indicators */}
              <CarouselIndicators 
                features={features}
                currentIndex={current}
                onIndicatorClick={handleIndicatorClick}
              />
              
              <button
                onClick={scrollNext}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Next feature"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card key={index} className={`hover:shadow-xl transition-all duration-300 group hover:-translate-y-2 border-0 bg-gradient-to-br ${feature.bgGradient} backdrop-blur-sm overflow-hidden relative`}>
                  {/* Subtle animated background effect */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                  
                  <CardHeader className="relative z-10">
                    <div className={`w-14 h-14 ${feature.iconBg} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg group-hover:shadow-xl`}>
                      <Icon className="h-7 w-7 text-white" />
                    </div>
                    <CardTitle className="text-xl group-hover:text-primary transition-colors duration-300 leading-tight">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="relative z-10">
                    <CardDescription className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

export default FeaturesSection;
