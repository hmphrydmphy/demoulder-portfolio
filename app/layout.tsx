import type { Metadata } from "next";
import { Bebas_Neue, DM_Sans, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollReveal from "@/components/ScrollReveal";

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
  // %s is replaced by each page's own title via the template
  title: {
    default: "Humps — Technical Project Manager & QA Engineer",
    template: "%s | Humps",
  },
  description:
    "Demoulder Humphrey Pimentel (Humps) — Remote Project Manager and QA Engineer helping founders, agencies, and growing teams build better systems, improve operations, and deliver with consistency.",
  keywords: [
    "Humps",
    "Demoulder Humphrey Pimentel",
    "Demoulder Humphrey",
    "Project Manager Philippines",
    "Remote Project Manager Philippines",
    "Technical Project Manager",
    "QA Engineer Philippines",
    "SOP Specialist",
    "Workflow Documentation",
    "Operations Support",
    "Project Management System Setup",
    "Remote Project Manager",
    "Workflow and SOP Specialist",
  ],
  authors: [{ name: "Demoulder Humphrey Pimentel" }],
  creator: "Demoulder Humphrey Pimentel",
  // metadataBase is the root URL used to resolve relative Open Graph image paths.
  // Update this to your real domain before deploying.
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL ?? "https://humphreypimentel.com"
  ),
  openGraph: {
    type: "website",
    locale: "en_US",
    title: "Humps — Technical Project Manager & QA Engineer",
    description:
      "I help founders, agencies, and growing teams build better systems, manage projects, and deliver with confidence.",
    siteName: "Humps — Demoulder Humphrey Pimentel",
  },
  twitter: {
    card: "summary_large_image",
    title: "Humps — Technical Project Manager & QA Engineer",
    description:
      "Remote Project Manager and QA Engineer helping teams build better systems and deliver better outcomes.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
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
      <body suppressHydrationWarning>
        <Navbar />
        <ScrollReveal />
        {children}
      </body>
    </html>
  );
}
