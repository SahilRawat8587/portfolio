// app/layout.tsx (🚫 no 'use client' here!)
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import ClientProviders from "./client-providers"; // new component

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Sahil's Portfolio",
  description: "Minimal Modern Portfolio website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ClientProviders>{children}</ClientProviders>
      </body>
    </html>
  );
}
