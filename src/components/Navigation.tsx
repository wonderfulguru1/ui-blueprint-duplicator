
import React from 'react';

export const Navigation: React.FC = () => {
  return (
    <nav className="absolute top-0 left-0 right-0 z-20 bg-black bg-opacity-10 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-6 py-6 flex items-center justify-between">
        {/* Logo */}
        <div className="text-white">
          <div className="text-2xl font-black leading-tight">Oakberry</div>
          <div className="text-xs font-bold uppercase tracking-wider">Real Estate Agency</div>
        </div>
        
        {/* Navigation Links */}
        <div className="hidden md:flex items-center space-x-12 text-white">
          <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#5EA51D] transition-colors">Home</a>
          <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#5EA51D] transition-colors">About</a>
          <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#5EA51D] transition-colors">Properties</a>
          <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#5EA51D] transition-colors">Agents</a>
          <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#5EA51D] transition-colors">Blog</a>
          <a href="#" className="text-sm font-bold uppercase tracking-wider hover:text-[#5EA51D] transition-colors">Contact</a>
        </div>
        
        {/* Submit Property Button */}
        <button className="hidden md:block bg-[#5EA51D] text-white text-sm font-semibold uppercase tracking-wider px-6 py-3 hover:bg-[#4a8617] transition-colors">
          Submit A Property
        </button>
      </div>
    </nav>
  );
};
