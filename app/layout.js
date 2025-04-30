// app/layout.jsx
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Loader from "@/components/ui/Loader";
// import ClientScripts from "@/components/layout/ClientScripts";
import "./globals.css";
import { SpeedInsights } from "@vercel/speed-insights/next"


export const metadata = {
  title: "Hokage Creative Labs",
  description: "Driven by Creativity. Powered by Technology.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        {/* Optional: Add preconnect for Tawk.to to improve performance */}
        <link rel="preconnect" href="https://embed.tawk.to" />
      </head>
      <body className="min-h-screen flex flex-col">
        <Navbar />
        <Loader />
        <main className="flex-1">{children}</main>
        <Footer />
        <SpeedInsights />
      </body>
    </html>
  );
}