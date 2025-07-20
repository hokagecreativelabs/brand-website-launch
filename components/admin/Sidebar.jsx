'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LayoutDashboard,
  Users,
  Settings,
  Briefcase,
  X,
  ChevronDown,
  ChevronUp,
} from 'lucide-react';
import clsx from 'clsx';
import { useState, useEffect } from 'react';

const links = [
  { href: '/admin/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/admin/dashboard/registrations', label: 'Registrations', icon: LayoutDashboard },
  { 
    label: 'Blog', 
    icon: Briefcase, 
    isDropdown: true, 
    subRoutes: [
      { href: '/admin/dashboard/blog/view', label: 'View Blogs' },
      { href: '/admin/dashboard/blog/add', label: 'Add Blog' },
    ]
  },
  { href: '/admin/dashboard/users', label: 'Users', icon: Users },
  { href: '/admin/dashboard/settings', label: 'Settings', icon: Settings },
];

export default function Sidebar({ isOpen, closeSidebar }) {
  const pathname = usePathname();
  const [openDropdown, setOpenDropdown] = useState(false);

  // Auto-open dropdown if current path matches any sub-route
  useEffect(() => {
    const blogRoutes = links.find(link => link.isDropdown)?.subRoutes || [];
    const isInBlogSection = blogRoutes.some(route => pathname === route.href);
    if (isInBlogSection) {
      setOpenDropdown(true);
    }
  }, [pathname]);

  // Close dropdown when sidebar closes on mobile
  useEffect(() => {
    if (!isOpen) {
      setOpenDropdown(false);
    }
  }, [isOpen]);

  const handleDropdownToggle = () => {
    setOpenDropdown(prev => !prev);
  };

  const isSubRouteActive = (subRoutes) => {
    return subRoutes.some(route => pathname === route.href);
  };

  return (
    <div
      className={clsx(
        'fixed inset-y-0 left-0 z-50 w-64 bg-white shadow-lg transform transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0',
        isOpen ? 'translate-x-0' : '-translate-x-full'
      )}
    >
      {/* Close Button (Mobile) */}
      <div className="flex items-center justify-between p-4 border-b lg:hidden">
        <button
          onClick={closeSidebar}
          className="p-1 rounded-md hover:bg-gray-100 transition-colors"
          aria-label="Close sidebar"
        >
          <X className="h-5 w-5" />
        </button>
      </div>

      {/* Navigation */}
      <nav className="p-4 space-y-2 overflow-y-auto h-full">
        {links.map(({ href, label, icon: Icon, isDropdown, subRoutes }) => {
          if (isDropdown) {
            const hasActiveSubRoute = isSubRouteActive(subRoutes);
            
            return (
              <div key={label} className="space-y-1">
                <button
                  onClick={handleDropdownToggle}
                  className={clsx(
                    'w-full flex items-center justify-between gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors',
                    hasActiveSubRoute 
                      ? 'bg-blue-50 text-blue-700 border border-blue-200' 
                      : 'text-gray-600 hover:bg-gray-100 hover:text-black'
                  )}
                  aria-expanded={openDropdown}
                  aria-controls={`${label.toLowerCase()}-submenu`}
                >
                  <div className="flex items-center gap-3">
                    <Icon className="h-5 w-5" />
                    {label}
                  </div>
                  {openDropdown ? (
                    <ChevronUp className="h-4 w-4" />
                  ) : (
                    <ChevronDown className="h-4 w-4" />
                  )}
                </button>

                {/* Dropdown Menu with Animation */}
                <div
                  id={`${label.toLowerCase()}-submenu`}
                  className={clsx(
                    'overflow-hidden transition-all duration-200 ease-in-out',
                    openDropdown ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                  )}
                >
                  <div className="ml-8 space-y-1 pt-1">
                    {subRoutes.map(({ href, label }) => {
                      const isActive = pathname === href;
                      return (
                        <Link
                          key={href}
                          href={href}
                          onClick={closeSidebar} // Close sidebar on mobile when clicking sub-route
                          className={clsx(
                            'block px-4 py-2 rounded-md text-sm font-medium transition-colors',
                            isActive
                              ? 'bg-blue-100 text-blue-700 border-l-4 border-blue-500'
                              : 'text-gray-500 hover:bg-gray-50 hover:text-gray-700'
                          )}
                        >
                          {label}
                        </Link>
                      );
                    })}
                  </div>
                </div>
              </div>
            );
          }

          const isActive = pathname === href;
          return (
            <Link
              key={href}
              href={href}
              onClick={closeSidebar} // Close sidebar on mobile
              className={clsx(
                'flex items-center gap-3 px-4 py-2 rounded-md text-sm font-medium transition-colors',
                isActive
                  ? 'bg-blue-50 text-blue-700 border border-blue-200'
                  : 'text-gray-600 hover:bg-gray-100 hover:text-black'
              )}
            >
              <Icon className="h-5 w-5" />
              {label}
            </Link>
          );
        })}
      </nav>
    </div>
  );
} 