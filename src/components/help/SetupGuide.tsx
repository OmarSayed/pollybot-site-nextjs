"use client"
import React, { useState } from 'react';
import { Card, CardContent, CardDescription,  CardTitle } from '@/components/ui/card';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ExternalLink, Zap, BookOpen } from 'lucide-react';
import OpenAIKeyDialog from './OpenAIKeyDialog';

const SetupGuide = () => {
  const [isOpenAIDialogOpen, setIsOpenAIDialogOpen] = useState(false);

  const adminCommands = [
    { 
      command: '/config show', 
      purpose: 'See current settings',
      essential: false
    },
    { 
      command: '/config set-openai-key', 
      purpose: 'Add your OpenAI API key',
      hasHelp: true,
      essential: true
    },
    { 
      command: '/config create-assistant', 
      purpose: 'Create an AI assistant',
      essential: true
    },
    { 
      command: '/config set-assistant <assistant_id>', 
      purpose: 'Manually set OpenAI Assistant ID (ignored if linked to Upgrade.Chat)',
      essential: true
    },
    { 
      command: '/config disconnect-assistant', 
      purpose: 'Manually disconnect OpenAI Assistant ID (ignored if linked to Upgrade.Chat)',
      essential: false
    },
    { 
      command: '/config disconnect-openai-key', 
      purpose: 'Remove the server-specific OpenAI API key',
      essential: false
    },
    { 
      command: '/config set-support-channel', 
      purpose: 'Set the support channel',
      essential: false
    },
    { 
      command: '/config show-support-channel', 
      purpose: 'Show the current support thread parent channel for this server',
      essential: false
    },
    { 
      command: '/config add-admin-role', 
      purpose: 'Allow role to manage AI threads',
      essential: false
    },
    { 
      command: '/config remove-admin-role <role>', 
      purpose: 'Remove a role from the admin roles list',
      essential: false
    },
    { 
      command: '/config create-support-button', 
      purpose: 'Create a button for members to start support threads',
      essential: false
    },
    { 
      command: '/config tickets set-open-limit <limit>', 
      purpose: 'Set the open support ticket limit for this server (1-100, admin only)',
      essential: false
    },
    { 
      command: '/config tickets show-open-limit', 
      purpose: 'Show the current open support ticket limit for this server',
      essential: false
    },
    { 
      command: '/config reinstall', 
      purpose: 'Reinstall the bot\'s commands (admin only)',
      essential: false
    },
    { 
      command: '/version', 
      purpose: 'Show the bot\'s version information',
      essential: false
    },
  ];

  const customizationCommands = [
    { 
      command: '/config instructions', 
      purpose: 'Add or edit assistant instructions',
      essential: true,
      hasInstructionHelp: true
    },
    { 
      command: '/config add-file', 
      purpose: 'Upload training/reference files',
      essential: true
    },
    { 
      command: '/config list-files', 
      purpose: 'View uploaded files',
      essential: false
    },
    { 
      command: '/config remove-file <file_id>', 
      purpose: 'Delete a file',
      essential: false
    },
    { 
      command: '/config list-assistants', 
      purpose: 'View all assistants',
      essential: false
    },
    { 
      command: '/config reset-assistant', 
      purpose: 'Reset to default configuration',
      essential: false
    },
  ];

  return (
    <Accordion type="single" defaultValue="step1" collapsible className="space-y-6">
      <AccordionItem value="step1">
        <Card>
          <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline">
            <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2 text-xl md:text-2xl text-left">
              <Badge className="w-fit">Step 1</Badge>
              <span>Invite PollyBot</span>
            </CardTitle>
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden">
            <CardContent className="pt-0 px-4 sm:px-6">
              <CardDescription className="text-base md:text-lg mb-6">
                Add PollyBot to your server with Administrator permissions
              </CardDescription>
              <div className="grid lg:grid-cols-2 gap-6 md:gap-8 items-center">
                <div>
                  <h4 className="font-semibold text-base md:text-lg mb-3">Required Bot Permissions:</h4>
                  <ul className="list-disc list-inside space-y-1 text-base md:text-lg text-muted-foreground">
                    <li>Manage Threads</li>
                    <li>Send Messages</li>
                    <li>Create Public Threads</li>
                    <li>Read Message History</li>
                    <li>View Channels</li>
                    <li>Manage Messages</li>
                    <li>Embed Links</li>
                    <li>Attach Files</li>
                  </ul>
                </div>
                <div className="flex justify-center lg:justify-end">
                  <Button 
                    size="lg"
                    className=" cursor-pointer bg-gradient-to-r from-pink-500 to-violet-500 hover:from-pink-600 hover:to-violet-600 text-white px-6 md:px-8 py-4 md:py-6 text-base md:text-lg font-semibold shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105 w-full sm:w-auto"
                    onClick={() => window.open('https://discord.com/oauth2/authorize?client_id=1236026467213639821', '_blank')}
                  >
                    Try PollyBot Now
                  </Button>
                </div>
              </div>
            </CardContent>
          </AccordionContent>
        </Card>
      </AccordionItem>

      <AccordionItem value="step2">
        <Card>
          <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline">
            <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2 text-xl md:text-2xl text-left">
              <Badge className="w-fit">Step 2</Badge>
              <span>Configure the Bot</span>
            </CardTitle>
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden">
            <CardContent className="pt-0 px-4 sm:px-6">
              <CardDescription className="text-base md:text-lg mb-6">
                Use these slash commands to set up your AI assistant
              </CardDescription>
              <div className="space-y-3">
                {adminCommands.map((cmd, index) => (
                  <div key={index} className={`flex flex-col lg:flex-row lg:items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg ${cmd.essential ? 'bg-green-50 dark:bg-green-950/30 border-2 border-green-300 dark:border-green-700' : 'bg-muted border border-border'}`}>
                    <code className="bg-background px-2 md:px-3 py-1 md:py-2 rounded text-sm md:text-base font-mono break-all">{cmd.command}</code>
                    <span className="text-base md:text-lg text-muted-foreground flex-1">{cmd.purpose}</span>
                    {cmd.hasHelp && (
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open('https://platform.openai.com/api-keys', '_blank')}
                          className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 hover:text-blue-800"
                        >
                          <ExternalLink className="w-3 h-3 mr-1" />
                          Get API Key
                        </Button>
                        <OpenAIKeyDialog 
                          isOpen={isOpenAIDialogOpen} 
                          onOpenChange={setIsOpenAIDialogOpen} 
                        />
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </AccordionContent>
        </Card>
      </AccordionItem>

      <AccordionItem value="step3">
        <Card>
          <AccordionTrigger className="px-4 sm:px-6 py-4 hover:no-underline">
            <CardTitle className="flex flex-col sm:flex-row sm:items-center gap-2 text-xl md:text-2xl text-left">
              <Badge className="w-fit">Step 3</Badge>
              <span>Train Your AI Agent</span>
            </CardTitle>
          </AccordionTrigger>
          <AccordionContent className="overflow-hidden">
            <CardContent className="pt-0 px-4 sm:px-6">
              <CardDescription className="text-base md:text-lg mb-6">
                Use these slash commands to train your AI agent with custom instructions, knowledge, and files to make it perfect for your specific use case
              </CardDescription>
              <div className="space-y-3">
                {customizationCommands.map((cmd, index) => (
                  <div key={index} className={`flex flex-col lg:flex-row lg:items-center gap-2 md:gap-3 p-3 md:p-4 rounded-lg ${cmd.essential ? 'bg-green-50 dark:bg-green-950/30 border-2 border-green-300 dark:border-green-700' : 'bg-muted border border-border'}`}>
                    <code className="bg-background px-2 md:px-3 py-1 md:py-2 rounded text-sm md:text-base font-mono break-all">{cmd.command}</code>
                    <span className="text-base md:text-lg text-muted-foreground flex-1">{cmd.purpose}</span>
                    {cmd.hasInstructionHelp && (
                      <div className="flex items-center gap-2">
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open('#', '_blank')}
                          className="bg-purple-50 hover:bg-purple-100 border-purple-200 text-purple-700 hover:text-purple-800"
                        >
                          <Zap className="w-3 h-3 mr-1" />
                          Generate
                        </Button>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => window.open('#', '_blank')}
                          className="bg-blue-50 hover:bg-blue-100 border-blue-200 text-blue-700 hover:text-blue-800"
                        >
                          <BookOpen className="w-3 h-3 mr-1" />
                          Learn More
                        </Button>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </CardContent>
          </AccordionContent>
        </Card>
      </AccordionItem>
    </Accordion>
  );
};

export default SetupGuide;
