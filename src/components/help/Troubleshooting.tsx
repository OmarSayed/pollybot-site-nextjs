"use client"
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const Troubleshooting = () => {
  const troubleshooting = [
    {
      issue: "Bot isn't responding",
      solution: "Check permissions, OpenAI key, and that commands are in a server"
    },
    {
      issue: "Thread won't start",
      solution: "Make sure support channel is set and permissions are correct"
    },
    {
      issue: "AI isn't helpful",
      solution: "Review or update your /config instructions"
    },
    {
      issue: "File not working",
      solution: "Ensure file is uploaded via /config add-file"
    }
  ];

  return (
    <div className="space-y-4 md:space-y-6">
      {troubleshooting.map((item, index) => (
        <Card key={index}>
          <CardHeader>
            <CardTitle className="text-lg md:text-xl">{item.issue}</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-base md:text-lg text-muted-foreground">{item.solution}</p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
};

export default Troubleshooting;
