import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";

const bebasNeue = Bebas_Neue({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-bebas",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
  display: "swap",
});

const spaceMono = Space_Mono({
  weight: ["400", "700"],
  subsets: ["latin"],
  variable: "--font-space-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "HUMPS — Content Strategist & Project Manager",
  description:
    "Demoulder Humphrey Pimentel — Marketing Expert, Content Strategist, and Project Manager. Based in Rodriguez, Rizal, Philippines.",
  keywords: [
    "content strategist",
    "project manager",
    "marketing expert",
    "digital marketing",
    "QA engineer",
    "Philippines",
  ],
  openGraph: {
    title: "HUMPS — Content Strategist & Project Manager",
    description:
      "I build content systems that make brands impossible to ignore.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${bebasNeue.variable} ${dmSans.variable} ${spaceMono.variable}`}
    >
      <body>{children}</body>
    </html>
  );
}
