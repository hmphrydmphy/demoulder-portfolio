import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
});

export const metadata: Metadata = {
  title: "Demoulder Humphrey Pimentel — Marketing Expert & Project Manager",
  description:
    "BS Computer Engineering graduate with 4+ years in digital marketing, technical project management, QA, and e-commerce operations. Based in Rodriguez, Rizal, Philippines.",
  keywords: [
    "project manager",
    "marketing expert",
    "creative strategist",
    "QA engineer",
    "digital marketing",
    "e-commerce operations",
    "virtual assistant",
    "Philippines",
  ],
  openGraph: {
    title: "Demoulder Humphrey Pimentel — Marketing Expert & Project Manager",
    description:
      "4+ years spanning digital marketing, project management, QA, and e-commerce. Let's build something great.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body>{children}</body>
    </html>
  );
}
