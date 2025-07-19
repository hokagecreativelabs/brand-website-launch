'use client';
import { usePathname } from 'next/navigation';
import { useAuth } from '@/hooks/useAuth';
import Sidebar from '@/components/admin/Sidebar';
import Header from '@/components/admin/Header';
import ProtectedRoute from '../../ProtectedRoute';

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const isLoginPage = pathname === '/admin/login';
  const { isAuthenticated, loading } = useAuth();

  // For login page, show minimal layout
  if (isLoginPage) {
    return (
      <div className="min-h-screen bg-gray-50">
        {children}
      </div>
    );
  }

  // For dashboard pages, wrap with protection and show full admin layout
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <Header />
        <div className="flex">
          <Sidebar />
          <main className="flex-1 p-6">
            {children}
          </main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
