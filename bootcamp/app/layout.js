import Navbar from "@/components/layout/Navbar";
import "./globals.css";
import Footer from "@/components/layout/Footer";
import Head from "next/head";
import TransformSection from "@/components/TransformSection";
import { ToastContainer } from "react-toastify";

// app/layout.js
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next"
// import Loader from "@/components/ui/Loader";
export const metadata = {
  title: "Hokage Creative Labs Academy",
  description: "Level up your skills with expert-led training at Hokage Creative Labs Academy.",
  keywords: [
    "web development training",
    "frontend bootcamp",
    "UI/UX training",
    "tech academy",
    "Hokage Creative Labs Academy",
    "creative learning",
    "design and development bootcamp",
    "tech education",
    "frontend engineering",
    "creative coding",
    "FREE Web Development Bootcamp - August 2025",
  ],
  metadataBase: new URL("https://academy.hokagecreativelabs.com"),
  openGraph: {
    title: "Hokage Creative Labs Academy",
    description: "Level up your skills with expert-led training at Hokage Creative Labs Academy.",
    url: "https://academy.hokagecreativelabs.com/",
    type: "website",
    images: [
      {
        url: "/images/Icon-1.webp",
        width: 1200,
        height: 630,
        alt: "Hokage Creative Labs Academy OG Image",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Hokage Creative Labs Academy",
    description: "Level up your skills with expert-led training at Hokage Creative Labs Academy.",
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
          {/* <Loader />  */}
          {children}
          </main>
        <Footer />
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <Head>
          <link href="https://fonts.googleapis.com/css2?family=Caveat:wght@400;600&display=swap" rel="stylesheet" />
        </Head>
        <main className="flex-1">
          {/* <Loader />  */}
          {children}
          </main>
          <TransformSection />
          <ToastContainer />
        <Footer />
        {/* <SpeedInsights />
        <Analytics /> */}
      </body>
    </html>
  );
}
