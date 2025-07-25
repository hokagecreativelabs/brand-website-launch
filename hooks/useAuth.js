'use client';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { toast } from 'react-toastify';

export const useAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true);
  const [admin, setAdmin] = useState(null);
  const router = useRouter();

  const checkAuth = async () => {
    try {
      const token = localStorage.getItem('hokage_admin_token');
      
      if (!token) {
        setIsAuthenticated(false);
        setLoading(false);
        return false;
      }

      // Verify token with backend using your endpoint
      const response = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/api/auth/verify`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
      });

      if (response.ok) {
        const data = await response.json();
        setAdmin(data.admin);
        setIsAuthenticated(true);
        setLoading(false);
        return true;
      } else {
        // Token is invalid
        localStorage.removeItem('hokage_admin_token');
        setIsAuthenticated(false);
        setLoading(false);
        return false;
      }
    } catch (error) {
      console.error('Auth check failed:', error);
      localStorage.removeItem('hokage_admin_token');
      setIsAuthenticated(false);
      setLoading(false);
      return false;
    }
  };

  const logout = () => {
    localStorage.removeItem('hokage_admin_token');
    setIsAuthenticated(false);
    setAdmin(null);
    router.push('/admin/login');
    toast.success('Logged out successfully');
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return {
    isAuthenticated,
    loading,
    admin,
    checkAuth,
    logout,
  };
};