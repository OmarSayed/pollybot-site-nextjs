'use client';

import React from 'react';
import {
  Home,
  HelpCircle,
  DollarSign,
  MessageCircle,
  Users,
} from 'lucide-react';
import { usePathname, useRouter } from 'next/navigation';

interface NavigationItemsProps {
  isScrolled: boolean;
  isDarkMode: boolean;
  setIsMenuOpen: (open: boolean) => void;
  isMobile?: boolean;
}

export const NavigationItems = ({
  isScrolled,
  isDarkMode,
  setIsMenuOpen,
  isMobile = false,
}: NavigationItemsProps) => {
  const pathname = usePathname();
  const router = useRouter();

  const navItems = [
    { name: 'Home', href: '#hero', icon: Home, showIconOnly: true },
    { name: 'Features', href: '#features', icon: MessageCircle },
    { name: 'Setup', href: '#help', icon: HelpCircle },
    { name: 'Pricing', href: '#pricing', icon: DollarSign },
    { name: 'Affiliates', href: '/affiliates', icon: Users },
  ];

  const scrollToSection = (href: string) => {
    if (href.startsWith('/')) {
      router.push(href);
      setIsMenuOpen(false);
      return;
    }

    if (pathname !== '/' && href.startsWith('#')) {
      router.push('/' + href);
      setIsMenuOpen(false);
      return;
    }

    if (href.startsWith('#')) {
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }

    setIsMenuOpen(false);
  };

  if (isMobile) {
    return (
      <nav className="flex flex-col space-y-2 p-4">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.name}
              onClick={() => scrollToSection(item.href)}
              className="flex cursor-pointer items-center space-x-3 text-foreground hover:text-primary transition-colors font-medium text-left text-base p-3 rounded hover:bg-accent"
            >
              <Icon className="h-5 w-5" />
              <span className='cursor-pointer'>{item.name}</span>
            </button>
          );
        })}
      </nav>
    );
  }

  return (
    <nav className="hidden lg:flex items-center space-x-1 lg:space-x-2">
      {navItems.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.name}
            onClick={() => scrollToSection(item.href)}
            className={`font-medium cursor-pointer px-3 lg:px-4 py-2 rounded-lg text-sm lg:text-base transition-all duration-200 flex items-center space-x-2 ${
              isScrolled
                ? 'text-foreground hover:text-primary hover:bg-accent'
                : isDarkMode
                ? 'text-white hover:text-white/80 hover:bg-white/10'
                : 'text-gray-900 hover:text-gray-700 hover:bg-black/10'
            }`}
          >
            {item.showIconOnly ? (
              <Icon className="h-5 w-5" />
            ) : (
              <>
                <span className='cursor-pointer'>{item.name}</span>
              </>
            )}
          </button>
        );
      })}
    </nav>
  );
};
