import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Moon, Sun, BarChart3, UserCircle } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';
import { useAuth } from '../context/AuthContext';

const Navbar = () => {
  const { isDarkMode, toggleTheme } = useTheme();
  const { isAuthenticated, logout } = useAuth();
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { path: '/', label: 'Dashboard' },
    { path: '/add', label: 'Add Expense' },
    { path: '/about', label: 'About' },
    { path: '/settings', label: 'Settings' },
  ];

  return (
    <div className='colp'>
    <nav className={`${
      isDarkMode ? 'bg-gray-800 text-white' : 'bg-white text-gray-900'
    } shadow-lg`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex items-center space-x-2">
            <BarChart3 className="w-8 h-8 text-green-500" />
            <span className="text-xl font-bold">SpendSmart</span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map(({ path, label }) => (
              <Link
                key={path}
                to={path}
                className={`${
                  isActive(path)
                    ? 'text-indigo-500 font-semibold'
                    : 'hover:text-indigo-400'
                } transition-colors duration-200`}
              >
                {label}
              </Link>
            ))}
          </div>

          <div className="flex items-center space-x-4">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDarkMode ? (
                <Sun className="w-5 h-5" />
              ) : (
                <Moon className="w-5 h-5" />
              )}
            </button>
            
            {isAuthenticated ? (
              <button
                onClick={logout}
                className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200"
              >
                <UserCircle className="w-5 h-5" />
                <span>Logout</span>
              </button>
            ) : (
              <Link
                to="/login"
                className="flex items-center space-x-1 px-4 py-2 rounded-lg bg-indigo-500 text-white hover:bg-indigo-600 transition-colors duration-200"
              >
                <UserCircle className="w-5 h-5" />
                <span>Login</span>
              </Link>
            )}
          </div>
        </div>
      </div>
    </nav>
    </div>
  );
  
};

export default Navbar;