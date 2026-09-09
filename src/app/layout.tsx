import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

import { ThemeProvider } from "@/components/providers/ThemeProvider";

import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Feras Alhreibat | Mobile & Full-Stack Developer",

  description:
    "Portfolio of Feras Alhreibat, a Mobile & Full-Stack Developer specializing in Flutter, Dart, .NET, C#, SQL, Clean Architecture, BLoC, REST APIs, and enterprise software development.",

  keywords: [
    "Feras Alhreibat",
    "Mobile Developer",
    "Full Stack Developer",
    "Software Engineer",
    "Flutter Developer",
    "Dart Developer",
    ".NET Developer",
    "C# Developer",
    "Clean Architecture",
    "BLoC",
    "REST API",
    "SQL",
    "Amman",
    "Jordan",
  ],

  authors: [
    {
      name: "Feras Alhreibat",
    },
  ],

  creator: "Feras Alhreibat",

  applicationName: "Feras Alhreibat Portfolio",

  category: "technology",

  robots: {
    index: true,
    follow: true,
  },

  openGraph: {
    title: "Feras Alhreibat | Mobile & Full-Stack Developer",
    description:
      "Mobile & Full-Stack Developer building reliable, scalable, and maintainable software with Flutter, Dart, .NET, C#, SQL, and Clean Architecture.",
    type: "website",
    locale: "en_US",
    siteName: "Feras Alhreibat Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Feras Alhreibat | Mobile & Full-Stack Developer",
    description:
      "Mobile & Full-Stack Developer building reliable, scalable, and maintainable software with Flutter, Dart, .NET, C#, SQL, and Clean Architecture.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}