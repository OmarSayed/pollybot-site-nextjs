"use client"
import React from 'react';
import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { Badge } from '@/components/ui/badge';

interface BillingToggleProps {
  billingCycle: string;
  setBillingCycle: (value: string) => void;
}

const BillingToggle = ({ billingCycle, setBillingCycle }: BillingToggleProps) => {
  return (
    <div className="flex items-center justify-center mb-8">
      <ToggleGroup 
        type="single" 
        value={billingCycle} 
        onValueChange={(value) => value && setBillingCycle(value)}
        className="bg-muted rounded-lg p-1 relative"
      >
        <ToggleGroupItem 
          value="monthly" 
          className="px-6 py-2 text-sm font-medium data-[state=on]:bg-background data-[state=on]:text-foreground"
        >
          Monthly
        </ToggleGroupItem>
        <ToggleGroupItem 
          value="yearly" 
          className="px-6 py-2 text-sm font-medium data-[state=on]:bg-primary data-[state=on]:text-primary-foreground"
        >
          Yearly
        </ToggleGroupItem>
        <Badge className="absolute -top-3 -right-8 bg-green-500 text-white text-xs whitespace-nowrap">
          Save 50%
        </Badge>
      </ToggleGroup>
    </div>
  );
};

export default BillingToggle;
