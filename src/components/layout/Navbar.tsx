
import React, { useEffect, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { Menu, X, LogIn, User, Settings, LogOut } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/hooks/use-toast';

export const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const { toast } = useToast();
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const isHomePage = location.pathname === '/';

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

  // Check authentication status
  useEffect(() => {
    const checkAuth = () => {
      const userData = localStorage.getItem('perkpal_user');
      setIsAuthenticated(!!userData);
    };
    
    checkAuth();
    
    // Set up event listener for storage changes (for multi-tab support)
    window.addEventListener('storage', checkAuth);
    
    return () => {
      window.removeEventListener('storage', checkAuth);
    };
  }, [location.pathname]);

  // Handle sign out
  const handleSignOut = () => {
    localStorage.removeItem('perkpal_user');
    setIsAuthenticated(false);
    toast({
      title: "Signed out",
      description: "You have been successfully signed out.",
    });
    navigate('/');
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

          {/* Desktop Navigation - Only show on non-home pages when authenticated */}
          {!isHomePage && isAuthenticated && (
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
          )}

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
                <Button variant="outline" size="sm" className="flex items-center" onClick={handleSignOut}>
                  <LogOut className="w-4 h-4 mr-2" />
                  <span>Sign Out</span>
                </Button>
                <Link to="/dashboard">
                  <Button variant="default" size="sm" className="flex items-center">
                    <User className="w-4 h-4 mr-2" />
                    <span>Dashboard</span>
                  </Button>
                </Link>
              </div>
            ) : (
              <div className="flex items-center space-x-4">
                <Link to="/signin">
                  <Button variant="outline" size="sm" className="flex items-center">
                    <LogIn className="w-4 h-4 mr-2" />
                    <span>Sign In</span>
                  </Button>
                </Link>
                <Link to="/signin">
                  <Button variant="default" size="sm">
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
            {/* Only show these links on non-home pages or when authenticated */}
            {(!isHomePage || isAuthenticated) && (
              <>
                <Link
                  to="/"
                  className={`block px-3 py-2 rounded-md ${
                    isActive('/') ? 'nav-link-active' : ''
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Home
                </Link>
                {isAuthenticated && (
                  <>
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
                  </>
                )}
              </>
            )}
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
                  <div
                    className="block px-3 py-2 rounded-md"
                    onClick={() => {
                      setIsMobileMenuOpen(false);
                      handleSignOut();
                    }}
                  >
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <LogOut className="w-4 h-4 mr-2" />
                      <span>Sign Out</span>
                    </Button>
                  </div>
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
                    to="/signin"
                    className="block px-3 py-2 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
                  >
                    <Button variant="outline" size="sm" className="w-full justify-start">
                      <LogIn className="w-4 h-4 mr-2" />
                      <span>Sign In</span>
                    </Button>
                  </Link>
                  <Link
                    to="/signin"
                    className="block px-3 py-2 rounded-md"
                    onClick={() => setIsMobileMenuOpen(false)}
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
