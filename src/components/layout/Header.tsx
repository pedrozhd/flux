import React, { useState, useEffect } from 'react';
import { Menu, X, LogOut, Sun, Moon } from 'lucide-react';
import logo from '../../assets/logo.png';
import { useAuth } from '../../hooks/useAuth';
import { useTheme } from '../../contexts/ThemeContext';

interface HeaderProps {
  currentPage: string;
  onNavigate: (page: string) => void;
}

export const Header: React.FC<HeaderProps> = ({ currentPage, onNavigate }) => {
  const { user, logout } = useAuth();
  const { theme, effectiveTheme, setTheme } = useTheme();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'Home', page: 'home' },
    { label: 'Sobre', page: 'about' },
    { label: 'FAQ', page: 'faq' },
    { label: 'Contato', page: 'contact' }
  ];

  const handleNavClick = (page: string) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-white dark:bg-gray-900 shadow-md backdrop-blur-sm'
          : 'bg-white/80 dark:bg-gray-900/80 backdrop-blur-sm'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">
        {/* Logo */}
        <div
          onClick={() => handleNavClick('home')}
          className="flex items-center gap-2 cursor-pointer group"
        >
          <img
            src={logo}
            alt="FLUX Logo"
            className="h-10 w-auto"
          />
        </div>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center gap-8">
          {navItems.map(item => (
            <button
              key={item.page}
              onClick={() => handleNavClick(item.page)}
              className={`font-semibold transition-colors ${
                currentPage === item.page
                  ? 'text-primary-600'
                  : 'text-gray-700 dark:text-gray-300 hover:text-primary-600'
              }`}
            >
              {item.label}
            </button>
          ))}

          {/* Theme Toggle */}
          <button
            onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
            className="p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Toggle theme"
            title={`Mudar para tema ${effectiveTheme === 'dark' ? 'claro' : 'escuro'}`}
          >
            {effectiveTheme === 'dark' ? (
              <Sun className="w-5 h-5 text-yellow-500" />
            ) : (
              <Moon className="w-5 h-5 text-gray-700" />
            )}
          </button>

          {/* Auth Buttons */}
          <div className="flex items-center gap-4 pl-4 border-l border-gray-200 dark:border-gray-700">
            {user ? (
              <>
                <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                  {user.name}
                </span>
                <button
                  onClick={() => {
                    logout();
                    handleNavClick('home');
                  }}
                  className="flex items-center gap-2 px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-semibold transition-colors"
                >
                  <LogOut className="w-4 h-4" />
                  Sair
                </button>
              </>
            ) : (
              <button
                onClick={() => handleNavClick('login')}
                className={`font-semibold transition-colors ${
                  currentPage === 'login'
                    ? 'text-primary-600'
                    : 'text-gray-700 hover:text-primary-600'
                }`}
              >
                Login
              </button>
            )}
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="md:hidden p-2 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg transition-colors"
          aria-label="Toggle menu"
        >
          {isMenuOpen ? (
            <X className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          ) : (
            <Menu className="w-6 h-6 text-gray-700 dark:text-gray-300" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <div className="md:hidden bg-white dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700 animate-slideIn">
          <div className="px-4 py-4 space-y-2">
            {navItems.map(item => (
              <button
                key={item.page}
                onClick={() => handleNavClick(item.page)}
                className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors ${
                  currentPage === item.page
                    ? 'bg-primary-100 text-primary-600'
                    : 'text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                {item.label}
              </button>
            ))}

            {/* Mobile Theme Toggle */}
            <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
              <button
                onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
                className="w-full flex items-center gap-3 px-4 py-2 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 rounded-lg font-semibold transition-colors"
              >
                {effectiveTheme === 'dark' ? (
                  <>
                    <Sun className="w-5 h-5 text-yellow-500" />
                    <span>Tema Claro</span>
                  </>
                ) : (
                  <>
                    <Moon className="w-5 h-5 text-gray-700" />
                    <span>Tema Escuro</span>
                  </>
                )}
              </button>
            </div>

            {/* Mobile Auth Buttons */}
            <div className="pt-4 border-t border-gray-200 space-y-2">
              {user ? (
                <>
                  <div className="px-4 py-2 text-sm font-semibold text-gray-700">
                    {user.name}
                  </div>
                  <button
                    onClick={() => {
                      logout();
                      handleNavClick('home');
                      setIsMenuOpen(false);
                    }}
                    className="block w-full text-left px-4 py-2 text-red-600 hover:bg-red-50 rounded-lg font-semibold transition-colors"
                  >
                    Sair
                  </button>
                </>
              ) : (
                <button
                  onClick={() => handleNavClick('login')}
                  className={`block w-full text-left px-4 py-2 rounded-lg font-semibold transition-colors ${
                    currentPage === 'login'
                      ? 'bg-primary-100 text-primary-600'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  Login
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
