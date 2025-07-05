import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import { ClientProviders } from "@/components/ClientProviders"; // ✅ new import

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "PollyBot: AI Sales & Support Agent for Discord & Web Apps",
  description:
    "Deploy Polly Bot, your AI sales and support agent, in minutes for Discord servers and web apps. Automate conversations, resolve tickets, boost sales, and grow your community with an intelligent AI chatbot that learns your business.",

  keywords:
    "Polly Bot, AI agent, Discord bot, AI chatbot, sales automation, customer support AI, AI for business, AI for Discord, web app AI, automate conversations, support tickets, boost sales, community growth, AI assistant, AI customer service, business chatbot",
  openGraph: {
    title: "Polly Bot: AI Sales & Support Agent for Discord & Web Apps",
    description:
      "Deploy Polly Bot, your AI sales and support agent, in minutes for Discord servers and web apps. Automate conversations, resolve tickets, boost sales, and grow your community with an intelligent AI chatbot that learns your business.",
    type: "website",
    url: "https://pollybot.ai",
    images: "https://pollybot.ai/og-image.png",
    locale: "en_US",
  },
  twitter: {
    title: "Polly Bot: AI Sales & Support for Discord & Web Apps",
    description:
      "Deploy Polly Bot, your AI sales and support agent, in minutes for Discord servers and web apps. Automate conversations, resolve tickets, boost sales, and grow your community with an intelligent AI chatbot that learns your business.",
    images: "https://pollybot.ai/twitter-image.png",
    card: "summary_large_image",
  },
  icons: {
    icon: "/favicon.ico",
    apple: "/apple-icon.png",
  },
  
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <meta charSet="UTF-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="canonical" href="https://pollybot.ai" />
        {/* Meta tags are automatically injected based on the metadata */}
      </head>
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
