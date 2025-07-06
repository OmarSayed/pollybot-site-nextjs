"use client"
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

const WebIntegration = () => {
  const webIntegrationCommands = [
    { command: '/upgrade-chat link', purpose: 'Link to Upgrade.Chat' },
    { command: '/upgrade-chat status', purpose: 'Check integration status' },
    { command: '/upgrade-chat unlink', purpose: 'Remove integration' },
  ];

  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">Web Integration (Optional)</CardTitle>
          <CardDescription className="text-base md:text-lg">
            Connect PollyBot with external web services for enhanced functionality
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {webIntegrationCommands.map((cmd, index) => (
              <div key={index} className="flex flex-col lg:flex-row lg:items-center gap-2 md:gap-3 p-3 md:p-4 bg-muted rounded-lg">
                <code className="bg-background px-2 md:px-3 py-1 md:py-2 rounded text-sm md:text-base font-mono break-all">{cmd.command}</code>
                <span className="text-base md:text-lg text-muted-foreground">{cmd.purpose}</span>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default WebIntegration;
