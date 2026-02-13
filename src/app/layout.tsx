import type { Metadata } from "next";
import { Manrope, Space_Grotesk, Vazirmatn } from "next/font/google";
import "./globals.css";

const display = Space_Grotesk({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
});

const body = Manrope({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-body",
});

const persian = Vazirmatn({
  subsets: ["latin", "arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-persian",
});

export const metadata: Metadata = {
  title: "Koonj — Everyday made effortless",
  description:
    "Koonj keeps your plans, circles, and rituals aligned with bilingual reminders, guarded privacy, and calm visual cues.",
  applicationName: "Koonj",
  authors: [{ name: "Koonj Labs", url: "https://koonj.ir" }],
  keywords: [
    "Koonj",
    "koonj.ir",
    "کنج محیطی برای سرگرمی و تحرک و پیدا کردن اسرار",
    "Persian productivity",
    "shared circles",
    "Koonj Labs",
    "محیط کنج",
    "mobile companion",
  ],
  metadataBase: new URL("https://koonj.ir"),
  alternates: {
    canonical: "https://koonj.ir",
    languages: {
      "fa-IR": "https://koonj.ir/?lang=fa",
      "en-US": "https://koonj.ir/?lang=en",
    },
  },
  openGraph: {
    title: "Koonj — Everyday made effortless",
    description:
      "برنامه کنج محیطی برای تحرک بیشتر و سرگرمی",
    url: "https://koonj.ir",
    siteName: "Koonj",
    type: "website",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
  },
  twitter: {
    card: "summary_large_image",
    title: "Koonj — کنج محیطی دنج برای پیدا کردن اسرار شهر و جنگل و سرگرمی و تحرک",
    description:
      "Koonj keeps plans, people, and places synced with Persian + English reminders.",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fa" dir="rtl">
      <body
        className={`${display.variable} ${body.variable} ${persian.variable} antialiased bg-sand relative w-full h-full`}
      >
        {children}
      </body>
    </html>
  );
}
