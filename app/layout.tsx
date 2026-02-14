import type { Metadata } from "next";
import { Cormorant_Garamond, Lato } from "next/font/google";
import "./globals.css";

/* ============================
   Fonts
============================ */

const cormorant_garamond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-display",
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  weight: ["300", "400", "700", "900"],
  variable: "--font-body",
  display: "swap",
});

/* ============================
   SEO Metadata
============================ */

export const metadata: Metadata = {
  metadataBase: new URL("https://serenovawellness.netlify.app"),

  title: {
    default: "Serenova Wellness",
    template: "%s | Serenova Wellness",
  },

  description:
    "Serenova Wellness is a modern spa and wellness sanctuary designed for restoration, balance, and renewal. We offer intentional treatments that support physical recovery, mental clarity, and sustained well-being.",

  keywords: [
    "spa and wellness center",
    "luxury spa",
    "modern wellness studio",
    "massage therapy",
    "holistic wellness",
    "stress relief spa",
    "relaxation and recovery",
    "premium spa experiences",
    "wellness sanctuary",
  ],

  openGraph: {
    title: "Serenova Wellness — Restore. Rebalance. Renew.",
    description:
      "A modern spa and wellness sanctuary for individuals seeking clarity, balance, and restoration. Thoughtfully designed experiences that support body, mind, and energy.",
    url: "https://serenovawellness.netlify.app",
    siteName: "Serenova Wellness",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Serenova Wellness Spa and Wellness Center",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Serenova Wellness",
    description:
      "Intentional wellness experiences designed to restore balance, calm the mind, and renew the body.",
    images: ["/og-image.jpg"],
  },

  icons: {
    icon: "/favicon.ico",
  },
};

/* ============================
   Root Layout
============================ */

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${cormorant_garamond.variable} ${lato.variable}`}
    >
      <body className="bg-white overflow-x-hidden font-body">
        {children}
      </body>
    </html>
  );
}
