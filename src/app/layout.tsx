import type { Metadata } from "next";
import { Poppins, Open_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://nutrinae.com"),
  verification: { google: "R6OI8nrejYrX0XmdRFUDivkOX0mfWLrMonCgRg4ZRaU" },
  title: {
    default: "NutriNae - Science-Based Nutritional Solutions for Animal Health",
    template: "%s | NutriNae",
  },
  description:
    "NUTRINAE specializes in cutting-edge, science-based nutritional solutions that elevate animal health and performance through natural, high-quality ingredients.",
  icons: {
    icon: "/icon.png",
    apple: "/apple-icon.png",
  },
  openGraph: {
    type: "website",
    siteName: "NutriNae",
    locale: "en_US",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${poppins.variable} ${openSans.variable} antialiased`}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
