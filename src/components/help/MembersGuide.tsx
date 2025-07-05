"use client";
import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MembersGuide = () => {
  return (
    <div className="space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            How to Use PollyBot
          </CardTitle>
          <CardDescription className="text-base md:text-lg">
            Simple steps for server members to get help
          </CardDescription>
        </CardHeader>
        <CardContent>
          <ol className="list-decimal list-inside space-y-3 text-base md:text-lg">
            <li>Go to the support channel set by the admin</li>
            <li>Click the ✅ &quot;Create Support Ticket&quot; button</li>
            <li>
              A private thread opens — chat directly with the AI assistant
            </li>
            <li>
              Ask your question naturally — the bot uses context and AI to
              respond
            </li>
            <li>Type &quot;Request Human Help&quot; if you want an admin to join</li>
          </ol>
        </CardContent>
      </Card>

      <Card>
        <CardHeader>
          <CardTitle className="text-xl md:text-2xl">
            What You Can Do in a Support Thread
          </CardTitle>
        </CardHeader>
        <CardContent>
          <ul className="list-disc list-inside space-y-2 text-base md:text-lg">
            <li>Chat with the AI like you would with a human</li>
            <li>Upload documents or files</li>
            <li>Ask for help with code</li>
            <li>Request a human moderator</li>
            <li>View past messages in the thread</li>
            <li>Close the thread when resolved</li>
          </ul>
        </CardContent>
      </Card>
    </div>
  );
};

export default MembersGuide;
