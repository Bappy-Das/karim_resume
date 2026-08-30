import type { Metadata } from "next";
import { Plus_Jakarta_Sans, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const sansFont = Plus_Jakarta_Sans({
  variable: "--font-sans-main",
  subsets: ["latin"],
  display: "swap",
});

const monoFont = JetBrains_Mono({
  variable: "--font-mono-tech",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://fazlekarim.dev"),
  title: "Fazle Karim — IT & Data Analytics Professional",
  description: "Dedicated IT & Data Analytics Professional specializing in Business Intelligence, Power BI, SQL, Tableau, Predictive Analytics, and Machine Learning research.",
  keywords: [
    "Fazle Karim",
    "Pemu",
    "Data Analytics",
    "Business Intelligence Analyst",
    "Power BI",
    "SQL",
    "Tableau",
    "Python",
    "Predictive Modeling",
    "Machine Learning",
    "MBA Business Analytics",
  ],
  authors: [{ name: "Fazle Karim" }],
  openGraph: {
    title: "Fazle Karim — IT & Data Analytics Professional",
    description: "Business Intelligence, Predictive Analytics, Machine Learning & IT Infrastructure.",
    url: "https://fazlekarim.dev",
    siteName: "Fazle Karim Portfolio",
    images: [
      {
        url: "/images/profile.jpg",
        width: 1200,
        height: 630,
        alt: "Fazle Karim",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${sansFont.variable} ${monoFont.variable} dark scroll-smooth`}>
      <body className="min-h-screen bg-[#070a11] text-gray-100 antialiased selection:bg-blue-600 selection:text-white">
        {children}
      </body>
    </html>
  );
}
