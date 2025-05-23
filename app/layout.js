// app/layout.js
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
import Loader from "@/components/ui/Loader";

export const metadata = {
  title: "Hokage Creative Labs",
  description: "Driven by Creativity. Powered by Technology.",
  keywords: [
    "web development",
    "UI/UX design",
    "brand identity",
    "creative agency",
    "Hokage Creative Labs",
    "digital innovation",
    "frontend development",
    "branding",
    "technology and design",
  ],
  metadataBase: new URL("https://hokagecreativelabs.com"),
  openGraph: {
    title: "Hokage Creative Labs",
    description: "Driven by Creativity. Powered by Technology.",
    url: "https://hokagecreativelabs.com/",
    type: "website",
    images: [
      {
        url: "/images/Icon-1.webp",
        width: 1200,
        height: 630,
        alt: "Hokage Creative Labs OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hokage Creative Labs",
    description: "Driven by Creativity. Powered by Technology.",
    site: "@hokagecreativelabs",
    creator: "@hokagecreativelabs",
    images: ["/images/Icon-1.webp"],
  },
  icons: {
    icon: "/images/Icon-1.webp",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  viewport: "width=device-width, initial-scale=1",
  robots: "index, follow",
  authors: [{ name: "Hokage Creative Labs" }],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Loader />
          {children}
          </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}
