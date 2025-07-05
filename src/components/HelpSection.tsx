'use client'
import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import HowItWorksSteps from './help/HowItWorksSteps';
import SetupGuide from './help/SetupGuide';
import MembersGuide from './help/MembersGuide';
import WebIntegration from './help/WebIntegration';
import Troubleshooting from './help/Troubleshooting';

const HelpSection = () => {
  return (
    <section id="help" className="py-12 md:py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 md:mb-10 bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent leading-tight pb-2">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto px-4">
            Complete guide for setting up and using PollyBot.ai in your Discord server
          </p>
        </div>

        <HowItWorksSteps />

        <Tabs defaultValue="setup" className="max-w-6xl mx-auto">
          <TabsList className="grid w-full grid-cols-2 lg:grid-cols-4 bg-muted/50 backdrop-blur-sm mb-6 md:mb-8 h-auto">
            <TabsTrigger value="setup" className="text-xs sm:text-sm md:text-base px-1 sm:px-2 md:px-4 py-2 sm:py-3 h-auto whitespace-normal text-center leading-tight">
              Setup Guide
            </TabsTrigger>
            <TabsTrigger value="members" className="text-xs sm:text-sm md:text-base px-1 sm:px-2 md:px-4 py-2 sm:py-3 h-auto whitespace-normal text-center leading-tight">
              For Members
            </TabsTrigger>
            <TabsTrigger value="commands" className="text-xs sm:text-sm md:text-base px-1 sm:px-2 md:px-4 py-2 sm:py-3 h-auto whitespace-normal text-center leading-tight">
              Web Integration
            </TabsTrigger>
            <TabsTrigger value="troubleshooting" className="text-xs sm:text-sm md:text-base px-1 sm:px-2 md:px-4 py-2 sm:py-3 h-auto whitespace-normal text-center leading-tight">
              Troubleshooting
            </TabsTrigger>
          </TabsList>

          <TabsContent value="setup" className="mt-6 md:mt-8">
            <SetupGuide />
          </TabsContent>

          <TabsContent value="members" className="mt-6 md:mt-8">
            <MembersGuide />
          </TabsContent>

          <TabsContent value="commands" className="mt-6 md:mt-8">
            <WebIntegration />
          </TabsContent>

          <TabsContent value="troubleshooting" className="mt-6 md:mt-8">
            <Troubleshooting />
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default HelpSection;
