import React from 'react';
import { Github, Twitter, Linkedin } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const Footer = () => {
  const { isDarkMode } = useTheme();
  const currentYear = new Date().getFullYear();

  return (
    <footer className={`${
      isDarkMode ? 'bg-gray-800 text-gray-300' : 'bg-white text-gray-600'
    } py-8`}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} ExpenseTracker. All rights reserved.
            </p>
          </div>
          
          <div className="flex space-x-6">
            <a
              href="#"
              className="hover:text-indigo-500 transition-colors duration-200"
              aria-label="Github"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-indigo-500 transition-colors duration-200"
              aria-label="Twitter"
            >
              <Twitter className="w-5 h-5" />
            </a>
            <a
              href="#"
              className="hover:text-indigo-500 transition-colors duration-200"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;