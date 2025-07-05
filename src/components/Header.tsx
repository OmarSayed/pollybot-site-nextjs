'use client';
import React from 'react';
import { useRouter } from 'next/navigation'; // ✅ Next.js routing
import { useIsMobile } from '@/hooks/use-mobile';
import { useHeaderState } from '@/hooks/useHeaderState';
import { NavigationItems } from './header/NavigationItems';
import { MobileMenu } from './header/MobileMenu';
import { HeaderActions } from './header/HeaderActions';

const Header = () => {
  const isMobile = useIsMobile();
  const {
    isMenuOpen,
    setIsMenuOpen,
    isDarkMode,
    isScrolled,
    isTablet,
    toggleDarkMode
  } = useHeaderState();
  const router = useRouter(); 

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-background/95 backdrop-blur-md shadow-lg'
          : 'bg-transparent'
      }`}
    >
      <div
        className={`container mx-auto px-4 transition-all duration-300 ${
          isScrolled
            ? isMobile
              ? 'py-3'
              : 'py-3 md:py-4 pt-6'
            : isMobile
              ? 'py-4'
              : 'py-4 md:py-6 pt-12'
        }`}
      >
        <div className="flex items-center justify-between">
          {/* Desktop Navigation */}
          {!isMobile && (
            <NavigationItems
              isScrolled={isScrolled}
              isDarkMode={isDarkMode}
              setIsMenuOpen={setIsMenuOpen}
            />
          )}

          {/* Logo */}
          <div
            className={`flex items-center space-x-2 ${
              isMobile
                ? 'justify-start'
                : 'absolute left-1/2 transform -translate-x-1/2'
            }`}
          >
            <button onClick={() => router.push('/')}>
              <img
                src={
                  isDarkMode
                    ? '/lovable-uploads/289d3bf4-d4c3-4eec-9211-e4f7289dcab8.png'
                    : '/lovable-uploads/8b3bbbd6-68a5-4e6e-83de-cdad668372cd.png'
                }
                alt="PollyBot.ai"
                className={`w-auto transition-all duration-300 ${
                  isMobile
                    ? 'h-8'
                    : isScrolled
                      ? 'h-10 md:h-12'
                      : 'h-12 md:h-16'
                }`}
              />
            </button>
          </div>

          <HeaderActions
            isDarkMode={isDarkMode}
            isScrolled={isScrolled}
            isTablet={isTablet}
            toggleDarkMode={toggleDarkMode}
            isMenuOpen={isMenuOpen}
            setIsMenuOpen={setIsMenuOpen}
          />
        </div>

        <MobileMenu
          isMenuOpen={isMenuOpen}
          isScrolled={isScrolled}
          isDarkMode={isDarkMode}
          setIsMenuOpen={setIsMenuOpen}
        />
      </div>
    </header>
  );
};

export default Header;
