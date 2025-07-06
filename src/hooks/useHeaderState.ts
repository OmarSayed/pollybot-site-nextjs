'use client'
import { useState, useEffect } from 'react';

export const useHeaderState = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true); // Default to dark mode
  const [isScrolled, setIsScrolled] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Initialize dark mode on mount
  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  // Check if page is scrolled to apply background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Check for tablet size
  useEffect(() => {
    const handleResize = () => {
      setIsTablet(window.innerWidth < 1024 && window.innerWidth >= 768);
    };
    
    handleResize(); // Check on mount
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.classList.toggle('dark');
  };

  return {
    isMenuOpen,
    setIsMenuOpen,
    isDarkMode,
    isScrolled,
    isTablet,
    toggleDarkMode
  };
};
