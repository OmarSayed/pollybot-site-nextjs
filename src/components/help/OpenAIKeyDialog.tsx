"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Badge } from "@/components/ui/badge";
import {
  ExternalLink,
  HelpCircle,
  User,
  Key,
  CreditCard,
  Link2,
  AlertTriangle,
} from "lucide-react";

interface OpenAIKeyDialogProps {
  isOpen: boolean;
  onOpenChange: (open: boolean) => void;
}

const OpenAIKeyDialog = ({ isOpen, onOpenChange }: OpenAIKeyDialogProps) => {
  return (
    <Dialog open={isOpen} onOpenChange={onOpenChange}>
      <DialogTrigger asChild>
        <Button
          variant="outline"
          size="sm"
          className="bg-violet-50 hover:bg-violet-100 border-violet-200 text-violet-700 hover:text-violet-800"
        >
          <HelpCircle className="w-3 h-3 mr-1" />
          Learn more
        </Button>
      </DialogTrigger>
      <DialogContent className="max-w-4xl w-[95vw] h-[90vh] p-0">
        <DialogHeader className="p-6 pb-0">
          <DialogTitle className="text-xl md:text-2xl flex items-center gap-2">
            <Key className="w-6 h-6 text-blue-500" />
            How to Get Your OpenAI API Key
          </DialogTitle>
          <DialogDescription className="text-sm md:text-base">
            Follow these steps to create and configure your OpenAI API key for
            PollyBot
          </DialogDescription>
        </DialogHeader>
        <ScrollArea className="flex-1 px-6">
          <div className="space-y-6 pb-6">
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-blue-950/20 dark:to-indigo-950/20 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
              <h3 className="font-semibold text-lg flex items-center gap-2 text-blue-700 dark:text-blue-300 mb-3">
                <User className="w-5 h-5" />
                <Badge
                  variant="outline"
                  className="bg-blue-100 dark:bg-blue-900 text-blue-700 dark:text-blue-300"
                >
                  1
                </Badge>
                Create OpenAI Account
              </h3>
              <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 mb-3">
                If you don&quot;t already have an OpenAI account, sign up first:
              </p>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://auth.openai.com/create-account",
                    "_blank"
                  )
                }
                className="w-full sm:w-auto bg-blue-500 hover:bg-blue-600 text-white border-blue-500"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Create OpenAI Account
              </Button>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-950/20 dark:to-emerald-950/20 border border-green-200 dark:border-green-800 rounded-lg p-4">
              <h3 className="font-semibold text-lg flex items-center gap-2 text-green-700 dark:text-green-300 mb-3">
                <Key className="w-5 h-5" />
                <Badge
                  variant="outline"
                  className="bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300"
                >
                  2
                </Badge>
                Access API Keys Page
              </h3>
              <p className="text-sm md:text-base text-green-600 dark:text-green-400 mb-3">
                Go to the OpenAI platform and navigate to your API keys:
              </p>
              <Button
                variant="outline"
                onClick={() =>
                  window.open("https://platform.openai.com/api-keys", "_blank")
                }
                className="w-full sm:w-auto bg-green-500 hover:bg-green-600 text-white border-green-500"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                Open API Keys Page
              </Button>
            </div>

            <div className="bg-gradient-to-r from-purple-50 to-violet-50 dark:from-purple-950/20 dark:to-violet-950/20 border border-purple-200 dark:border-purple-800 rounded-lg p-4">
              <h3 className="font-semibold text-lg flex items-center gap-2 text-purple-700 dark:text-purple-300 mb-3">
                <Key className="w-5 h-5" />
                <Badge
                  variant="outline"
                  className="bg-purple-100 dark:bg-purple-900 text-purple-700 dark:text-purple-300"
                >
                  3
                </Badge>
                Generate New API Key
              </h3>
              <div className="space-y-3 text-sm md:text-base text-purple-600 dark:text-purple-400">
                <p>Click &quot;Create new secret key&quot; and fill in the details:</p>
                <div className="bg-white dark:bg-purple-900/30 rounded-md p-3 border border-purple-200 dark:border-purple-700">
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <strong>Name:</strong> PollyBot (or any descriptive name)
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <strong>Project:</strong> Your business or Discord server
                      name
                    </li>
                    <li className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                      <strong>Permissions:</strong> Leave as default (All)
                    </li>
                  </ul>
                </div>
                <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-md p-3 flex items-start gap-2">
                  <AlertTriangle className="w-5 h-5 text-amber-600 dark:text-amber-400 mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="text-amber-700 dark:text-amber-300">
                      Important:
                    </strong>
                    <span className="text-amber-600 dark:text-amber-400 ml-1">
                      Copy your API key immediately after creation - you won&quot;t
                      be able to see it again!
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950/20 dark:to-red-950/20 border border-orange-200 dark:border-orange-800 rounded-lg p-4">
              <h3 className="font-semibold text-lg flex items-center gap-2 text-orange-700 dark:text-orange-300 mb-3">
                <CreditCard className="w-5 h-5" />
                <Badge
                  variant="outline"
                  className="bg-orange-100 dark:bg-orange-900 text-orange-700 dark:text-orange-300"
                >
                  4
                </Badge>
                Add API Credits
              </h3>
              <p className="text-sm md:text-base text-orange-600 dark:text-orange-400 mb-3">
                You&quot;ll need to add credits to your OpenAI account to use the
                API. View current pricing and add credits:
              </p>
              <Button
                variant="outline"
                onClick={() =>
                  window.open(
                    "https://platform.openai.com/docs/pricing",
                    "_blank"
                  )
                }
                className="w-full sm:w-auto bg-orange-500 hover:bg-orange-600 text-white border-orange-500"
              >
                <ExternalLink className="w-4 h-4 mr-1" />
                View OpenAI API Pricing
              </Button>
            </div>

            <div className="bg-gradient-to-r from-teal-50 to-cyan-50 dark:from-teal-950/20 dark:to-cyan-950/20 border border-teal-200 dark:border-teal-800 rounded-lg p-4">
              <h3 className="font-semibold text-lg flex items-center gap-2 text-teal-700 dark:text-teal-300 mb-3">
                <Link2 className="w-5 h-5" />
                <Badge
                  variant="outline"
                  className="bg-teal-100 dark:bg-teal-900 text-teal-700 dark:text-teal-300"
                >
                  5
                </Badge>
                Use in Discord
              </h3>
              <p className="text-sm md:text-base text-teal-600 dark:text-teal-400 mb-3">
                Once you have your API key, use the command in your Discord
                server:
              </p>
              <div className="bg-gray-900 text-green-400 p-4 rounded-lg font-mono text-sm border border-teal-300">
                /config set-openai-key
              </div>
              <p className="text-xs text-teal-500 dark:text-teal-400 mt-2">
                Paste your API key when prompted. Keep your API key secure and
                never share it publicly.
              </p>
            </div>
          </div>
        </ScrollArea>
      </DialogContent>
    </Dialog>
  );
};

export default OpenAIKeyDialog;
