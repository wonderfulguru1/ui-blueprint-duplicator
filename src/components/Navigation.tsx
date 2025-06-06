import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '@/assets/genesia-logo.png';

interface NavigationProps {
  whiteBg?: boolean;
}

export const Navigation: React.FC<NavigationProps> = ({ whiteBg }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <nav className={`${isHomePage ? 'bg-transparent' : 'bg-white shadow-md'} absolute top-0 left-0 right-0 z-[9999]`}>
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <Link to="/" className="flex flex-col items-start gap-1 select-none" style={{ minWidth: 80 }}>
          <img src={logo} alt="Genesia Properties Logo" className="h-24 w-auto" />
        </Link>
        
        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center gap-4">
          <a 
            href="tel:+2347038122917" 
            className="flex items-center gap-2 px-3 py-2 bg-[#D2A136] rounded-full hover:bg-[#B8912E] transition-colors"
            aria-label="Call us"
          >
            <svg 
              className="w-5 h-5 text-white" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth="2" 
                d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" 
              />
            </svg>
            <span className="text-white text-sm font-semibold">Call Us</span>
          </a>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="p-2"
            aria-label="Toggle menu"
          >
            <svg 
              width="24" 
              height="24" 
              viewBox="0 0 24 24" 
              fill="none" 
              className={isHomePage ? 'text-white' : 'text-[#06112a]'}
            >
              {isMenuOpen ? (
                <path 
                  d="M18 6L6 18M6 6L18 18" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              ) : (
                <path 
                  d="M4 6H20M4 12H20M4 18H20" 
                  stroke="currentColor" 
                  strokeWidth="2" 
                  strokeLinecap="round" 
                  strokeLinejoin="round"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Navigation Links - Desktop */}
        <div className="hidden md:flex items-center space-x-12">
          <Link to="/" className={`text-sm font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors ${isHomePage ? 'text-white' : 'text-[#06112a]'}`}>Home</Link>
          <Link to="/about-us" className={`text-sm font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors ${isHomePage ? 'text-white' : 'text-[#06112a]'}`}>About</Link>
          <Link to="/products" className={`text-sm font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors ${isHomePage ? 'text-white' : 'text-[#06112a]'}`}>Products</Link>
          <Link to="/realtor" className={`text-sm font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors ${isHomePage ? 'text-white' : 'text-[#06112a]'}`}>Become an agent</Link>
          <Link to="/contact" className={`text-sm font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors ${isHomePage ? 'text-white' : 'text-[#06112a]'}`}>Contact</Link>
        </div>
        
        {/* Submit Property Button - Desktop */}
        <Link 
          to="/appointment" 
          className={`hidden md:block bg-[#D2A136] ${isHomePage ? 'text-white' : 'text-[#06112a]'} rounded-lg text-sm font-semibold uppercase tracking-wider px-6 py-3 hover:bg-[#B8912E] transition-colors`}
        >
          Book an Appointment
        </Link>

        {/* Mobile Menu */}
        <div 
          className={`fixed inset-0 bg-white z-[9999] transform transition-transform duration-300 ease-in-out ${
            isMenuOpen ? 'translate-x-0' : 'translate-x-full'
          } md:hidden`}
        >
          <div className="flex flex-col h-full">
            <div className="flex justify-end p-6">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="p-2"
                aria-label="Close menu"
              >
                <svg 
                  width="24" 
                  height="24" 
                  viewBox="0 0 24 24" 
                  fill="none" 
                  className="text-[#06112a]"
                >
                  <path 
                    d="M18 6L6 18M6 6L18 18" 
                    stroke="currentColor" 
                    strokeWidth="2" 
                    strokeLinecap="round" 
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="flex flex-col items-center justify-center flex-1 space-y-8 px-6">
              <Link 
                to="/" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#06112a] text-lg font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors w-full text-center"
              >
                Home
              </Link>
              <Link 
                to="/about-us" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#06112a] text-lg font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors w-full text-center"
              >
                About
              </Link>
              <Link 
                to="/products" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#06112a] text-lg font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors w-full text-center"
              >
                Products
              </Link>
              <Link 
                to="/realtor" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#06112a] text-lg font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors w-full text-center"
              >
                Become an agent
              </Link>
              <Link 
                to="/contact" 
                onClick={() => setIsMenuOpen(false)}
                className="text-[#06112a] text-lg font-bold uppercase tracking-wider hover:text-[#D2A136] transition-colors w-full text-center"
              >
                Contact
              </Link>
              <Link 
                to="/appointment" 
                onClick={() => setIsMenuOpen(false)}
                className="bg-[#D2A136] text-white text-lg font-bold uppercase tracking-wider px-8 py-3 hover:bg-[#B8912E] transition-colors w-full text-center"
              >
                Book an Appointment
              </Link>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};
