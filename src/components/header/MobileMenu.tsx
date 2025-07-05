'use client'
import React from 'react';
import { NavigationItems } from './NavigationItems';

interface MobileMenuProps {
  isMenuOpen: boolean;
  isScrolled: boolean;
  isDarkMode: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const MobileMenu = ({ isMenuOpen, isScrolled, isDarkMode, setIsMenuOpen }: MobileMenuProps) => {
  if (!isMenuOpen) return null;

  return (
    <div className="lg:hidden mt-4 pb-4 bg-background/95 backdrop-blur-md rounded-lg shadow-lg">
      <NavigationItems 
        isScrolled={isScrolled} 
        isDarkMode={isDarkMode} 
        setIsMenuOpen={setIsMenuOpen}
        isMobile={true}
      />
    </div>
  );
};
