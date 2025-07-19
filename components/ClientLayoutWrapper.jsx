'use client';

import { usePathname } from 'next/navigation';
import Navbar from './layout/Navbar';
import Footer from './layout/Footer';
import BannerSlider from './BannerSlider';

export default function ClientLayoutWrapper({ children }) {
  const pathname = usePathname();
  const isAdminRoute = pathname?.startsWith('/admin');

  if (isAdminRoute) {
    return <>{children}</>;
  }

  return (
    <>
      <BannerSlider />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
