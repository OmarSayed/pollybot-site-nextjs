"use client"
import React, { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from '@/components/ui/collapsible';
import {  ChevronDown, ChevronUp, Shield, DollarSign, Star } from 'lucide-react';

interface CheckoutDialogProps {
  isOpen: boolean;
  onClose: () => void;
  planName: string;
  monthlyPrice: string;
  yearlyPrice: string;
}

const CheckoutDialog = ({ isOpen, onClose, planName, monthlyPrice, yearlyPrice }: CheckoutDialogProps) => {
  const [billingCycle, setBillingCycle] = useState('yearly');
  const [discountCode, setDiscountCode] = useState('');
  const [planSectionOpen, setPlanSectionOpen] = useState(true);
  const [orderSummaryOpen, setOrderSummaryOpen] = useState(false);

  const currentPrice = billingCycle === 'yearly' ? yearlyPrice : monthlyPrice;
  const baseAmount = parseFloat(currentPrice.replace('$', ''));
  const tax = baseAmount * 0.085;
  const total = baseAmount + tax;

  const securityFeatures = [
    {
      icon: Shield,
      title: "Secure Payment",
      description: "SSL encrypted checkout"
    },
    {
      icon: DollarSign,
      title: "Money-Back Guarantee", 
      description: "30 days, no questions asked"
    },
    {
      icon: Star,
      title: "5-Star Rated",
      description: "Trusted by 50,000+ installations"
    }
  ];

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md h-screen sm:h-auto bg-gradient-to-br from-purple-600 to-purple-800 text-white border-none overflow-y-auto">
        <DialogHeader className="text-center sticky top-0 bg-gradient-to-br from-purple-600 to-purple-800 pb-4">
          <DialogTitle className="text-3xl font-bold text-white mb-2 shadow-lg">
            Complete Your Purchase
          </DialogTitle>
        </DialogHeader>

        <div className="space-y-4 pb-20 sm:pb-4">
          {/* Choose Your Plan Section */}
          <Collapsible open={planSectionOpen} onOpenChange={setPlanSectionOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-purple-700/30 rounded-lg border border-purple-400/30">
              <h3 className="font-semibold">Choose Your Plan</h3>
              {planSectionOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2 space-y-2">
              <div 
                className={`p-4 rounded-lg border-2 cursor-pointer ${
                  billingCycle === 'monthly' 
                    ? 'border-purple-400 bg-purple-700/20' 
                    : 'border-purple-600/50 bg-purple-700/10'
                }`}
                onClick={() => setBillingCycle('monthly')}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{planName} Monthly</span>
                  <span className="font-bold">{monthlyPrice}</span>
                </div>
              </div>
              <div 
                className={`p-4 rounded-lg border-2 cursor-pointer relative ${
                  billingCycle === 'yearly' 
                    ? 'border-yellow-400 bg-purple-700/20' 
                    : 'border-purple-600/50 bg-purple-700/10'
                }`}
                onClick={() => setBillingCycle('yearly')}
              >
                <div className="flex justify-between items-center">
                  <span className="font-medium">{planName} Yearly</span>
                  <div className="text-right">
                    <span className="font-bold">{yearlyPrice}</span>
                    <div className="text-sm text-purple-300 line-through">$1,200.00</div>
                  </div>
                </div>
                {billingCycle === 'yearly' && (
                  <Badge className="absolute -top-2 -right-2 bg-green-500 text-white text-xs">
                    Save $600!
                  </Badge>
                )}
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Order Summary Section */}
          <Collapsible open={orderSummaryOpen} onOpenChange={setOrderSummaryOpen}>
            <CollapsibleTrigger className="flex items-center justify-between w-full p-4 bg-purple-700/30 rounded-lg border border-purple-400/30">
              <h3 className="font-semibold">Order Summary</h3>
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold">${total.toFixed(2)}</span>
                {orderSummaryOpen ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
              </div>
            </CollapsibleTrigger>
            <CollapsibleContent className="mt-2">
              <div className="p-4 bg-purple-700/20 rounded-lg space-y-3">
                <div className="flex justify-between">
                  <span>{planName} OG Members Annual</span>
                  <span>${baseAmount.toFixed(2)}</span>
                </div>
                
                <div className="space-y-2">
                  <div className="flex items-center gap-2">
                    <span className="text-sm">% Discount Code (Optional)</span>
                  </div>
                  <div className="flex gap-2">
                    <Input
                      placeholder="Enter discount code"
                      value={discountCode}
                      onChange={(e) => setDiscountCode(e.target.value)}
                      className="bg-purple-800/50 border-purple-400/30 text-white placeholder:text-purple-300"
                    />
                    <Button 
                      variant="outline" 
                      className="bg-purple-700/50 border-purple-400/30 text-white hover:bg-purple-600"
                    >
                      Apply
                    </Button>
                  </div>
                </div>

                <div className="flex justify-between text-sm">
                  <span>Tax (8.5%)</span>
                  <span>${tax.toFixed(2)}</span>
                </div>

                <div className="border-t border-purple-400/30 pt-2">
                  <div className="flex justify-between font-bold text-lg">
                    <span>Total Due Today</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                  <div className="text-sm text-green-400">Total Due Today</div>
                </div>
              </div>
            </CollapsibleContent>
          </Collapsible>

          {/* Payment Methods */}
          <div className="space-y-3">
            <h3 className="font-semibold">Choose Payment Method</h3>
            
            <div className="grid grid-cols-2 gap-2">
              <div className="p-4 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <div className="w-8 h-5 bg-blue-600 rounded text-white text-xs flex items-center justify-center font-bold">
                  CARD
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <div className="w-8 h-5 bg-blue-400 rounded text-white text-xs flex items-center justify-center font-bold">
                  ATM
                </div>
              </div>
              <div className="p-4 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <div className="text-2xl">💰</div>
              </div>
              <div className="p-4 bg-white rounded-lg flex items-center justify-center cursor-pointer hover:bg-gray-50">
                <div className="text-2xl">🍎</div>
              </div>
            </div>
          </div>

          {/* Security Features - Side by Side */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {securityFeatures.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div key={index} className="flex flex-col items-center text-center p-4 bg-purple-700/20 rounded-lg border border-purple-400/20">
                  <div className="w-12 h-12 bg-gradient-to-r from-pink-500 to-violet-500 rounded-full flex items-center justify-center mb-3">
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <div className="font-semibold text-sm mb-1">{feature.title}</div>
                  <div className="text-xs text-purple-300">{feature.description}</div>
                </div>
              );
            })}
          </div>

          <p className="text-xs text-purple-300 text-center">
            By completing this purchase, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>

        {/* Sticky Bottom Button */}
        <div className="fixed bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-purple-800 to-transparent sm:static sm:bg-none sm:p-0">
          <Button 
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-4 text-lg"
            onClick={() => {
              console.log('Processing payment...');
              onClose();
            }}
          >
            Complete Payment - ${total.toFixed(2)}
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default CheckoutDialog;
