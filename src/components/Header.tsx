import React from 'react';
import { MapPin, Phone, Mail, User, Menu, X } from 'lucide-react';
import { Button } from './ui/button';

const Header = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);

  const navigationItems = [
    { name: 'Homestays', active: true, comingSoon: false },
    { name: 'Hotels', active: false, comingSoon: true },
    { name: 'Flights', active: false, comingSoon: true },
    { name: 'Cars', active: false, comingSoon: true },
    { name: 'Packages', active: false, comingSoon: true },
  ];

  return (
    <header className="bg-white shadow-lg border-b border-gray-100">
      {/* Top Bar */}
      <div className="bg-gradient-to-r from-yeti-blue to-blue-600 text-white py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center text-sm">
          <div className="flex items-center space-x-6">
            <div className="flex items-center space-x-2">
              <Phone className="w-4 h-4" />
              <span>+977-1-4567890</span>
            </div>
            <div className="flex items-center space-x-2">
              <Mail className="w-4 h-4" />
              <span>info@yetitrips.com</span>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="text-white hover:text-gray-200 hover:bg-white/10">
              <User className="w-4 h-4 mr-2" />
              Sign In
            </Button>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="max-w-7xl mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center">
              <div className="text-3xl font-bold">
                <span className="bg-gradient-to-r from-yeti-blue to-blue-500 bg-clip-text text-transparent">
                  Yeti
                </span>
                <span className="bg-gradient-to-r from-nepal-red to-blue-600 bg-clip-text text-transparent">
                  Trips
                </span>
              </div>
              <div className="ml-2 text-2xl">🏔️</div>
            </div>
            <div className="hidden md:block h-8 w-px bg-gray-300"></div>
            <div className="hidden md:block">
              <p className="text-sm text-gray-600 font-medium">Discover Nepal</p>
              <p className="text-xs text-gray-500">Authentic Homestay Experiences</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative group">
                <button
                  className={`px-6 py-3 rounded-lg font-medium transition-all duration-200 ${
                    item.active
                      ? 'bg-gradient-to-r from-yeti-blue to-blue-600 text-white shadow-lg transform scale-105'
                      : item.comingSoon
                      ? 'text-gray-400 cursor-not-allowed opacity-60'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  disabled={item.comingSoon}
                >
                  <div className="flex items-center space-x-2">
                    <span>{item.name}</span>
                    {item.active && (
                      <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                    )}
                  </div>
                  {item.active && (
                    <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-nepal-red to-blue-600 rounded-full"></div>
                  )}
                </button>
                {item.comingSoon && (
                  <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 px-3 py-1 bg-gray-800 text-white text-xs rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-200 whitespace-nowrap z-10">
                    Coming Soon
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-gray-800 rotate-45"></div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="lg:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className="w-6 h-6 text-gray-700" />
            ) : (
              <Menu className="w-6 h-6 text-gray-700" />
            )}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden mt-4 pb-4 border-t border-gray-200">
            <nav className="flex flex-col space-y-2 pt-4">
              {navigationItems.map((item) => (
                <button
                  key={item.name}
                  className={`flex items-center justify-between px-4 py-3 rounded-lg font-medium transition-all duration-200 ${
                    item.active
                      ? 'bg-gradient-to-r from-yeti-blue to-blue-600 text-white'
                      : item.comingSoon
                      ? 'text-gray-400 cursor-not-allowed opacity-60'
                      : 'text-gray-700 hover:bg-gray-100'
                  }`}
                  disabled={item.comingSoon}
                >
                  <span>{item.name}</span>
                  {item.comingSoon && (
                    <span className="text-xs bg-gray-200 text-gray-600 px-2 py-1 rounded-full">
                      Coming Soon
                    </span>
                  )}
                  {item.active && (
                    <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
                  )}
                </button>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;