"use client"
import React from 'react';
import { cn } from '@/lib/utils';

interface CarouselIndicatorsProps {
  features: Array<{ indicatorColor: string }>;
  currentIndex: number;
  onIndicatorClick: (index: number) => void;
}

const CarouselIndicators: React.FC<CarouselIndicatorsProps> = ({
  features,
  currentIndex,
  onIndicatorClick
}) => {
  return (
    <div className="flex justify-center gap-2 mt-6">
      {features.map((feature, index) => (
        <button
          key={index}
          onClick={() => onIndicatorClick(index)}
          className={cn(
            "w-3 h-3 rounded-full transition-all duration-300 border-2 border-white/30",
            feature.indicatorColor,
            currentIndex === index 
              ? "scale-125 shadow-lg opacity-100" 
              : "scale-100 opacity-60 hover:opacity-80"
          )}
          aria-label={`Go to slide ${index + 1}`}
        />
      ))}
    </div>
  );
};

export default CarouselIndicators;
