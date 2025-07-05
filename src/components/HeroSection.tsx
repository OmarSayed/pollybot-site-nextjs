'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowDown, MessageCircle, Sparkles, Zap, Bot, CreditCard, Clock } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

const HeroSection = () => {
  const isMobile = useIsMobile();

  const scrollToFeatures = () => {
    const element = document.querySelector('#features');
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth'
      });
    }
  };

  return (
    <section id="hero" className={`${isMobile ? 'min-h-screen py-8' : 'min-h-screen'} flex items-center justify-center relative overflow-hidden px-4`}>
      {/* Enhanced Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-pink-100 via-violet-100 to-blue-100 dark:from-gray-900 dark:via-purple-900/30 dark:to-blue-900/30" />
      
      {/* Animated Background Elements - simplified for mobile */}
      <div className="absolute inset-0 overflow-hidden">
        <div className={`absolute -top-40 -right-40 bg-gradient-to-br from-pink-400/30 to-violet-400/30 rounded-full blur-3xl animate-pulse ${
          isMobile ? 'w-60 h-60' : 'w-80 md:w-96 h-80 md:h-96'
        }`} />
        <div className={`absolute -bottom-40 -left-40 bg-gradient-to-tr from-blue-400/30 to-cyan-400/30 rounded-full blur-3xl animate-pulse ${
          isMobile ? 'w-60 h-60' : 'w-80 md:w-96 h-80 md:h-96'
        }`} style={{
        animationDelay: '1s'
      }} />
        {!isMobile && (
          <>
            <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-gradient-to-r from-yellow-400/20 to-orange-400/20 rounded-full blur-2xl animate-pulse" style={{
            animationDelay: '2s'
          }} />
            <div className="absolute bottom-1/3 right-1/3 w-24 h-24 bg-gradient-to-r from-green-400/20 to-teal-400/20 rounded-full blur-xl animate-pulse" style={{
            animationDelay: '0.5s'
          }} />
          </>
        )}
      </div>

      {/* Floating Elements - simplified for mobile */}
      {!isMobile && (
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-10 animate-bounce" style={{
          animationDelay: '0s',
          animationDuration: '3s'
        }}>
            <Sparkles className="h-6 w-6 text-pink-400/60" />
          </div>
          <div className="absolute top-32 right-20 animate-bounce" style={{
          animationDelay: '1s',
          animationDuration: '4s'
        }}>
            <Zap className="h-8 w-8 text-violet-400/60" />
          </div>
          <div className="absolute bottom-40 left-20 animate-bounce" style={{
          animationDelay: '2s',
          animationDuration: '3.5s'
        }}>
            <Bot className="h-7 w-7 text-blue-400/60" />
          </div>
          <div className="absolute bottom-20 right-10 animate-bounce" style={{
          animationDelay: '0.5s',
          animationDuration: '2.5s'
        }}>
            <MessageCircle className="h-5 w-5 text-cyan-400/60" />
          </div>
        </div>
      )}

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center max-w-6xl mx-auto">
          {/* Enhanced Headline with improved typography hierarchy */}
          <div className={`${isMobile ? 'mb-4' : 'mb-8 md:mb-12'} animate-fade-in`}>
            <div className="flex items-center justify-center mb-3">
              <div className={`flex items-center bg-gradient-to-r from-pink-500/10 to-violet-500/10 backdrop-blur-sm rounded-full border border-pink-200/50 dark:border-violet-400/30 ${
                isMobile ? 'px-3 py-1.5' : 'px-4 py-2'
              }`}>
                <Sparkles className={`text-pink-500 mr-2 ${isMobile ? 'h-3 w-3' : 'h-4 w-4'}`} />
                <span className={`font-medium text-pink-600 dark:text-pink-400 ${isMobile ? 'text-xs' : 'text-sm'}`}>Your own AI Agent for Discord</span>
              </div>
            </div>
            
            <h1 className="font-bold mb-3">
              <span className={`text-muted-foreground block mb-1 leading-tight ${
                isMobile ? 'text-sm' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
              }`}>Train and Launch Your Own</span>
              <span className={`bg-gradient-to-r from-pink-600 via-violet-600 to-blue-600 bg-clip-text text-transparent block break-words ${
                isMobile ? 'text-lg leading-tight' : 'text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl'
              }`} style={{ lineHeight: isMobile ? '1.2' : '1.4' }}>
                Sales or Support AI Agent
              </span>
              <span className={`text-muted-foreground block mt-1 leading-tight ${
                isMobile ? 'text-sm' : 'text-lg sm:text-xl md:text-2xl lg:text-3xl'
              }`}>in minutes!</span>
            </h1>
          </div>

          {/* Enhanced platform icons and text */}
          <div className={`flex flex-col items-center justify-center gap-2 animate-fade-in ${
            isMobile ? 'mb-4' : 'sm:flex-row sm:gap-6 mb-8 md:mb-10'
          }`} style={{
          animationDelay: '0.2s'
        }}>
            <span className={`text-muted-foreground font-medium leading-tight ${
              isMobile ? 'text-sm' : 'text-lg md:text-xl'
            }`}>Perfect for</span>
            <div className={`flex items-center gap-2 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-900/20 dark:to-indigo-900/20 backdrop-blur-sm rounded-xl border border-blue-200/50 dark:border-blue-400/30 shadow-lg ${
              isMobile ? 'px-3 py-2' : 'px-4 md:px-6 py-3'
            }`}>
              <MessageCircle className={`text-[#5865F2] ${isMobile ? 'h-4 w-4' : 'h-6 w-6 md:h-7 md:w-7'}`} />
              <span className={`font-semibold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent leading-tight ${
                isMobile ? 'text-sm' : 'text-lg md:text-xl'
              }`}>Discord Servers</span>
            </div>
            <span className={`text-muted-foreground font-medium leading-tight ${
              isMobile ? 'text-sm' : 'text-lg md:text-xl'
            }`}>and</span>
            <div className={`flex items-center gap-2 bg-gradient-to-r from-pink-50 to-violet-50 dark:from-pink-900/20 dark:to-violet-900/20 backdrop-blur-sm rounded-xl border border-pink-200/50 dark:border-violet-400/30 shadow-lg ${
              isMobile ? 'px-3 py-2' : 'px-4 md:px-6 py-3'
            }`}>
              <div className={`bg-gradient-to-r from-pink-500 to-violet-500 rounded-lg ${
                isMobile ? 'w-4 h-4' : 'w-6 h-6 md:w-7 md:h-7'
              }`}></div>
              <span className={`font-semibold bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent leading-tight ${
                isMobile ? 'text-sm' : 'text-lg md:text-xl'
              }`}>SaaS Apps</span>
            </div>
          </div>

          <p className={`text-muted-foreground max-w-4xl mx-auto animate-fade-in leading-tight ${
            isMobile ? 'text-sm mb-5' : 'text-lg md:text-xl mb-10 md:mb-14'
          }`} style={{
          animationDelay: '0.4s'
        }}>
            Automate conversations, resolve support tickets, boost sales conversions, and grow your community with an intelligent AI chatbot that learns your business
          </p>

          {/* Enhanced CTA Button */}
          <div className={`flex flex-col items-center justify-center gap-4 animate-fade-in px-4 ${
            isMobile ? 'mb-8' : 'mb-16 md:mb-20'
          }`} style={{
          animationDelay: '0.6s'
        }}>
            <Button 
              size="lg" 
              className={`bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white font-semibold shadow-2xl hover:shadow-3xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto rounded-xl ${
                isMobile ? 'px-6 py-3 text-base' : 'px-8 md:px-12 py-4 md:py-6 text-lg md:text-xl'
              }`} 
              onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1236026467213639821', '_blank')}
            >
              <Sparkles className="h-5 w-5 mr-2" />
              Try PollyBot Free
            </Button>
            
            {/* Updated benefits text with icons */}
            <div className={`flex items-center text-muted-foreground leading-tight ${
              isMobile ? 'flex-col gap-1 text-xs' : 'flex-col sm:flex-row gap-4 sm:gap-8 text-sm'
            }`}>
              <div className="flex items-center gap-2">
                <CreditCard className="h-4 w-4 text-green-500" />
                <span>No credit card required</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="h-4 w-4 text-blue-500" />
                <span>Setup in minutes</span>
              </div>
            </div>
          </div>

          {/* Enhanced Scroll Indicator */}
          <div className="animate-fade-in" style={{
          animationDelay: '0.8s'
        }}>
            <button onClick={scrollToFeatures} className={`inline-flex items-center text-muted-foreground hover:text-primary transition-all duration-300 group bg-background/20 backdrop-blur-sm rounded-full border border-border/50 ${
              isMobile ? 'px-3 py-1.5' : 'px-4 py-2'
            }`}>
              <span className={`mr-2 font-medium leading-tight ${
                isMobile ? 'text-xs' : 'text-base md:text-lg'
              }`}>Discover Features</span>
              <ArrowDown className="h-5 w-5 group-hover:translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
