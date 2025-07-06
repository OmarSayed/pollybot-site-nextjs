'use client';

import React from 'react';
import { Button } from '@/components/ui/button';
import { usePathname, useRouter } from 'next/navigation';
import Image from 'next/image';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const pathname = usePathname();
  const router = useRouter();

  const footerLinks = {
    product: [
      { name: 'Features', href: '#features' },
      { name: 'Pricing', href: '#pricing' },
      { name: 'Help Documentation', href: '#help' },
      { name: 'Discord Integration', href: '#' },
    ],
    company: [
      { name: 'About Us', href: '#' },
      { name: 'Affiliates', href: '/affiliates' },
      { name: 'Privacy Policy', href: '/privacy-policy' },
      { name: 'Terms of Service', href: '/terms-of-service' },
      { name: 'Contact Support', href: '#' },
    ],
    resources: [
      { name: 'Getting Started', href: '#help' },
      { name: 'API Documentation', href: '#' },
      { name: 'Community', href: '#' },
      { name: 'Status', href: '#' },
    ],
  };

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      router.push(href);
      return;
    }

    if (pathname !== '/' && href.startsWith('#')) {
      router.push('/' + href);
      return;
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <footer className="bg-gradient-to-br from-gray-900 to-black text-white">
      <div className="container mx-auto px-4 py-16">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
          {/* Brand Section */}
          <div className="lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Image
                src="/Images/PollyBotLogo-Dark.png"
                width={100}
                height={100}
                alt="PollyBot.ai"
                className="h-10 w-auto"
              />
            </div>
            <p className="text-gray-300 leading-relaxed mb-6 max-w-md">
              Train and launch your AI sales and support representative for Discord servers & SaaS apps.
              Automate conversations, resolve support, and grow your community with intelligent AI.
            </p>
            <div className="flex justify-start">
              <Button
                className=" cursor-pointer bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white"
                onClick={() =>
                  window.open(
                    'https://discord.com/oauth2/authorize?client_id=1236026467213639821',
                    '_blank'
                  )
                  
                }
              >
                Try PollyBot Free
              </Button>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Product</h3>
            <ul className="space-y-3">
              {footerLinks.product.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources Links */}
          <div>
            <h3 className="font-semibold text-lg mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {link.name}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-gray-800">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400 text-sm">
              © {currentYear} PollyBot.ai. All rights reserved.
            </p>
            <div className="flex items-center space-x-6 mt-4 md:mt-0">
              <button
                onClick={() => scrollToSection('/privacy-policy')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Privacy Policy
              </button>
              <button
                onClick={() => scrollToSection('/terms-of-service')}
                className="text-gray-400 hover:text-white transition-colors text-sm"
              >
                Terms of Service
              </button>
              <a href="#" className="text-gray-400 hover:text-white transition-colors text-sm">
                Support
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
