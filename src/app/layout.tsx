import type { Metadata } from "next";
import { Manrope, Space_Grotesk } from "next/font/google";
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

export const metadata: Metadata = {
  title: "Koonj — Everyday made effortless",
  description:
    "Koonj brings your day together with organized tasks, trusted circles, and realtime updates in one beautiful mobile app.",
  metadataBase: new URL("https://koonj.ir"),
  openGraph: {
    title: "Koonj — Everyday made effortless",
    description:
      "Organize plans, people, and places with Koonj. Smart reminders, shared boards, and live updates built for the way you move.",
    url: "https://koonj.ir",
    siteName: "Koonj",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Koonj — Everyday made effortless",
    description:
      "Keep your day in sync with Koonj. Tasks, circles, and realtime updates in one app.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${display.variable} ${body.variable} antialiased bg-sand`}
      >
        {children}
      </body>
    </html>
  );
}
