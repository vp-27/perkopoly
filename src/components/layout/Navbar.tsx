
import React, { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, LogIn, User, Settings } from 'lucide-react';
import { Button } from '@/components/ui/button';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const [isAuthenticated, setIsAuthenticated] = useState(false); // This would normally come from your auth context

  // Check if the current path matches the link path
  const isActive = (path: string) => {
    return location.pathname === path;
  };

  // Handle scroll event to change navbar appearance
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Mock function to toggle auth state (for demo purposes)
  const toggleAuth = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'py-2 frosted-glass' : 'py-4 bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link 
            to="/" 
            className="text-xl font-bold tracking-tight flex items-center"
          >
            <span className="text-primary mr-1">Perk</span>
            <span>Pal</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-1">
            <Link to="/" className={`nav-link ${isActive('/') ? 'nav-link-active' : ''}`}>
              Home
            </Link>
            <Link to="/dashboard" className={`nav-link ${isActive('/dashboard') ? 'nav-link-active' : ''}`}>
              Dashboard
            </Link>
            <Link to="/accounts" className={`nav-link ${isActive('/accounts') ? 'nav-link-active' : ''}`}>
              Accounts
            </Link>
            <Link to="/settings" className={`nav-link ${isActive('/settings') ? 'nav-link-active' : ''}`}>
              Settings
            </Link>
          </div>

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <Link to="/settings">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <Settings className="w-4 h-4 mr-2" />
                    <span>Settings</span>
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button variant="default" size="sm" className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>Dashboard</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/dashboard">
                  <Button 
                    variant="outline" 
                    size="sm" 
                    onClick={toggleAuth} // For demo purposes
                    className="flex items-center"
                  >
                    <LogIn className="w-4 h-4 mr-2" />
                    <span>Sign In</span>
                  </Button>
                </Link>
                <Link to="/dashboard">
                  <Button 
                    variant="default" 
                    size="sm" 
                    onClick={toggleAuth} // For demo purposes
                  >
                    Get Started
                  </Button>
                </Link>
              </div>
            )}
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-foreground p-2 rounded-md"
              aria-expanded={isMobileMenuOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden frosted-glass animate-fade-in">
          <div className="px-2 pt-2 pb-3 space-y-1">
            <Link
              to="/"
              className={`block px-3 py-2 rounded-md ${
                isActive('/') ? 'nav-link-active' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Home
            </Link>
            <Link
              to="/dashboard"
              className={`block px-3 py-2 rounded-md ${
                isActive('/dashboard') ? 'nav-link-active' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Dashboard
            </Link>
            <Link
              to="/accounts"
              className={`block px-3 py-2 rounded-md ${
                isActive('/accounts') ? 'nav-link-active' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Accounts
            </Link>
            <Link
              to="/settings"
              className={`block px-3 py-2 rounded-md ${
                isActive('/settings') ? 'nav-link-active' : ''
              }`}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Settings
            </Link>
            <div className="pt-4 pb-3 border-t border-gray-200 dark:border-gray-700">
              {isAuthenticated ? (
                <div className="space-y-2">
                  <Link
                    to="/settings"
                    className="block px-3 py-2 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <Settings className="w-4 h-4 mr-2" />
                      <span>Settings</span>
                    </Button>
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="default" size="sm" className="w-full justify-start">
                      <User className="w-4 h-4 mr-2" />
                      <span>Dashboard</span>
                    </Button>
                  </Link>
                </div>
              ) : (
                <div className="space-y-2">
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-md"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      toggleAuth(); // For demo purposes
                    }}
                  >
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <LogIn className="w-4 h-4 mr-2" />
                      <span>Sign In</span>
                    </Button>
                  </Link>
                  <Link
                    to="/dashboard"
                    className="block px-3 py-2 rounded-md"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      toggleAuth(); // For demo purposes
                    }}
                  >
                    <Button variant="default" size="sm" className="w-full">
                      Get Started
                    </Button>
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
