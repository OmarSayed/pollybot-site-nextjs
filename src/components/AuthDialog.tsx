"use client"
import React from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { X } from 'lucide-react';

interface AuthDialogProps {
  isOpen: boolean;
  onClose: () => void;
  onAuthComplete: () => void;
  planName: string;
}

const AuthDialog = ({ isOpen, onClose, onAuthComplete, planName }: AuthDialogProps) => {
  const handleDiscordAuth = () => {
    // Simulate Discord authentication
    setTimeout(() => {
      onAuthComplete();
    }, 1000);
  };

  const handleEmailAuth = () => {
    // Simulate Email authentication
    setTimeout(() => {
      onAuthComplete();
    }, 1000);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md bg-gradient-to-br from-purple-600 to-purple-800 text-white border-none">
        <DialogHeader className="text-center">
          <button
            onClick={onClose}
            className="absolute right-4 top-4 text-white/70 hover:text-white"
          >
            <X className="h-4 w-4" />
          </button>
          <DialogTitle className="text-2xl font-bold mb-2">
            Activate Your Account
          </DialogTitle>
          <p className="text-purple-200">
            Upgrading to: <span className="text-yellow-400 font-semibold">{planName}</span>
          </p>
        </DialogHeader>

        <div className="space-y-4 mt-6">
          <div className="grid grid-cols-2 gap-3">
            <Button
              onClick={handleDiscordAuth}
              className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3"
            >
              Discord
            </Button>
            <Button
              onClick={handleEmailAuth}
              className="bg-purple-700/50 hover:bg-purple-700 text-white font-medium py-3 border border-purple-400/30"
              variant="outline"
            >
              Email
            </Button>
          </div>

          <div className="text-center py-6">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-br from-cyan-400 to-blue-500 rounded-lg flex items-center justify-center">
              <div className="w-8 h-8 bg-white/20 rounded transform rotate-45"></div>
            </div>
            <p className="text-purple-100 mb-6">
              Join our exclusive Discord community instantly! Connect with 50,000+ successful traders.
            </p>
            
            <Button
              onClick={handleDiscordAuth}
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3"
            >
              Continue with Discord
            </Button>
          </div>

          <p className="text-xs text-purple-300 text-center">
            By continuing, you agree to our Terms of Service and Privacy Policy
          </p>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default AuthDialog;
