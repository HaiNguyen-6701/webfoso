// app/layout.tsx
'use client'; // Đảm bảo đây là client-side component

import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import ScrollToTopButton from "./components/ScrollToTopButton";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const menuItems = [
  { label: "Về chúng tôi", showArrow: false },
  { label: "Giải pháp", showArrow: true },
  { label: "Tài nguyên", showArrow: true },
  { label: "Liên hệ", showArrow: false },
];

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header
          logoSrc="/images/logo.png"
          logoAlt="Logo"
          menuItems={menuItems}
        />
        {children}
      <ScrollToTopButton />
      </body>
    </html>
  );
}
