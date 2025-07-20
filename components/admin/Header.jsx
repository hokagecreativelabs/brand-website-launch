'use client';

import { useState } from 'react';
import { FiMenu as Menu, FiX as X } from 'react-icons/fi';
import { FaUserCircle } from 'react-icons/fa';
import { LogOut, User } from 'lucide-react';
import { useAuth } from '@/hooks/useAuth';

const Header = ({ toggleSidebar }) => {
  const { user, logout } = useAuth();
  const [showDropdown, setShowDropdown] = useState(false);
  const now = new Date();
  const time = now.toLocaleTimeString('en-NG', { hour: '2-digit', minute: '2-digit' });
  const date = now.toLocaleDateString('en-NG', {
    weekday: 'long', year: 'numeric', month: 'short', day: 'numeric'
  });

  const greeting = () => {
    const hour = now.getHours();
    if (hour < 12) return "Good morning";
    if (hour < 18) return "Good afternoon";
    return "Good evening";
  };

  return (
    <header className="flex items-center justify-between px-6 py-4 bg-purple text-white border-b border-slate-200 sticky top-0 z-50">
      {/* Sidebar toggle */}
      <button onClick={toggleSidebar} className="lg:hidden text-purple">
        <Menu className="w-6 h-6" />
      </button>

      {/* Greeting */}
      <div className="hidden md:flex flex-col">
        <span className="text-sm font-nohemi text-slate-200">{date}</span>
        <h1 className="text-lg font-bold text-white">{greeting()}, {user?.name?.split(' ')[0]} 👋</h1>
      </div>

      {/* User Info */}
      <div className="relative flex items-center space-x-4">
        <button
          onClick={() => setShowDropdown(!showDropdown)}
          className="flex items-center space-x-2 px-3 py-2 rounded-xl bg-white text-purple text-lg hover:bg-opacity-90"
        >
          <User className="w-4 h-4" />
          <span className="hidden md:block">{user?.name}</span>
        </button>

        {showDropdown && (
          <div className="absolute right-0 mt-28 w-48 bg-white border rounded-xl shadow-lg">
            <button
              onClick={logout}
              className="w-full text-left px-4 py-3 hover:bg-slate-100 text-slate-700"
            >
              <LogOut className="w-4 h-4 inline mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;
