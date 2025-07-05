"use client";
import React, { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { useIsMobile } from "@/hooks/use-mobile";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi,
} from "@/components/ui/carousel";

const TestimonialsSection = () => {
  const isMobile = useIsMobile();
  const [api, setApi] = useState<CarouselApi>();
  const [current, setCurrent] = useState(0);

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Community Manager",
      company: "TechStartup",
      content:
        "PollyBot transformed our Discord server. We went from spending hours on support to having an AI that handles 80% of questions automatically. Our response time improved dramatically!",
      initial: "SC",
      avatarColor: "from-pink-500 to-violet-500",
    },
    {
      name: "Marcus Rodriguez",
      role: "Product Owner",
      company: "SaaS Solutions",
      content:
        "The integration with our existing systems was seamless. PollyBot doesn't just answer questions - it actually helps with sales by qualifying leads and providing detailed product information.",
      initial: "MR",
      avatarColor: "from-blue-500 to-cyan-500",
    },
    {
      name: "Emily Watson",
      role: "Discord Admin",
      company: "Gaming Community",
      content:
        "Setting up PollyBot was incredibly easy. The custom instructions feature lets us train it on our specific game mechanics and rules. Our members love how helpful and responsive it is.",
      initial: "EW",
      avatarColor: "from-emerald-500 to-teal-500",
    },
  ];

  useEffect(() => {
    if (!api) {
      return;
    }

    setCurrent(api.selectedScrollSnap());

    api.on("select", () => {
      setCurrent(api.selectedScrollSnap());
    });
  }, [api]);

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
    <section className="py-20 bg-gradient-to-br from-pink-50 via-violet-50 to-blue-50 dark:from-gray-800 dark:via-purple-900/20 dark:to-blue-900/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2
            className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent"
            style={{ lineHeight: "1.5" }}
          >
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Join thousands of satisfied customers who have transformed their
            community support with PollyBot.ai
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
                {testimonials.map((testimonial, index) => (
                  <CarouselItem key={index} className="pl-2 md:pl-4 basis-4/5">
                    <Card className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm h-full">
                      <CardContent className="p-6">
                        <div className="flex items-center mb-4">
                          <Avatar className="mr-3">
                            <AvatarFallback
                              className={`bg-gradient-to-r ${testimonial.avatarColor} text-white`}
                            >
                              {testimonial.initial}
                            </AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="font-semibold">{testimonial.name}</p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.role}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              {testimonial.company}
                            </p>
                          </div>
                        </div>
                        <blockquote className="text-muted-foreground italic leading-relaxed">
                          {testimonial.content}
                        </blockquote>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>

            {/* Navigation Controls at Bottom */}
            <div className="flex items-center justify-center gap-4 mt-6">
              <button
                onClick={scrollPrev}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Previous testimonial"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 19l-7-7 7-7"
                  />
                </svg>
              </button>

              {/* Avatar Indicators */}
              <div className="flex gap-2">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => handleIndicatorClick(index)}
                    className={`transition-all duration-300 ${
                      current === index
                        ? "scale-125 shadow-lg opacity-100"
                        : "scale-100 opacity-60 hover:opacity-80"
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  >
                    <Avatar className="w-8 h-8">
                      <AvatarFallback
                        className={`bg-gradient-to-r ${testimonial.avatarColor} text-white text-xs`}
                      >
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                  </button>
                ))}
              </div>

              <button
                onClick={scrollNext}
                className="p-2 rounded-full bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm border border-gray-200 dark:border-gray-700 hover:bg-white dark:hover:bg-gray-800 transition-all duration-200 shadow-sm hover:shadow-md"
                aria-label="Next testimonial"
              >
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </button>
            </div>
          </div>
        ) : (
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {testimonials.map((testimonial, index) => (
              <Card
                key={index}
                className="hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 bg-white/80 dark:bg-gray-800/80 backdrop-blur-sm"
              >
                <CardContent className="p-6">
                  <div className="flex items-center mb-4">
                    <Avatar className="mr-3">
                      <AvatarFallback
                        className={`bg-gradient-to-r ${testimonial.avatarColor} text-white`}
                      >
                        {testimonial.initial}
                      </AvatarFallback>
                    </Avatar>
                    <div>
                      <p className="font-semibold">{testimonial.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.role}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {testimonial.company}
                      </p>
                    </div>
                  </div>
                  <blockquote className="text-muted-foreground italic leading-relaxed">
                    {testimonial.content}
                  </blockquote>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default TestimonialsSection;
