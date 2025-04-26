// app/head.jsx
export default function Head() {
  return (
    <>
      <title>Hokage Creative Labs | Web Development | UI/UX/ Brand Identity Design </title>

      {/* Primary Meta Tags */}
      <meta name="title" content="Hokage Creative Labs | Digital Innovation Studio" />
      <meta name="description" content="Hokage Creative Labs blends creativity with cutting-edge technology to create stunning digital experiences. Let's build the future together." />

      {/* Mobile Responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Favicon */}
      <link rel="icon" href="/images/Icon-1.jpg" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hokagecreativelabs.com/" />
      <meta property="og:title" content="Hokage Creative Labs | Digital Innovation Studio" />
      <meta property="og:description" content="Driven by Creativity. Powered by Technology." />
      <meta property="og:image" content="https://hokagecreativelabs.com/og-image.jpg" />

      {/* Twitter */}
      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://hokagecreativelabs.com/" />
      <meta property="twitter:title" content="Hokage Creative Labs | Digital Innovation Studio" />
      <meta property="twitter:description" content="Driven by Creativity. Powered by Technology." />
      <meta property="twitter:image" content="https://hokagecreativelabs.com/og-image.jpg" />

      {/* Preload critical assets */}
      <link rel="preload" as="image" href="/images/LOGO.webp" />
      <link rel="preload" as="style" href="/globals.css" />

      {/* Robots */}
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />
    </>
  );
}
