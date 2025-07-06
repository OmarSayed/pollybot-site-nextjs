'use client'
import React from 'react';
import { Button } from '@/components/ui/button';
import { Menu, Sun, Moon } from 'lucide-react';
import { useIsMobile } from '@/hooks/use-mobile';

interface HeaderActionsProps {
  isDarkMode: boolean;
  isScrolled: boolean;
  isTablet: boolean;
  toggleDarkMode: () => void;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const HeaderActions = ({ 
  isDarkMode, 
  isScrolled, 
  isTablet, 
  toggleDarkMode, 
  isMenuOpen, 
  setIsMenuOpen 
}: HeaderActionsProps) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex items-center space-x-1 md:space-x-3">
      {/* Dark Mode Toggle */}
      <button
        onClick={toggleDarkMode}
        className={`p-1.5 md:p-2 rounded-lg transition-all duration-200 ${
          isScrolled 
            ? 'text-foreground hover:bg-accent' 
            : isDarkMode
              ? 'text-white hover:bg-white/10'
              : 'text-gray-900 hover:bg-black/10'
        }`}
      >
        {isDarkMode ? (
          <Sun className={`${isMobile ? 'h-4 w-4' : 'h-4 w-4 md:h-5 md:w-5'}`} />
        ) : (
          <Moon className={`${isMobile ? 'h-4 w-4' : 'h-4 w-4 md:h-5 md:w-5'}`} />
        )}
      </button>

      <Button 
        onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1236026467213639821', '_blank')}
        className={` cursor-pointer bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white ${
          isMobile 
            ? 'text-xs px-3 py-2' 
            : 'text-sm md:text-base px-3 md:px-6 py-2 md:py-3'
        }`}
      >
        <span className={isMobile ? 'block' : 'hidden sm:inline cursor-pointer'}>
          {isMobile ? 'Try Free' : 'Try PollyBot Free'}
        </span>
        <span className={isMobile ? 'hidden' : 'sm:hidden cursor-pointer' }>Try Free</span>
      </Button>
      
      {/* Show hamburger menu on mobile and tablet when navigation would overlap */}
      {(isMobile || isTablet) && (
        <Button
          variant="ghost"
          size="sm"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`lg:hidden p-1.5 ${
            isScrolled 
              ? 'text-foreground hover:bg-accent' 
              : isDarkMode
                ? 'text-white hover:bg-white/10'
                : 'text-gray-900 hover:bg-black/10'
          }`}
        >
          <Menu className="h-4 w-4" />
        </Button>
      )}
    </div>
  );
};
