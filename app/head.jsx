// app/head.jsx

export default function Head() {
  return (
    <>
      <title>Hokage Creative Labs | Web Development | UI/UX | Brand Identity Design</title>

      {/* Primary Meta Tags */}
      <meta name="title" content="Hokage Creative Labs | Digital Creative Agency" />
      <meta
        name="description"
        content="Hokage Creative Labs blends creativity with cutting-edge technology to build powerful web experiences, stunning UI/UX, and distinctive brand identities. Let's build the future together."
      />
      <meta
        name="keywords"
        content="web development, UI/UX design, brand identity, creative agency, Hokage Creative Labs, digital innovation, frontend development, full-stack development, creative studio, branding, technology and design"
      />
      <meta name="author" content="Hokage Creative Labs" />
      <meta name="robots" content="index, follow" />
      <meta name="googlebot" content="index, follow" />

      {/* Mobile Responsiveness */}
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Canonical URL */}
      <link rel="canonical" href="https://hokagecreativelabs.com" />

      {/* Favicon */}
      <link rel="icon" href="/images/Icon-1.webp" />
      <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
      <link rel="manifest" href="/site.webmanifest" />

      {/* Open Graph / Facebook */}
      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://hokagecreativelabs.com" />
      <meta property="og:site_name" content="Hokage Creative Labs" />
      <meta property="og:title" content="Hokage Creative Labs | Digital Creative Agency" />
      <meta
        property="og:description"
        content="Driven by Creativity. Powered by Technology. Discover Hokage Creative Labs – where ideas become digital masterpieces."
      />
      <meta property="og:image" content="https://hokagecreativelabs.com/og-image.jpg" />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:image:alt" content="Hokage Creative Labs OG Banner" />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:url" content="https://hokagecreativelabs.com" />
      <meta name="twitter:title" content="Hokage Creative Labs | Digital Creative Agency" />
      <meta
        name="twitter:description"
        content="Hokage Creative Labs crafts seamless digital experiences using innovative tech and creative brilliance."
      />
      <meta name="twitter:image" content="https://hokagecreativelabs.com/og-image.jpg" />
      <meta name="twitter:creator" content="@hokagecreativelabs" />
      <meta name="twitter:site" content="@hokagecreativelabs" />

      {/* Preload critical assets */}
      <link rel="preload" as="image" href="/images/LOGO.webp" />
      <link rel="preload" as="style" href="/globals.css" />
      <link
        rel="preload"
        href="/fonts/VastagoGrotesk-Regular.otf"
        as="font"
        type="font/woff"
        crossOrigin="anonymous"
      />
    </>
  );
}
