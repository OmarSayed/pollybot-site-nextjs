'use client';

import React from 'react';
import dynamic from 'next/dynamic';

// Dynamically import Accordion components
const Accordion = dynamic(() => import('@/components/ui/accordion').then((mod) => mod.Accordion), {
  loading: () => <div>Loading Accordion...</div>, // Optional: Custom loading message for Accordion
});

const AccordionContent = dynamic(() => import('@/components/ui/accordion').then((mod) => mod.AccordionContent), {
  loading: () => <div>Loading Accordion Content...</div>, // Optional: Custom loading message for AccordionContent
});

const AccordionItem = dynamic(() => import('@/components/ui/accordion').then((mod) => mod.AccordionItem), {
  loading: () => <div>Loading Accordion Item...</div>, // Optional: Custom loading message for AccordionItem
});

const AccordionTrigger = dynamic(() => import('@/components/ui/accordion').then((mod) => mod.AccordionTrigger), {
  loading: () => <div>Loading Accordion Trigger...</div>, // Optional: Custom loading message for AccordionTrigger
});


const FAQSection = () => {
  const faqs = [
    {
      question: "What is an AI Agent or AI Assistant?",
      answer: "An AI Agent (also called an AI Assistant) is like having a smart computer helper that can answer questions and help solve problems. Think of it as a really knowledgeable friend who never gets tired and is available 24/7. It can understand what you're asking, think about the best answer, and respond just like a human would. PollyBot is an AI Agent that lives in your Discord server and helps answer questions about your business, product, or service automatically."
    },
    {
      question: "How does the 7-day free trial work?",
      answer: "During the 7-day free trial, you get full access to PollyBot's features without any limitations. After the trial, you'll need to provide your own OpenAI API key to continue using the service, or upgrade to one of our paid plans."
    },
    {
      question: "Do I need technical knowledge to set up PollyBot?",
      answer: "Not at all! PollyBot is designed to be user-friendly. Simply invite the bot to your Discord server and use our simple slash commands to configure it. Our step-by-step guide makes setup easy for anyone."
    },
    {
      question: "Can I customize the AI's responses?",
      answer: "Yes! You can provide custom instructions, upload training files, and configure the AI's behavior to match your brand voice and specific knowledge base. The AI learns from your content to provide more accurate responses."
    },
    {
      question: "What happens if the AI can't answer a question?",
      answer: "PollyBot includes a human handoff feature. If the AI can't resolve an issue, users can request human help, which will notify your moderators to join the conversation and take over."
    },
    {
      question: "Is my data secure?",
      answer: "Absolutely. We take security seriously with role-based permissions, secure API key handling, and built-in rate limiting. Your conversations and data are protected with enterprise-level security measures."
    },
    {
      question: "Can I use PollyBot for commercial purposes?",
      answer: "Yes! PollyBot is perfect for businesses, SaaS applications, and commercial Discord servers. Our pricing plans are designed to scale with your business needs."
    },
    {
      question: "What's included in customer support?",
      answer: "All paid plans include email support. Professional and Enterprise plans get priority support, and Enterprise customers get dedicated support with faster response times."
    },
    {
      question: "Can I integrate PollyBot with other tools?",
      answer: "Yes! PollyBot supports integrations with Discord and various SaaS applications. Enterprise plans include custom integrations and API access for advanced workflows."
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-pink-600 to-violet-600 bg-clip-text text-transparent leading-relaxed">
            Frequently Asked Questions
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Got questions? We&apos;ve got answers. Find everything you need to know about PollyBot.ai
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border border-border rounded-lg px-4">
                <AccordionTrigger className="text-left hover:no-underline py-6">
                  <span className="font-semibold">{faq.question}</span>
                </AccordionTrigger>
                <AccordionContent className="pb-6 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;
