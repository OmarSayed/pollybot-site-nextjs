import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
    locale: "en_US",
    siteName: "PollyBot",
    images: [
      {
        url: "/Images/imageOG.png",
        width: 1200,
        height: 630,
        alt: "Polly Bot Open Graph Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Polly Bot: AI Sales & Support for Discord & Web Apps",
    description:
      "Deploy Polly Bot, your AI sales and support agent, in minutes for Discord servers and web apps. Automate conversations, resolve tickets, boost sales, and grow your community with an intelligent AI chatbot that learns your business.",
    images: [
      {
        url: "/Images/imageX.png",
        alt: "Polly Bot Twitter Card Image",
      },
    ],
  },
  icons: {
    icon: "/icons/favicon.ico",
    apple: "/icons/apple-icon.png",
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
