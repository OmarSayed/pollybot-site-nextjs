'use client'
import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { useToast } from "@/components/ui/use-toast"
import { Copy, Check, FileText } from 'lucide-react';
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog';
import { ScrollArea } from '@/components/ui/scroll-area';

interface AffiliateCodeGeneratorProps {
  userId: string | undefined;
}

const AffiliateCodeGenerator: React.FC<AffiliateCodeGeneratorProps> = ({ userId }) => {
  const [affiliateCode, setAffiliateCode] = useState('');
  const [isCopied, setIsCopied] = useState(false);
  const { toast } = useToast()

  useEffect(() => {
    if (userId) {
      setAffiliateCode(`https://pollybot.ai/?via=${userId}`);
    }
  }, [userId]);

  const handleCopyClick = () => {
    navigator.clipboard.writeText(affiliateCode);
    setIsCopied(true);
    toast({
      title: "Copied!",
      description: "Affiliate link copied to clipboard.",
    })
    setTimeout(() => {
      setIsCopied(false);
    }, 2000);
  };

  return (
    <section id="getting-started" className="container py-12">
      <div className="grid gap-6 max-w-2xl mx-auto">
        <div className="text-center space-y-2">
          <h2 className="text-3xl font-bold">Create Your Unique Affiliate Tracking Code</h2>
          <p className="text-muted-foreground">
            Generate your personalized referral link and start earning 25% commission on every sale.
          </p>
        </div>

        <div className="space-y-4">
          <Label htmlFor="affiliateCode">Your Affiliate Link</Label>
          <div className="relative">
            <Input
              id="affiliateCode"
              className="bg-background border rounded-md px-4 py-2 pr-10 w-full"
              value={affiliateCode}
              readOnly
            />
            <Button
              variant="ghost"
              size="icon"
              className="absolute right-2 top-1/2 -translate-y-1/2 rounded-full"
              onClick={handleCopyClick}
              disabled={isCopied}
            >
              {isCopied ? <Check className="h-4 w-4" /> : <Copy className="h-4 w-4" />}
              <span className="sr-only">Copy to clipboard</span>
            </Button>
          </div>
          <p className="text-sm text-muted-foreground">
            Share this link with your audience and start earning!
          </p>
        </div>

        <div className="text-center pt-4">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" className="gap-2 cursor-pointer">
                <FileText className="h-4 w-4" />
                View Terms & Conditions
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[80vh]">
              <DialogHeader>
                <DialogTitle>PollyBot.ai Affiliate Program Terms and Conditions</DialogTitle>
                <DialogDescription>
                  Last Updated: Jan 1st 2025
                </DialogDescription>
              </DialogHeader>
              <ScrollArea className="h-[60vh] mt-4">
                <div className="prose prose-sm max-w-none dark:prose-invert pr-4">
                  <p className="text-foreground mb-4">Welcome to the PollyBot.ai Affiliate Program. By joining, you agree to abide by the following terms and conditions. Please read them carefully.</p>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">1. Commission Structure</h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>Affiliates earn a <strong>25% commission</strong> on all qualifying sales made through their unique referral links.</li>
                    <li>Commissions are calculated based on the net revenue (excluding taxes, discounts, refunds, and chargebacks).</li>
                  </ol>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">2. Payment Terms</h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>Commissions are paid on a <strong>monthly basis</strong>, beginning <strong>30 days after the end of the month</strong> in which the qualifying transaction occurred.</li>
                    <li>All payouts are made via your <strong>preferred payment method</strong>, which must be kept up to date in your affiliate dashboard.</li>
                    <li>A <strong>minimum payout threshold</strong> of $50 applies. Balances below this amount will roll over to the next month.</li>
                  </ol>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">3. Refunds, Chargebacks, and Cancellations</h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>Any sale that is refunded, canceled, or results in a chargeback will have its associated commission <strong>deducted from future payouts</strong>.</li>
                    <li>PollyBot.ai reserves the right to reverse or withhold commissions for transactions that are deemed fraudulent or violate these terms.</li>
                  </ol>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">4. Tracking and Attribution</h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>Sales are tracked using unique referral codes. A user must complete their purchase within <strong>30 days</strong> of clicking your referral link to be attributed to you.</li>
                    <li>If a customer clears cookies or uses a different device, tracking may not be maintained. PollyBot.ai is not responsible for lost tracking under such conditions.</li>
                    <li>If you have evidence of a referred sale that wasn&apos;t tracked, contact us with proof and we will review it at our sole discretion.</li>
                  </ol>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">5. Prohibited Activities</h2>
                  <p className="text-foreground mb-3">The following activities are strictly prohibited and will result in account termination and forfeiture of commissions:</p>
                  <ul className="list-disc list-inside space-y-2 text-foreground">
                    <li><strong>Self-referrals</strong>, including using your own link to purchase PollyBot.ai services.</li>
                    <li>Creation of <strong>fake accounts</strong> or engaging in <strong>fraudulent activity</strong>.</li>
                    <li>Use of <strong>spam</strong>, unsolicited email campaigns, or bulk messaging.</li>
                    <li><strong>Misleading or false advertising</strong>, including fake discounts or deceptive claims.</li>
                    <li>Use of <strong>paid advertising</strong>, including but not limited to Google Ads, Facebook Ads, or YouTube Ads using branded terms or misspelled variations, without express written permission.</li>
                    <li>Creating <strong>websites, domains, or content</strong> that impersonate, misrepresent, or confuse users into believing you are PollyBot.ai.</li>
                    <li>Promoting through <strong>discount, coupon, cashback, or deal websites</strong> without prior approval. Separate promotional partnerships may be available for such sites.</li>
                    <li>Representing PollyBot.ai in any way that violates our intellectual property, trademarks, or brand guidelines.</li>
                  </ul>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">6. Promotional Website Approval</h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>Affiliates wishing to build a website solely to promote PollyBot.ai must obtain <strong>prior written approval</strong> from our Affiliate Program Manager.</li>
                  </ol>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">7. Inactive Accounts</h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>Affiliate accounts that show <strong>no activity for 6 consecutive months</strong> may be terminated.</li>
                    <li>Any <strong>unpaid commissions below the minimum payout threshold</strong> at the time of termination will be forfeited.</li>
                  </ol>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">8. Termination and Violations</h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>Violation of any term in this agreement will result in immediate termination of your affiliate account.</li>
                    <li>Commissions earned through <strong>violations</strong> will not be owed or paid.</li>
                    <li>PollyBot.ai reserves the right to <strong>deny or withhold payment</strong> for any activity deemed suspicious, manipulative, or fraudulent.</li>
                  </ol>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">9. Program Changes and Termination</h2>
                  <ol className="list-decimal list-inside space-y-2 text-foreground">
                    <li>PollyBot.ai reserves the right to <strong>modify, suspend, or terminate</strong> the Affiliate Program at any time, with or without notice.</li>
                    <li>Notice of changes will be posted on the PollyBot.ai website and/or sent via email at least <strong>30 days prior</strong> to any material change.</li>
                  </ol>

                  <h2 className="text-lg font-semibold text-foreground mt-6 mb-3">10. Acceptance of Terms</h2>
                  <p className="text-foreground">By joining the PollyBot.ai Affiliate Program, you acknowledge that you have read, understood, and agreed to be bound by these terms and conditions.</p>
                </div>
              </ScrollArea>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default AffiliateCodeGenerator;
